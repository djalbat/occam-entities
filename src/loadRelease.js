"use strict";

import { loadRelease as loadReleaseEx } from "./utilities/fileSystem"

export default function loadRelease(projectsDirectoryPath, json, callback) {
  const { releaseName } = json,
        release = loadReleaseEx(releaseName, projectsDirectoryPath);

  json = (release !== null) ?  ///
            release.toJSON():
              null;

  return callback(json);
}
