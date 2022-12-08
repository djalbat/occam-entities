"use strict";

import { loadFiles as loadFilesEx } from "./utilities/fileSystem"

export default function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
        paths = filePaths, ///
        files = loadFilesEx(paths, projectsDirectoryPath);

  json = (files !== null) ? ///
            files.toJSON() :
              null;

  return callback(json);
}
