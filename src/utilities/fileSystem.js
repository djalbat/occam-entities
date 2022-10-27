"use strict";

import mkdirp from "mkdirp";

import { pathUtilities, fileSystemUtilities } from "necessary";

import File from "../file";
import Files from "../files";
import Entries from "../entries";
import Project from "../project";
import Projects from "../projects";
import Releases from "../releases";
import Directory from "../directory";

import { isNameHiddenName } from "../utilities/name";
import { isFilePathRecognisedFilePath } from "../utilities/filePath";
import { convertContentTabsToWhitespace } from "../utilities/content";

const { concatenatePaths, topmostDirectoryPathFromPath } = pathUtilities,
      { readFile, writeFile, isEntryFile, readDirectory, isEntryDirectory } = fileSystemUtilities;

export function loadFile(path, projectsDirectoryPath) {
  let file = null;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      let content = readFile(absolutePath);

      content = convertContentTabsToWhitespace(content);  ///

      file = File.fromPathAndContent(path, content);
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
  const files = Files.fromNothing();

  paths.forEach((path) => {
    const file = loadFile(path, projectsDirectoryPath);

    files.addFile(file);
  });

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

export function loadRelease(topmostDirectoryName, projectsDirectoryPath) {
  const name = topmostDirectoryName,  ///
        loadOnlyRecognisedFiles = true,
        entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles),
        release = Release.fromNameAndEntries(name, entries);

  return release;
}

export function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
  const name = topmostDirectoryName,  ///
        entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles),
        project = Project.fromNameAndEntries(name, entries);

  return project;
}

export function loadReleases(projectsDirectoryPath) {
  let releases;

  try {
    const releases = Releases.fromNothing(),
          topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath);

    topmostFileNames.forEach((topmostFileName) => {
      const release = loadRelease(topmostFileName, projectsDirectoryPath);

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
  let projects = Projects.fromNothing();

  try {
    const topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);

    topmostDirectoryNames.forEach((topmostDirectoryName) => {
      const project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

      projects.addProject(project);
    });
  } catch (error) {
    projects = null;
  }

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
