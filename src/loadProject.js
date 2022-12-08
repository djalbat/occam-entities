"use strict";

import { loadProject as loadProjectEx } from "./utilities/fileSystem"

export default function loadProject(projectsDirectoryPath, json, callback) {
  const { directoryName } = json,
        topmostDirectoryName = directoryName,  ///
        loadOnlyRecognisedFiles = false, ///
        project = loadProjectEx(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);

  json = (project !== null) ?  ///
            project.toJSON():
              null;

  return callback(json);
}
