'use strict';

const open = require('occam-open-cli');

const { File } = open;

function loadFile(projectsDirectoryPath, path, callback) {
  const file = File.fromPath(path, projectsDirectoryPath);

  return callback(file);
}

module.exports = loadFile;
