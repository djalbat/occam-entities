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

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}`;

    return string;
  }

  toVersionNumber() {
    const versionNumber = this.majorNumber * MAJOR_NUMBER_MULTIPLIER + this.minorNumber * MINOR_NUMBER_MULTIPLIER;

    return versionNumber;
  }

  getLeastMatchingVersionNumber() {
    const versionNumber = this.toVersionNumber(),
          leastMatchingVersionNumber = versionNumber; ///

    return leastMatchingVersionNumber;
  }

  getGreatestMatchingVersionNumber() {
    const majorNumber = this.majorNumber + 1,
          minorNumber = 0,
          shortenedVersion = ShortenedVersion.fromMajorNumberAndMinorNumber(majorNumber, minorNumber),
          shortenedVersionNumber = shortenedVersion.toVersionNumber(),
          greatestMatchingVersionNumber = shortenedVersionNumber - 1;

    return greatestMatchingVersionNumber;
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

  static fromMajorNumberAndMinorNumber(majorNumber, minorNumber) {
    const shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);

    return shortenedVersion;
  }
}
