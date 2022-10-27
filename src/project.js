"use strict";

import Entries from "./entries";
import bnfMixins from "./mixins/bnf";
import filesMixins from "./mixins/files";
import Dependencies from "./dependencies";
import entriesMixins from "./mixins/entries";
import patternMixins from "./mixins/pattern";

import { metaJSONFileFromFiles } from "./utilities/files";
import { repositoryFromNode, dependenciesFromNode, metaJSONNodeFromMetaJSONFile } from "./utilities/metaJSON";

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

  getDependencyNames() {
    const dependencyNames = this.dependendies.mapDependency((dependency) => {
      const dependencyName = dependency.getName();

      return dependencyName;
    });

    return dependencyNames;
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

    const project = new Project(name, entries, repository, dependencies);

    return project;
  }

  static fromName(name) {
    const entries = Entries.fromNothing(),
          repository = null,  ///
          dependencies = Dependencies.fromNothing(),
          project = new Project(name, entries, repository, dependencies);

    return project;
  }

  static fromNameAndEntries(name, entries) {
    const files = entries.getFiles(),
          metaJSONFile = metaJSONFileFromFiles(files);

    let repository = null,
        dependencies = Dependencies.fromNothing();

    if (metaJSONFile !== null) {
      const metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile);

      if (metaJSONNode !== null) {
        const node = metaJSONNode;  ///

        repository = repositoryFromNode(node);
        dependencies = dependenciesFromNode(node);
      }
    }

    const project = new Project(name, entries, repository, dependencies);

    return project;
  }
}

Object.assign(Project.prototype, bnfMixins);
Object.assign(Project.prototype, filesMixins);
Object.assign(Project.prototype, entriesMixins);
Object.assign(Project.prototype, patternMixins);

export default Project;
