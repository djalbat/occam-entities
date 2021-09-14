"use strict";

import { fileSystemUtilities } from "occam-open-cli";

const { loadProjects: loadProjectsEx } = fileSystemUtilities;

export default function loadProjects(projectsDirectoryPath, json, callback) {
  const loadOnlyRecognisedFiles = false, ///
        { doNotLoadHiddenFilesAndDirectories } = json,
        projects = loadProjectsEx(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  json = (projects !== null) ?  ///
            projects.toJSON():
                null;

  callback(json);
}
