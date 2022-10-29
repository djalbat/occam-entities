"use strict";

import Files from "./files";

import { saveFiles as saveFilesEx } from "./utilities/fileSystem"

export default function saveFiles(projectsDirectoryPath, json, callback) {
  const files = Files.fromJSON(json);

  saveFilesEx(files, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}
