"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";
import { removeEntryOperation } from "./removeProjectEntries";
import { removeEntry as removeDirectory } from "./removeProjectEntries";

const { concatenatePaths, pathWithoutBottommostNameFromPath } = pathUtilities,
      { isDirectoryEmpty,
        checkEntryExists,
        renameFile: renameFileEx,
        renameDirectory: renameDirectoryEx,
        checkEntryExists: checkFileExists,
        checkEntryExists: checkDirectoryExists } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  moveEntries(pathMaps, projectsDirectoryPath, (targetEntryPaths) => {
    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function moveEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback) {
  if (targetEntryPath === null) {
    removeEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  entryDirectory ?
    moveDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      moveFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

export function moveDirectory(oldDirectoryPath, newDirectoryPath, callback) {
  let error = null;

  const newDirectoryPathWithoutBottommostName = pathWithoutBottommostNameFromPath(newDirectoryPath),
        newParentDirectoryPath = newDirectoryPathWithoutBottommostName, ///
        newParentDirectoryExists = checkDirectoryExists(newParentDirectoryPath);

  if (!newParentDirectoryExists) {
    error = `The new '${newDirectoryPath}' directory's parent directory does not exist.`;
  } else {
    try {
      renameDirectoryEx(oldDirectoryPath);
    } catch (nativeError) {
      error = nativeError;  ///
    }
  }

  callback(error);
}

export function moveFile(oldFilePath, newFilePath, callback) {
  let error = null;

  const newFilePathWithoutBottommostName = pathWithoutBottommostNameFromPath(newFilePath),
        newParentDirectoryPath = newFilePathWithoutBottommostName, ///
        newParentDirectoryExists = checkFileExists(newParentDirectoryPath);

  if (!newParentDirectoryExists) {
    error = `The new '${newFilePath}' file's parent directory does not exist.`;
  } else {
    try {
      renameFileEx(oldFilePath, newFilePath);
    } catch (nativeError) {
      error = nativeError;  ///
    }
  }

  callback(error);
}

function moveEntries(pathMaps, projectsDirectoryPath, callback) {
  const targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      moveEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
      callback(targetEntryPaths);
    }
  );
}

function moveFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
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

  const oldFilePath = absoluteSourceFilePath, ///
        newFilePath = absoluteTargetFilePath; ///

  moveFile(oldFilePath, newFilePath, (error) => {
    if (error) {
      targetEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function moveDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
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
    const directoryPath = absoluteSourceDirectoryPath;  ///

    removeDirectory(directoryPath, (error) => {
      if (error) {
        targetEntryPath = sourceEntryPath;  ///
      }

      callback(sourceEntryPath, targetEntryPath);
    });

    return;
  }

  const oldDirectoryPath = absoluteSourceDirectoryPath, ///
        newDirectoryPath = absoluteTargetDirectoryPath; ///

  moveDirectory(oldDirectoryPath, newDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
