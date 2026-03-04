"use strict";

import Release from "./release";

export default class Releases {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getLength() { return this.array.length; }

  addRelease(release) { this.array.push(release); }

  mapRelease(callback) { return this.array.map(callback); }

  reduceRelease(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEachRelease(callback) { this.array.forEach(callback); }

  toJSON() {
    const json = this.array.map((release) => {
      const releaseJSON = release.toJSON();

      return releaseJSON;
    });

    return json;
  }

  static fromJSON(json) {
    const array = json.map((json) => {  ///
            const release = Release.fromJSON(json);

            return release;
          }),
          releases = new Releases(array);

    return releases;
  }

  static fromNothing() {
    const array = [],
          releases = new Releases(array);

    return releases;
  }
}

