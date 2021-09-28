"use strict";

import { move } from "fs-extra";
import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeEntry } from "./removeProjectEntries";
import { asynchronousForEach } from "./utilities/pathMaps";

const { concatenatePaths } = pathUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourcePath, targetPath, directory, next, done, index) => {
      moveEntry(sourcePath, targetPath, projectsDirectoryPath, (targetPath) => {
        targetPaths.push(targetPath);

        next();
      });
    },
    () => {
    	const json = targetPaths; ///

      callback(json);
    }
  );
}

export function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (targetPath === null) {
    removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback);

    return;
  }

  if (sourcePath === targetPath) {
    callback(targetPath);

    return;
  }

  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        sourceEntryExists = checkEntryExists(absoluteSourcePath);

  if (!sourceEntryExists) {
    targetPath = null;

    callback(targetPath);

    return;
  }

  const absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath),
        targetEntryExists = checkEntryExists(absoluteTargetPath);

  if (targetEntryExists) {
    targetPath = sourcePath;  ///

    callback(targetPath);

    return;
  }

  const entryDirectory = isEntryDirectory(absoluteSourcePath);

  entryDirectory ?
    moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) :
      moveFile(sourcePath, targetPath, projectsDirectoryPath, callback);
}

function moveFile(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath);

  move(absoluteSourcePath, absoluteTargetPath, (error) => {
    const success = !error;
    
    targetPath = success ?
                   targetPath :
                     sourcePath;  ///

    callback(targetPath);
  });
}

function moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourcePath);

  if (!directoryEmpty) {
    const targetPath = sourcePath;  ///

    callback(targetPath);

    return;
  }

  move(absoluteSourcePath, absoluteTargetPath, (error) => {
    const success = !error;

    targetPath = success ?
                   targetPath :
                     sourcePath;  ///

    callback(targetPath);
  });
}
