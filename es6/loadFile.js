'use strict';

const open = require('occam-open-cli');

const { File } = open;

function loadFile(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
		    path = filePath,  ///
		    file = File.fromPath(path, projectsDirectoryPath);

  json = (file !== null) ?  ///
		       file.toJSON():
		         null;

  return callback(json);
}

module.exports = loadFile;
