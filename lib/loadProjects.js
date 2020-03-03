'use strict';

const open = require('occam-open-cli');

const { Projects } = open;

function loadProjects(projectsDirectoryPath, json, callback) {
  const allowOnlyRecognisedFiles = false, ///
        { doNotLoadHiddenFilesAndDirectories } = json,
        projects = Projects.fromProjectsDirectoryPath(projectsDirectoryPath, allowOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  json = projects.toJSON(); ///

  callback(json);
}

module.exports = loadProjects;
