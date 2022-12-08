"use strict";

import { loadRelease as loadReleaseEx } from "./utilities/fileSystem"

export default function loadRelease(projectsDirectoryPath, json, callback) {
  const { fileName } = json,
        topmostFileName = fileName,  ///
        release = loadReleaseEx(topmostFileName, projectsDirectoryPath);

  json = (release !== null) ?  ///
            release.toJSON():
              null;

  return callback(json);
}
