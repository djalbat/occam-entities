"use strict";

import { remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetEntryPaths = [],
        done = () => {
          const json = {
            targetEntryPaths
          };

          callback(json);
        };

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    done
  );
}

export function removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    removeDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      removeFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

function removeFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath,  ///
        targetFilePath = targetEntryPath;  ///

  if (sourceFilePath === targetFilePath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath);

  remove(absoluteSourceFilePath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function removeDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath; ///

  if (sourceDirectoryPath === targetDirectoryPath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

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
