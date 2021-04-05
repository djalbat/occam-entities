"use strict";

const { fileSystemUtilities } = require("occam-open-cli");

const { saveFiles: saveFilesEx } = fileSystemUtilities;

function saveFiles(projectsDirectoryPath, json, callback) {
  const files = Files.fromJSON(json);

  saveFilesEx(files, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}

module.exports = saveFiles;
