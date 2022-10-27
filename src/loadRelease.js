"use strict";

import { loadRelease as loadReleaseEx } from "./utilities/fileSystem"

export default function loadRelease(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
        path = filePath,  ///
        file = loadReleaseEx(path, projectsDirectoryPath);

  json = (file !== null) ?  ///
           file.toJSON():
             null;

  return callback(json);
}
