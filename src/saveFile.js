"use strict";

import { saveFile as saveFileEx } from "./utilities/fileSystem"

export default function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(json);

  saveFileEx(file, projectsDirectoryPath);

  json = {};  ///

  callback(json);
}
