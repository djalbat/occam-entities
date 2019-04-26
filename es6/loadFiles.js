'use strict';

const open = require('occam-open-cli');

const { Files } = open;

function loadFiles(paths, projectsDirectoryPath, callback) {
  const files = Files.fromPaths(paths, projectsDirectoryPath);

  return callback(files);
}

module.exports = loadFiles;
