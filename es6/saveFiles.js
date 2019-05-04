'use strict';

function saveFiles(projectsDirectoryPath, files, callback) {
  files.save(projectsDirectoryPath);

  const success = true; ///

  callback(success);
}

module.exports = saveFiles;
