'use strict';

const open = require('occam-open-cli');

const { Project } = open;

function importProject(json, callback) {
  const { url } = json;

  Project.fromURL(url, function(project) {
    const json = (project !== null) ?
                   project.toJSON() :
                     null;

    callback(json);
  });
}

module.exports = importProject;
