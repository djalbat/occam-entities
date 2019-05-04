'use strict';

const open = require('occam-open-cli');

const { File } = open;

function loadFile(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
		    path = filePath,  ///
		    file = File.fromPath(path, projectsDirectoryPath);

  json = file.toJSON(); ///

  return callback(json);
}

module.exports = loadFile;
