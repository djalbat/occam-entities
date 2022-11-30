"use strict";

import { arrayUtilities } from "necessary";
import { pathUtilities, fileSystemUtilities } from "necessary";
import { createFile, mkdirs as createDirectory } from "fs-extra";

const { first } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory } = fileSystemUtilities;

export default function createProjectEntry(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        firstPathMap = first(pathMaps),
        pathMap = firstPathMap,  ///
        { sourceEntryPath, targetEntryPath } = pathMap;

  createEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
    const sourceEntryPaths = [
            sourceEntryPath
          ],
          targetEntryPaths = [
            targetEntryPath
          ];

    const json = {
      sourceEntryPaths,
      targetEntryPaths
    };

    callback(json);
  });
}

export function createEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    createDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      createFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function createFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const targetFilePath = targetEntryPath;  ///

  if (targetFilePath === null) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  createFile(absoluteTargetFilePath, (error) => {
    if (error) {
      targetEntryPath = null;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function createDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const targetDirectoryPath = targetEntryPath; //

  if (targetDirectoryPath === null) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  createDirectory(absoluteTargetDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = null;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
