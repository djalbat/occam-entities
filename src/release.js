"use strict";

import File from "./file";
import Entries from "./entries";
import entriesMixins from "./mixins/entries";

import { DOUBLE_SPACE } from "./constants";
import { isMetaJSONFileValid } from "./utilities/metaJSON";
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

    const entriesReleasable = areEntriesReleasable(entries);

    if (entriesReleasable) {
      release = new Release(name, entries);
    }

    return release;
  }

  static fromProject(project) {
    let release = null,
        entries = project.getEntries();

    const entriesReleasable = areEntriesReleasable(entries);

    if (entriesReleasable) {
      const name = project.getName(),
            releasedEntries = releaseEntries(entries);

      entries = releasedEntries;  ///

      release = new Release(name, entries);
    }

    return release;
  }
}

Object.assign(Release.prototype, entriesMixins);

export default Release;

function releaseEntries(entries) {
  const releasedEntries = Entries.fromNothing(),  ///
        files = entries.getFiles();

  files.forEachFile((file) => {
    const path = file.getPath(),
          content = file.getContent(),
          released = true;

    file = File.fromPathContentAndReleased(path, content, released);  ///

    releasedEntries.addFile(file);
  });

  return releasedEntries;
}

function areEntriesReleasable(entries) {
  let entriesReleasable = false;

  const files = entries.getFiles(),
        readmeFile = readmeFileFromFiles(files),
        metaJSONFile = metaJSONFileFromFiles(files);

  if ((readmeFile !== null) && (metaJSONFile !== null)) {
    const metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);

    if (metaJSONFileValid !== null) {
      entriesReleasable = true;
    }
  }

  return entriesReleasable;
}
