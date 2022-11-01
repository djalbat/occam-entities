"use strict";

import ShortenedVersion from "./shortenedVersion";

export default class Dependency {
  constructor(name, shortenedVersion) {
    this.name = name;
    this.shortenedVersion = shortenedVersion;
  }

  getName() {
    return this.name;
  }

  getShortedVersion() {
    return this.shortenedVersion;
  }

  toJSON() {
    const shortenedVersionString = this.shortenedVersion.toString(),
          name = this.name,
          shortenedVersion = shortenedVersionString,  ///
          json = {
            name,
            shortenedVersion
          };

    return json;
  }

  static fromJSON(json) {
    const { name } = json;

    let { shortenedVersion } = json;

    const shortenedVersionJSON = shortenedVersion; ///

    json = shortenedVersionJSON;  ///

    shortenedVersion = ShortenedVersion.fromJSON(json);

    const dependency = new Dependency(name, shortenedVersion);

    return dependency;
  }

  static fromNameAndShortenedVersion(name, shortenedVersion) {
    const dependency = new Dependency(name, shortenedVersion);

    return dependency;
  }
}
