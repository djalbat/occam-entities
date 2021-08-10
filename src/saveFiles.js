"use strict";

import { Files, fileSystemUtilities } from "occam-open-cli";

const { saveFiles: saveFilesEx } = fileSystemUtilities;

export default function saveFiles(projectsDirectoryPath, json, callback) {
  const files = Files.fromJSON(json);

  saveFilesEx(files, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}
