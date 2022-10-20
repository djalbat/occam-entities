"use strict";

import { loadProjects as loadProjectsEx } from "./utilities/fileSystem";

export default function loadProjects(projectsDirectoryPath, json, callback) {
  const loadOnlyRecognisedFiles = false, ///
        { doNotLoadHiddenFilesAndDirectories } = json,
        projects = loadProjectsEx(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  json = (projects !== null) ?  ///
            projects.toJSON():
                null;

  callback(json);
}
