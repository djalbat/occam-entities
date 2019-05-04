'use strict';

const open = require('occam-open-cli');

const { Files } = open;

function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
		    paths = filePaths, ///
		    files = Files.fromPaths(paths, projectsDirectoryPath);

  json = files.toJSON();  ///

  return callback(json);
}

module.exports = loadFiles;
