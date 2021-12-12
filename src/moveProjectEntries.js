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
		    targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      moveEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        sourceEntryPaths.push(sourceEntryPath);
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
    	const json = {
        sourceEntryPaths,
        targetEntryPaths
      };

      callback(json);
    }
  );
}

export function moveEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  if (targetEntryPath === null) {
    removeEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);

    return;
  }

  if (sourceEntryPath === targetEntryPath) {
    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  const entryDirectory = isEntryDirectory(absoluteSourceEntryPath);

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
    sourceEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  move(absoluteSourceFilePath, absoluteTargetFilePath, (error) => {
    if (error) {
      sourceEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function moveDirectory(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, //
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkEntryExists(absoluteTargetDirectoryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!sourceDirectoryEmpty) {
    sourceEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  if (targetDirectoryExists) {
    remove(absoluteSourceDirectoryPath, (error) => {
      if (error) {
        sourceEntryPath = null;
      }

      callback(sourceEntryPath, targetEntryPath);
    });

    return;
  }

  move(absoluteSourceDirectoryPath, absoluteTargetDirectoryPath, (error) => {
    if (error) {
      sourceEntryPath = null;
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
