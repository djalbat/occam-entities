"use strict";

import { move as rename } from "fs-extra";
import { arrayUtilities } from "necessary";
import { pathUtilities, fileSystemUtilities } from "necessary";

const { last } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory } = fileSystemUtilities;

export default function renameProjectEntry(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        lastPathMap = last(pathMaps),
        pathMap = lastPathMap,  ///
        { sourceEntryPath, targetEntryPath } = pathMap;

  renameEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
    const entryMissing = (sourceEntryPath === null),
          entryUnmoved = (sourceEntryPath === targetEntryPath),
          targetEntryPaths = pathMaps.map((pathMap) => {
            let targetEntryPath;

            const { sourceEntryPath } = pathMap;

            if (false) {
              ///
            } else if (entryMissing) {
              targetEntryPath = null;
            } else if (entryUnmoved) {
              targetEntryPath = sourceEntryPath;  ///
            } else {
              ({ targetEntryPath } = pathMap);
            }

            return targetEntryPath;
          });

    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function renameEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    renameDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      renameFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function renameFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath,  ///
        targetFilePath = targetEntryPath;  ///

  if (sourceFilePath === targetFilePath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  rename(absoluteSourceFilePath, absoluteTargetFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function renameDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath; //

  if (sourceDirectoryPath === targetDirectoryPath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  rename(absoluteSourceDirectoryPath, absoluteTargetDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
