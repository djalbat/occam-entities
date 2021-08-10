"use strict";

import { fileSystemUtilities } from "occam-open-cli";

const { filesFromPaths } = fileSystemUtilities;

export default function loadFiles(projectsDirectoryPath, json, callback) {
  const { filePaths } = json,
        paths = filePaths, ///
        files = filesFromPaths(paths, projectsDirectoryPath);

  json = (files !== null) ? ///
           files.toJSON() :
             null;

  return callback(json);
}
