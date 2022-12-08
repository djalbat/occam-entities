"use strict";

import mkdirp from "mkdirp";

import { arrayUtilities, pathUtilities, fileSystemUtilities } from "necessary";

import File from "../file";
import Files from "../files";
import Entries from "../entries";
import Project from "../project";
import Release from "../release";
import Projects from "../projects";
import Releases from "../releases";
import Directory from "../directory";

import { isNameHiddenName } from "../utilities/name";
import { isFilePathRecognisedFilePath } from "../utilities/filePath";
import { convertContentTabsToWhitespace } from "../utilities/content";

const { first } = arrayUtilities,
      { readFile, writeFile, isEntryFile, readDirectory, isEntryDirectory } = fileSystemUtilities,
      { concatenatePaths, topmostDirectoryNameFromPath, topmostDirectoryPathFromPath } = pathUtilities;

export function loadFile(path, projectsDirectoryPath) {
  let file = null;

  try {
    const topmostDirectoryName = topmostDirectoryNameFromPath(path);

    if (topmostDirectoryName !== null) {
      const absolutePath = concatenatePaths(projectsDirectoryPath, topmostDirectoryName),
            entryDirectory = isEntryDirectory(absolutePath);

      file = entryDirectory ?
               fileFromProject(path, projectsDirectoryPath) :
                 fileFromRelease(path, projectsDirectoryPath);
    }
  } catch (error) {
    ///
  }

  return file;
}

export function saveFile(file, projectsDirectoryPath) {
  const path = file.getPath(),
        content = file.getContent(),
        absolutePath = concatenatePaths(projectsDirectoryPath, path),
        topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

  mkdirp.sync(topmostAbsoluteDirectoryPath);

  writeFile(absolutePath, content);
}

export function loadFiles(paths, projectsDirectoryPath) {
  let files = null;

  try {
    const topmostDirectoryName = topmostDirectoryNameFromPath(path);

    if (topmostDirectoryName !== null) {
      const absolutePath = concatenatePaths(projectsDirectoryPath, topmostDirectoryName),
            entryDirectory = isEntryDirectory(absolutePath);

      files = entryDirectory ?
                filesFromProject(paths, projectsDirectoryPath) :
                  filesFromRelease(paths, projectsDirectoryPath);
    }
  } catch (error) {
    ///
  }

  return files;
}

export function saveFiles(files, projectsDirectoryPath) {
  files.forEachFile((file) => {
    saveFile(file, projectsDirectoryPath);
  });
}

export function loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const entries = Entries.fromNothing(),
        relativeDirectoryPath = topmostDirectoryName;  ///

  entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles);

  return entries;
}

export function loadRelease(topmostFileName, projectsDirectoryPath) {
  let release = null;

  try {
    const name = topmostFileName, ///
          absolutePath = concatenatePaths(projectsDirectoryPath, name),
          entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      let json,
          entries;

      const content = readFile(absolutePath);

      json = JSON.parse(content);

      ({ entries } = json);

      json  = entries;  ///

      entries = Entries.fromJSON(json);

      release = Release.fromNameAndEntries(name, entries);
    }
  } catch (error) {
    ///
  }

  return release;
}

export function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  let project = null;

  try {
    const name = topmostDirectoryName,  ///
          entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

    project = Project.fromNameAndEntries(name, entries);
  } catch (error) {
    ///
  }

  return project;
}

export function loadReleases(projectsDirectoryPath) {
  const releases = Releases.fromNothing(),
        topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath);

  topmostFileNames.forEach((topmostFileName) => {
    const release = loadRelease(topmostFileName, projectsDirectoryPath);

    if (release !== null) {
      releases.addRelease(release);
    }
  });

  return releases;
}

export function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const projects = Projects.fromNothing(),
        topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);

  topmostDirectoryNames.forEach((topmostDirectoryName) => {
    const project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

    if (project !== null) {
      projects.addProject(project);
    }
  });

  return projects;
}

export function loadDirectory(path, projectsDirectoryPath) {
  let directory = null;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directory = Directory.fromPath(path);
    }
  } catch (error) {
    ///
  }

  return directory;
}

export default {
  loadFile,
  saveFile,
  loadFiles,
  saveFiles,
  loadEntries,
  loadRelease,
  loadProject,
  loadReleases,
  loadProjects,
  loadDirectory
};

function fileFromProject(path, projectsDirectoryPath) {
  let file = null;

  const absolutePath = concatenatePaths(projectsDirectoryPath, path),
        entryFile = isEntryFile(absolutePath);

  if (entryFile) {
    let content = readFile(absolutePath);

    content = convertContentTabsToWhitespace(content);  ///

    file = File.fromPathAndContent(path, content);
  }

  return file;
}

function fileFromRelease(path, projectsDirectoryPath) {
  const topmostDirectoryName = topmostDirectoryNameFromPath(path),
        topmostFileName = topmostDirectoryName, ///
        release = loadRelease(topmostFileName, projectsDirectoryPath),
        file = release.getFile(path);

  return file;
}

function filesFromProject(paths, projectsDirectoryPath) {
  const files = Files.fromNothing();

  paths.forEach((path) => {
    const file = fileFromProject(path, projectsDirectoryPath);

    files.addFile(file);
  });

  return files;
}

function filesFromRelease(paths, projectsDirectoryPath) {
  const files = Files.fromNothing(),
        pathsLength = paths.length;

  if (pathsLength > 0) {
    const firstPath = first(paths),
          path = firstPath, ///
          topmostDirectoryName = topmostDirectoryNameFromPath(path),
          topmostFileName = topmostDirectoryName, ///
          release = loadRelease(topmostFileName, projectsDirectoryPath);

    paths.forEach((path) => {
      const file = release.getFile(path);

      files.addFile(file);
    });
  }

  return files;
}

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName),
          loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;

    if (!subEntryNameHiddenName) {
      const path = concatenatePaths(relativeDirectoryPath, subEntryName),
            directory = loadDirectory(path, projectsDirectoryPath);

      if (directory !== null) {
        const directoryPath = path; ///

        if (loadUnrecognisedFilesAndDirectories) {
          entries.addDirectory(directory);
        }

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles); ///
      } else {
        const file = loadFile(path, projectsDirectoryPath);

        if (file !== null) {
          const filePath = file.getPath(),
                filePathRecognisedFilePath = isFilePathRecognisedFilePath(filePath),
                fileRecognisedFile = filePathRecognisedFilePath;  ///

          if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
            entries.addFile(file);
          }
        }
      }
    }
  });
}

function topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  let topmostFileNames;

  const subEntryNames = readDirectory(projectsDirectoryPath);

  topmostFileNames = subEntryNames.reduce((topmostFileNames, subEntryName) => {
    const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryFile = isEntryFile(absoluteSubEntryPath);

      if (subEntryFile) {
        const topmostFileName = subEntryName;  ///

        topmostFileNames.push(topmostFileName)
      }
    }

    return topmostFileNames;
  }, []);

  return topmostFileNames;
}

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  let topmostDirectoryNames;

  const subEntryNames = readDirectory(projectsDirectoryPath);

  topmostDirectoryNames = subEntryNames.reduce((topmostDirectoryNames, subEntryName) => {
    const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

      if (subEntryDirectory) {
        const topmostDirectoryName = subEntryName;  ///

        topmostDirectoryNames.push(topmostDirectoryName)
      }
    }

    return topmostDirectoryNames;
  }, []);

  return topmostDirectoryNames;
}
