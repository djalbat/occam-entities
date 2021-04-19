"use strict";

const { File, fileSystemUtilities } = require("occam-open-cli");

const { saveFile: saveFileEx } = fileSystemUtilities;

function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(json);

  saveFileEx(file, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}

module.exports = saveFile;
