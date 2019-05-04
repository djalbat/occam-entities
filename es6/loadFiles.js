'use strict';

const open = require('occam-open-cli');

const { Files } = open;

function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
		    paths = filePaths, ///
		    files = Files.fromPaths(paths, projectsDirectoryPath);

  json = (files !== null) ? ///
		       files.toJSON() :
		         null;

  return callback(json);
}

module.exports = loadFiles;
