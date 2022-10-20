"use strict";

import mkdirp from "mkdirp";

import { pathUtilities, fileSystemUtilities } from "necessary";
import { File, Files, Project, Projects, nameUtilities, entriesUtilities, contentUtilities } from "occam-open-cli";

const { isNameHiddenName } = nameUtilities,
      { convertContentTabsToWhitespace } = contentUtilities,
      { entriesFromTopmostDirectoryName } = entriesUtilities,
      { concatenatePaths, topmostDirectoryPathFromPath } = pathUtilities,
      { readFile, writeFile, isEntryFile, readDirectory, isEntryDirectory } = fileSystemUtilities;

export function loadFile(path, projectsDirectoryPath) {
  let file = null;

  try {
    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      let content = readFile(absolutePath);

      content = convertContentTabsToWhitespace(content);  ///

      file = new File(path, content);
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
  const array = [],
        files = new Files(array);

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

export function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  const name = topmostDirectoryName,  ///
        entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
        project = new Project(name, entries);

  return project;
}

export function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
  let projects;

  try {
    const array = [];

    projects = new Projects(array);

    const topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    topmostDirectoryNames.forEach((topmostDirectoryName) => {
      const project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

      projects.addProject(project);
    });
  } catch (error) {
    projects = null;
  }

  return projects;
}

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  let topmostDirectoryNames;

  const subEntryNames = readDirectory(projectsDirectoryPath);

  topmostDirectoryNames = subEntryNames.reduce((topmostDirectoryNames, subEntryName) => {
    const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
          subEntryNameHiddenName = isNameHiddenName(subEntryName),
          subEntryNameNotHiddenName = !subEntryNameHiddenName,
          loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
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
