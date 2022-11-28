"use strict";

import { remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
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
      removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        sourceEntryPaths.push(sourceEntryPath);
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    done
  );
}

export function removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    removeDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      removeFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function removeFile(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
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

  remove(absoluteSourceFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function removeDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
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

  remove(absoluteSourceDirectoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
