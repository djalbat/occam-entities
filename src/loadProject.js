"use strict";

import { loadProject as loadProjectEx } from "./utilities/fileSystem"

export default function loadProject(projectsDirectoryPath, json, callback) {
  const { projectName } = json,
        loadOnlyRecognisedFiles = false, ///
        project = loadProjectEx(projectName, projectsDirectoryPath, loadOnlyRecognisedFiles);

  json = (project !== null) ?  ///
            project.toJSON():
              null;

  return callback(json);
}
