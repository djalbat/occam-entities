"use strict";

import { fileSystemUtilities } from "occam-open-cli";

const { loadFiles: loadFilesEx } = fileSystemUtilities;

export default function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
        paths = filePaths, ///
        files = loadFilesEx(paths, projectsDirectoryPath);

  json = (files !== null) ? ///
           files.toJSON() :
             null;

  return callback(json);
}
