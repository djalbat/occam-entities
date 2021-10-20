"use strict";

import { remove } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        sourceEntryPaths = [],
		    targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      removeEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        sourceEntryPaths.push(sourceEntryPath);
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
    	const json = {
        sourceEntryPaths,
        targetEntryPaths
      }

      callback(json);
    }
  );
}

export function removeEntry(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  if (sourceEntryPath === targetEntryPath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        entryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!entryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

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
    const targetEntryPath = null;

    if (error) {
      sourceEntryPath = null;

      callback(sourceEntryPath, targetEntryPath);

      return;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function removeDirectory(sourceEntryPath, projectsDirectoryPath, callback) {
  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceEntryPath);

  if (!sourceDirectoryEmpty) {
    const targetEntryPath = null;

    sourceEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  remove(absoluteSourceEntryPath, (error) => {
    const targetEntryPath = null;

    if (error) {
      sourceEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
