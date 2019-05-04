'use strict';

const open = require('occam-open-cli');

const { File } = open;

function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(json);

  file.save(projectsDirectoryPath);

  json = {};  ///

  callback(json);
}

module.exports = saveFile;
