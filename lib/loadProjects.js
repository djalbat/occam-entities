"use strict";

const open = require("occam-open-cli");

const { Projects } = open;

function loadProjects(projectsDirectoryPath, json, callback) {
  const loadOnlyRecognisedFiles = false, ///
        { doNotLoadHiddenFilesAndDirectories } = json,
        projects = Projects.fromProjectsDirectoryPath(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  json = (projects !== null) ?  ///
            projects.toJSON():
                null;

  callback(json);
}

module.exports = loadProjects;
