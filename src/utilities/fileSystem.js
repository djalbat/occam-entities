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
  let file;

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
    file = null;
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
  let files;

  try {
    const pathsLength = paths.length;

    if (pathsLength > 0) {
      const firstPath = first(paths),
            path = firstPath, ///
            topmostDirectoryName = topmostDirectoryNameFromPath(path);

      if (topmostDirectoryName !== null) {
        const absolutePath = concatenatePaths(projectsDirectoryPath, topmostDirectoryName),
              entryDirectory = isEntryDirectory(absolutePath);

        files = entryDirectory ?
                  filesFromProject(paths, projectsDirectoryPath) :
                    filesFromRelease(paths, projectsDirectoryPath);
      }
    }
  } catch (error) {
    files = null;
  }

  return files;
}

export function saveFiles(files, projectsDirectoryPath) {
  files.forEachFile((file) => {
    saveFile(file, projectsDirectoryPath);
  });
}

export function loadRelease(releaseName, projectsDirectoryPath) {
  let release;

  try {
    const name = releaseName, ///
          topmostFileName = releaseName,  ///
          absolutePath = concatenatePaths(projectsDirectoryPath, topmostFileName),
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
    release = null;
  }

  return release;
}

export function loadProject(projectName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  let project;

  try {
    const name = projectName,  ///
          topmostDirectoryName = projectName, ///
          entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

    project = Project.fromNameAndEntries(name, entries);
  } catch (error) {
    project = null;
  }

  return project;
}

export function loadReleases(projectsDirectoryPath) {
  let releases;

  try {
    releases = Releases.fromNothing();

    const topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath),
          releaseNames = topmostFileNames;  ///

    releaseNames.forEach((releaseName) => {
      const release = loadRelease(releaseName, projectsDirectoryPath);

      if (release !== null) {
        releases.addRelease(release);
      }
    });
  } catch (error) {
    releases = null;
  }

  return releases;
}

export function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles) {
  let projects;

  try {
    projects = Projects.fromNothing();

    const topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath),
      projectNames = topmostDirectoryNames; ///

    projectNames.forEach((projectName) => {
      const project = loadProject(projectName, projectsDirectoryPath, loadOnlyRecognisedFiles);

      if (project !== null) {
        projects.addProject(project);
      }
    });
  } catch (error) {
    projects = null;
  }

  return projects;
}

export function loadDirectory(path, projectsDirectoryPath) {
  let directory;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directory = Directory.fromPath(path);
    }
  } catch (error) {
    directory = null;
  }

  return directory;
}

export default {
  loadFile,
  saveFile,
  loadFiles,
  saveFiles,
  loadRelease,
  loadProject,
  loadReleases,
  loadProjects,
  loadDirectory
};

function loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const entries = Entries.fromNothing(),
        relativeDirectoryPath = topmostDirectoryName;  ///

  entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles);

  return entries;
}

function fileFromProject(path, projectsDirectoryPath) {
  let file = null;

  const absolutePath = concatenatePaths(projectsDirectoryPath, path),
        entryFile = isEntryFile(absolutePath);

  if (entryFile) {
    const released = false;

    let content = readFile(absolutePath);

    content = convertContentTabsToWhitespace(content);  ///

    file = File.fromPathContentAndReleased(path, content, released);
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
