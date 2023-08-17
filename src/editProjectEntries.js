"use strict";

import { move as edit, remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists } = fileSystemUtilities;

export default function editProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  editEntries(pathMaps, projectsDirectoryPath, (targetEntryPaths) => {
    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function editEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  entryDirectory ?
    editDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      editFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function editEntries(pathMaps, projectsDirectoryPath, callback) {
  const targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      editEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
      callback(targetEntryPaths);
    }
  );
}

function editFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  edit(absoluteSourceFilePath, absoluteTargetFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function editDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath,  ///
        targetDirectoryPath = targetEntryPath,  ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!sourceDirectoryEmpty) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    remove(absoluteSourceDirectoryPath, (error) => {
      if (error) {
        targetEntryPath = sourceEntryPath;  ///
      }

      callback(sourceEntryPath, targetEntryPath);
    });

    return;
  }

  edit(absoluteSourceDirectoryPath, absoluteTargetDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
