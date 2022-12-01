"use strict";

import { arrayUtilities } from "necessary";
import { pathUtilities, fileSystemUtilities } from "necessary";
import { createFile, mkdirs as createDirectory } from "fs-extra";

const { first } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { checkEntryExists } = fileSystemUtilities;

export default function createProjectEntry(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        firstPathMap = first(pathMaps),
        pathMap = firstPathMap,  ///
        { sourceEntryPath, targetEntryPath, entryDirectory } = pathMap;

  createEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
    const targetEntryPaths = [
            targetEntryPath
          ];

    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function createEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback) {
  entryDirectory ?
    createDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      createFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function createFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const targetFilePath = targetEntryPath, ///
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  createFile(absoluteTargetFilePath, (error) => {
    if (error) {
      targetEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function createDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const targetDirectoryPath = targetEntryPath,  ///
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  createDirectory(absoluteTargetDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
