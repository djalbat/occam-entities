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
    const shortenedVersionJSON = this.shortenedVersion.toJSON(),
          name = this.name,
          shortenedVersion = shortenedVersionJSON,  ///
          json = {
            name,
            shortenedVersion
          };

    return json;
  }

  fromJSON(json) {
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