'use strict';

function saveFile(projectsDirectoryPath, file, callback) {
  file.save(projectsDirectoryPath);

  const success = true; ///

  callback(success);
}

module.exports = saveFile;
