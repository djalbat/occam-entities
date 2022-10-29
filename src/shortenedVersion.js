"use strict";

import { MAJOR_NUMBER_MULTIPLIER, MINOR_NUMBER_MULTIPLIER } from "./multiplers";
import { majorNumberFromNumber, minorNumberFromNumber, majorNumberFromString, minorNumberFromString } from "./utilities/version";

export default class ShortenedVersion {
  constructor(majorNumber, minorNumber) {
    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
  }

  getMajorNumber() {
    return this.majorNumber;
  }

  getMinorNumber() {
    return this.minorNumber;
  }

  asNumber() {
    const number = this.majorNumber * MAJOR_NUMBER_MULTIPLIER + this.minorNumber * MINOR_NUMBER_MULTIPLIER;

    return number;
  }

  matchVersion(version) {
    let versionMatches = false;

    const majorNumber = version.getMajorNumber();

    if (this.majorNumber === majorNumber) {
      const minorNumber = version.getMinorNumber();

      if (this.minorNumber >= minorNumber) {
        versionMatches = true;
      }
    }

    return versionMatches;
  }

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}`;

    return string;
  }

  toJSON() {
    const majorNumber = this.majorNumber,
          minorNumber = this.minorNumber,
          json = {
            majorNumber,
            minorNumber
          };

    return json;
  }

  static fromJSON(json) {
    const { majorNumber, minorNumber } = json,
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }

  static fromString(string) {
    const majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }

  static fromVersionNumber(versionNumber) {
    const number = versionNumber, ///
          majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }
}
