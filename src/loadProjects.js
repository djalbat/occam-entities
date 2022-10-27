"use strict";

import { loadProjects as loadProjectsEx } from "./utilities/fileSystem";

export default function loadProjects(projectsDirectoryPath, json, callback) {
  const loadOnlyRecognisedFiles = false, ///
        projects = loadProjectsEx(projectsDirectoryPath, loadOnlyRecognisedFiles);

  json = (projects !== null) ?  ///
            projects.toJSON():
              null;

  callback(json);
}
