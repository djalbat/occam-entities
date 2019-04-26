'use strict';

const open = require('occam-open-cli');

const { Project } = open;

function importProject(url, callback) {
  Project.fromURL(url, callback);
}

module.exports = importProject;
