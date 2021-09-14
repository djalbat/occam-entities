"use strict";

import { fileSystemUtilities } from "occam-open-cli";

const { loadFile: loadFileEx } = fileSystemUtilities;

export default function loadFile(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
        path = filePath,  ///
        file = loadFileEx(path, projectsDirectoryPath);

  json = (file !== null) ?  ///
           file.toJSON():
             null;

  return callback(json);
}
