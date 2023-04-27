"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";
import { createFile, mkdirs as createDirectory } from "fs-extra";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists } = fileSystemUtilities;

export default function createProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  createEntries(pathMaps, projectsDirectoryPath, (targetEntryPaths) => {
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

function createEntries(pathMaps, projectsDirectoryPath, callback) {
  const targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      createEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
      callback(targetEntryPaths);
    }
  );
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
