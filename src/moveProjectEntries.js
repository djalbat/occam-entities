"use strict";

import { move, remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeEntry } from "./removeProjectEntries";
import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      moveEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
    	const json = targetEntryPaths; ///

      callback(json);
    }
  );
}

export function moveEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  if (targetEntryPath === null) {
    removeEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);

    return;
  }

  if (sourceEntryPath === targetEntryPath) {
    callback(targetEntryPath);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath),
        entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(targetEntryPath);

    return;
  }

  entryDirectory ?
    moveDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      moveFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function moveFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath,  ///
        targetFilePath = targetEntryPath,  ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(targetEntryPath);

    return;
  }

  move(absoluteSourceFilePath, absoluteTargetFilePath, (error) => {
    const success = !error;
    
    targetEntryPath = success ?
                        targetEntryPath :
                          sourceEntryPath;  ///

    callback(targetEntryPath);
  });
}

function moveDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, //
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!directoryEmpty) {
    targetEntryPath = sourceEntryPath;  ///

    callback(targetEntryPath);

    return;
  }

  if (targetDirectoryExists) {
    remove(absoluteSourceDirectoryPath, (error) => {
      const success = !error;

      targetEntryPath = success ?
                          targetEntryPath :
                            sourceEntryPath;  ///

      callback(targetEntryPath);
    });

    return;
  }

  move(absoluteSourceDirectoryPath, absoluteTargetDirectoryPath, (error) => {
    const success = !error;

    targetEntryPath = success ?
                        targetEntryPath :
                          sourceEntryPath;  ///

    callback(targetEntryPath);
  });
}
