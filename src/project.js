"use strict";

import Entries from "./entries";
import bnfMixins from "./mixins/bnf";
import filesMixins from "./mixins/files";
import Dependencies from "./dependencies";
import entriesMixins from "./mixins/entries";
import patternMixins from "./mixins/pattern";

class Project {
  constructor(name, entries, repository, dependencies) {
    this.name = name;
    this.entries = entries;
    this.repository = repository;
    this.dependencies = dependencies;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getRepository() {
    return this.repository;
  }

  getDependencies() {
    return this.dependencies;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          dependenciesJSON = this.dependencies.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          repository = this.repository,
          dependencies = dependenciesJSON,  ///
          json = {
            name,
            entries,
            repository,
            dependencies
          };

    return json;
  }

  static fromJSON(json) {
    let { entries, dependencies } = json;

    const { name, repository } = json,
          entriesJSON = entries,  ///
          dependenciesJSON = dependencies; ///

    json = entriesJSON; ///

    entries = Entries.fromJSON(json); ///

    json = dependenciesJSON; ///

    dependencies = Dependencies.fromJSON(json);

    const release = new Project(name, entries, repository, dependencies);

    return release;
  }

  static fromName(name) {
    const entries = Entries.fromNothing(),
          repository = null,  ///
          dependencies = Dependencies.fromNothing(),
          project = new Project(name, entries, repository, dependencies);

    return project;
  }

  static fromNameEntriesRepositoryAndDependencies(name, entries, repository, dependencies) {
    const project = new Project(name, entries, repository, dependencies);

    return project;
  }
}

Object.assign(Project.prototype, bnfMixins);
Object.assign(Project.prototype, filesMixins);
Object.assign(Project.prototype, entriesMixins);
Object.assign(Project.prototype, patternMixins);

export default Project;
