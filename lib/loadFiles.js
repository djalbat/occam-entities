"use strict";

const { fileSystemUtilities } = require("occam-open-cli");

const { filesFromPaths } = fileSystemUtilities;

function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
        paths = filePaths, ///
        files = filesFromPaths(paths, projectsDirectoryPath);

  json = (files !== null) ? ///
           files.toJSON() :
             null;

  return callback(json);
}

module.exports = loadFiles;
