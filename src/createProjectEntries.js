"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths, pathWithoutBottommostNameFromPath } = pathUtilities,
      { createFile: createFileEx,
        createDirectory: createDirectoryEx,
        checkEntryExists: checkFileExists,
        checkEntryExists: checkDirectoryExists } = fileSystemUtilities;

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

export function createDirectory(directoryPath, callback) {
  let error = null;

  const directoryPathWithoutBottommostName = pathWithoutBottommostNameFromPath(directoryPath),
        parentDirectoryPath = directoryPathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    error = `The '${directoryPath}' directory's parent directory does not exist`;
  } else {
    try {
      createDirectoryEx(directoryPath)
    } catch (nativeError) {
      error = nativeError;  ///
    }
  }

  callback(error);
}

export function createFile(filePath, callback) {
  let error = null;

  const filePathWithoutBottommostName = pathWithoutBottommostNameFromPath(filePath),
        parentDirectoryPath = filePathWithoutBottommostName,  ///
        parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

  if (!parentDirectoryExists) {
    error = `The '${filePath}' file's parent directory does not exist`;
  } else {
    try {
      createFileEx(filePath)
    } catch (nativeError) {
      error = nativeError;  ///
    }
  }

  callback(error);
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
        targetFileExists = checkFileExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const filePath = absoluteTargetFilePath;  ///

  createFile(filePath, (error) => {
    if (error) {
      targetEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function createDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const targetDirectoryPath = targetEntryPath,  ///
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkFileExists(absoluteTargetDirectoryPath);

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
