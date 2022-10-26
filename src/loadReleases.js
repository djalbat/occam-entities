"use strict";

import { loadReleases as loadReleasesEx } from "./utilities/fileSystem";

export default function loadReleases(projectsDirectoryPath, json, callback) {
  const releases = loadReleasesEx(projectsDirectoryPath);

  json = (releases !== null) ?  ///
            releases.toJSON():
              null;

  callback(json);
}
