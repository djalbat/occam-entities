'use strict';

const open = require('occam-open-cli');

const { File } = open;

function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(JSON.parse(json));

  file.save(projectsDirectoryPath);

  const success = true;

  callback(success);
}

module.exports = saveFile;
