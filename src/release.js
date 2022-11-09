"use strict";

import Entries from "./entries";
import entriesMixins from "./mixins/entries";

import { DOUBLE_SPACE } from "./constants";
import { metaJSONNodeFromMetaJSONFile } from "./utilities/metaJSON";
import { readmeFileFromFiles, metaJSONFileFromFiles } from "./utilities/files";

class Release {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  updateVersion(version) {
    let repository = this.getRepository(),
        dependencies = this.getDependencies();

    const versionString = version.toString(),
          repositoryJSON = repository,  ///
          dependenciesJSON = dependencies.toJSON();

    version = versionString;  ///
    repository = repositoryJSON;  ///
    dependencies = dependenciesJSON;  ///

    const metaJSONFile = this.getMetaJSONFile(),
          json = {
            version,
            repository,
            dependencies
          },
          jsonString = JSON.stringify(json, null, DOUBLE_SPACE),
          file = metaJSONFile,  ///
          content = jsonString; ///

    file.setContent(content);
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          json = {
            name,
            entries
          };

    return json;
  }

  static fromJSON(json) {
    let { entries } = json;

    const { name } = json,
          entriesJSON = entries;  ///

    json = entriesJSON; ///

    entries = Entries.fromJSON(json); ///

    const release = new Release(name, entries);

    return release;
  }

  static fromNameAndEntries(name, entries) {
    let release = null;

    const files = entries.getFiles(),
          readmeFile = readmeFileFromFiles(files),
          metaJSONFile = metaJSONFileFromFiles(files);

    if ((readmeFile !== null) && (metaJSONFile !== null)) {
      const metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile);

      if (metaJSONNode !== null) {
        release = new Release(name, entries);
      }
    }

    return release;
  }
}

Object.assign(Release.prototype, entriesMixins);

export default Release;
