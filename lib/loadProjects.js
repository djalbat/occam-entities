"use strict";

const { fileSystemUtilities } = require("occam-open-cli");

const { projectsFromProjectsDirectoryPath } = fileSystemUtilities;

function loadProjects(projectsDirectoryPath, json, callback) {
  const loadOnlyRecognisedFiles = false, ///
        { doNotLoadHiddenFilesAndDirectories } = json,
        projects = projectsFromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  json = (projects !== null) ?  ///
            projects.toJSON():
                null;

  callback(json);
}

module.exports = loadProjects;
