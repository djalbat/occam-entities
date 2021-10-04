"use strict";

import { remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      removeEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (targetEntryPath) => {
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

export function removeEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  if (sourceEntryPath === targetEntryPath) {
    callback(targetEntryPath);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        entryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!entryExists) {
    targetEntryPath = null;

    callback(targetEntryPath);

    return;
  }

  const entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

  entryDirectory ?
    removeDirectory(sourceEntryPath, projectsDirectoryPath, callback) :
      removeFile(sourceEntryPath, projectsDirectoryPath, callback);
}

function removeFile(sourceEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath);

  remove(absoluteSourceEntryPath, (error) => {
    const success = !error,
          targetEntryPath = success ?
                              null :
                                sourceEntryPath;  ///

    callback(targetEntryPath);
  });
}

function removeDirectory(sourceEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourceEntryPath);

  if (!directoryEmpty) {
    const targetEntryPath = sourceEntryPath;  ///

    callback(targetEntryPath);

    return;
  }

  remove(absoluteSourceEntryPath, (error) => {
    const success = !error,
          targetEntryPath = success ?
                          null :
                            sourceEntryPath; ///

    callback(targetEntryPath);
  });
}
