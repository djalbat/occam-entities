'use strict';

const open = require('occam-open-cli');

const { Projects } = open;

function loadProjects(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, callback) {
  const allowOnlyRecognisedFiles = false, ///
        projects = Projects.fromProjectsDirectoryPath(projectsDirectoryPath, allowOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);

  callback(projects);
}

module.exports = loadProjects;
