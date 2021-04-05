"use strict";

const { remove } = require("fs-extra"), ///
      { pathUtilities, fileSystemUtilities } = require("necessary");

const pathMapsUtilities = require("./utilities/pathMaps");

const { concatenatePaths } = pathUtilities,
      { asynchronousForEach } = pathMapsUtilities,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourcePath, targetPath, directory, next, done, index) => {
      removeEntry(sourcePath, targetPath, projectsDirectoryPath, (targetPath) => {
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

module.exports = removeProjectEntries;

function removeEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (sourcePath === targetPath) {
    callback(targetPath);
  } else {
    const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
          entryExists = checkEntryExists(absoluteSourcePath);

    if (!entryExists) {
      targetPath = null;

      callback(targetPath);
    } else {
      const entryDirectory = isEntryDirectory(absoluteSourcePath);

      entryDirectory ?
        removeDirectory(sourcePath, projectsDirectoryPath, callback) :
          removeFile(sourcePath, projectsDirectoryPath, callback);
    }
  }
}

function removeFile(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath);

  remove(absoluteSourcePath, (error) => {
    const success = !error, ///
          targetPath = success ?
                         null :
                           sourcePath;

    callback(targetPath);
  });
}

function removeDirectory(sourcePath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        directoryEmpty = isDirectoryEmpty(absoluteSourcePath);

  if (!directoryEmpty) {
    const targetPath = sourcePath;

    callback(targetPath);
  } else {
    remove(absoluteSourcePath, (error) => {
      const success = !error, ///
            targetPath = success ?
                            null :
                              sourcePath;

      callback(targetPath);
    });
  }
}
