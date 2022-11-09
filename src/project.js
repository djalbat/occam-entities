"use strict";

import Entries from "./entries";
import entriesMixins from "./mixins/entries";

class Project {
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

    const project = new Project(name, entries);

    return project;
  }

  static fromName(name) {
    const entries = Entries.fromNothing(),
          project = new Project(name, entries);

    return project;
  }

  static fromNameAndEntries(name, entries) {
    const project = new Project(name, entries);

    return project;
  }
}

Object.assign(Project.prototype, entriesMixins);

export default Project;
