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

  asString() {
    let string;

    if (this.shortenedVersion !== null) {
      const shortenedVersionString = this.shortenedVersion.toString();

      string = `${this.name}@${shortenedVersionString}`;
    } else {
      string = this.name; ///
    }

    return string;
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
