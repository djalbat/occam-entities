'use strict';

const fsExtra = require('fs-extra'),
      necessary = require('necessary');

const constants = require('./constants'),
      pathMapsUtilities = require('./utilities/pathMaps');

const { move, remove } = fsExtra,
      { pathUtilities, fileSystemUtilities } = necessary,
      { concatenatePaths } = pathUtilities,
      { asynchronousForEach } = pathMapsUtilities,
      { DEST_ALREADY_EXISTS_MESSAGE } = constants,
      { checkEntryExists, isEntryDirectory, isDirectoryEmpty } = fileSystemUtilities;

function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
		    targetPaths = [];

  asynchronousForEach(
    pathMaps,
    function(sourcePath, targetPath, directory, next, done, index) {
      moveEntry(sourcePath, targetPath, projectsDirectoryPath, function(targetPath) {
        targetPaths.push(targetPath);

        next();
      });
    },
    function() {
    	const json = targetPaths; ///

      callback(json);
    }
  );
}

module.exports = moveProjectEntries;

function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
  if (targetPath === null) {
    callback(targetPath);
  } else {
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
          moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) :
            moveFile(sourcePath, targetPath, projectsDirectoryPath, callback);
      }
    }
  }
}

function moveFile(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath);

  move(absoluteSourcePath, absoluteTargetPath, function(error) {
    const success = !error; ///
    
    targetPath = success ?
                   targetPath :
                     sourcePath;

    callback(targetPath);
  });
}

function moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) {
  const absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath),
        absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourcePath);

  if (!directoryEmpty) {
    const targetPath = sourcePath;

    callback(targetPath);
  } else {
    move(absoluteSourcePath, absoluteTargetPath, function(error) {
      const success = !error; ///

      if (success) {
        callback(targetPath);
      } else {
        const { message } = error;

        if (message !== DEST_ALREADY_EXISTS_MESSAGE) {
          const targetPath = sourcePath;

          callback(targetPath);
        } else {
          remove(absoluteSourcePath, function(error) {
            const success = !error; ///

            if (!success) {
              targetPath = sourcePath;
            }

            callback(targetPath);
          });
        }
      }
    });
  }
}
