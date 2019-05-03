'use strict';

const open = require('occam-open-cli');

const { Files } = open;

function saveFiles(projectsDirectoryPath, json, callback) {
  const files = Files.fromJSON(json);

  files.save(projectsDirectoryPath);

  const success = true;

  callback(success);
}

module.exports = saveFiles;
