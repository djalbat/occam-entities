"use strict";

import { loadFile as loadFileEx } from "./utilities/fileSystem"

export default function loadFile(projectsDirectoryPath, json, callback) {
  const { filePath } = json,
        path = filePath,  ///
        file = loadFileEx(path, projectsDirectoryPath);

  json = (file !== null) ?  ///
           file.toJSON():
             null;

  return callback(json);
}
