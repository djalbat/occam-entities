"use strict";

import { File, fileSystemUtilities } from "occam-open-cli";

const { saveFile: saveFileEx } = fileSystemUtilities;

export default function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(json);

  saveFileEx(file, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}
