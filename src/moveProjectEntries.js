"use strict";

import { move, remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";
import { removeEntryOperation } from "./removeProjectEntries";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        sourceEntryPaths = [],
		    targetEntryPaths = [],
        done = () => {
          const json = {
            sourceEntryPaths,
            targetEntryPaths
          };

          callback(json);
        };

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      moveEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        sourceEntryPaths.push(sourceEntryPath);
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    done
  );
}

export function moveEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  if (targetEntryPath === null) {
    removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    moveDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      moveFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function moveFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath,  ///
        targetFilePath = targetEntryPath;  ///

  if (sourceFilePath === targetFilePath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        sourceFileExists = checkEntryExists(absoluteSourceFilePath);

  if (!sourceFileExists) {
    sourceEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkEntryExists(absoluteTargetFilePath);

  if (targetFileExists) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  move(absoluteSourceFilePath, absoluteTargetFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function moveDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath; //

  if (sourceDirectoryPath === targetDirectoryPath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        sourceDirectoryExists = checkEntryExists(absoluteSourceDirectoryPath);

  if (!sourceDirectoryExists) {
    sourceEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

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

  move(absoluteSourceDirectoryPath, absoluteTargetDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
