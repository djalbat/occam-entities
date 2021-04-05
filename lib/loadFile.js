"use strict";

const { fileSystemUtilities } = require("occam-open-cli");

const { fileFromPath } = fileSystemUtilities;

function loadFile(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
        path = filePath,  ///
        file = fileFromPath(path, projectsDirectoryPath);

  json = (file !== null) ?  ///
           file.toJSON():
             null;

  return callback(json);
}

module.exports = loadFile;
