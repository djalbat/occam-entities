"use strict";

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

  static fromName(name) {
    const shortenedVersion = null,
          dependency = new Dependency(name, shortenedVersion);

    return dependency;
  }

  static fromNameAndShortenedVersion(name, shortenedVersion) {
    const dependency = new Dependency(name, shortenedVersion);

    return dependency;
  }
}
