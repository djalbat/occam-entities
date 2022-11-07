"use strict";

import { MAJOR_NUMBER_MULTIPLIER, MINOR_NUMBER_MULTIPLIER, PATCH_NUMBER_MULTIPLIER } from "./multiplers";
import { majorNumberFromNumber,
         minorNumberFromNumber,
         patchNumberFromNumber,
         majorNumberFromString,
         minorNumberFromString,
         patchNumberFromString } from "./utilities/version";

export default class Version {
  constructor(majorNumber, minorNumber, patchNumber) {
    this.majorNumber = majorNumber;
    this.minorNumber = minorNumber;
    this.patchNumber = patchNumber;
  }

  getMajorNumber() {
    return this.majorNumber;
  }

  getMinorNumber() {
    return this.minorNumber;
  }

  getPatchNumber() {
    return this.patchNumber;
  }

  bumpMajorNumber() {
    this.majorNumber += 1;
  }

  bumpMinorNumber() {
    this.minorNumber += 1;
  }

  bumpPatchNumber() {
    this.patchNumber += 1;
  }

  resetMajorNumber() {
    this.majorNumber = 0;
  }

  resetMinorNumber() {
    this.minorNumber = 0;
  }

  resetPatchNumber() {
    this.patchNumber = 0;
  }

  matchShortenedVersion(shortenedVersion) {
    let matchesShortenedVersion = false;

    if (shortenedVersion === null) {
      matchesShortenedVersion = true;
    } else {
      const majorNumber = shortenedVersion.getMajorNumber();

      if (this.majorNumber === majorNumber) {
        const minorNumber = shortenedVersion.getMinorNumber();

        if (this.minorNumber >= minorNumber) {
          matchesShortenedVersion = true;
        }
      }
    }

    return matchesShortenedVersion;
  }

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}.${this.patchNumber}`;

    return string;
  }

  toVersionNumber() {
    const versionNumber = this.majorNumber * MAJOR_NUMBER_MULTIPLIER + this.minorNumber * MINOR_NUMBER_MULTIPLIER + this.patchNumber * PATCH_NUMBER_MULTIPLIER;

    return versionNumber;
  }

  static fromString(string) {
    const majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          patchNumber = patchNumberFromString(string),
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }

  static fromNothing() {
    const majorNumber = 0,
          minorNumber = 0,
          patchNumber = 0,
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }

  static fromVersion(version) {
    const majorNumber = version.getMajorNumber(),
          minorNumber = version.getMinorNumber(),
          patchNumber = version.getPatchNumber();

    version = new Version(majorNumber, minorNumber, patchNumber); ///

    return version;
  }

  static fromVersionNumber(versionNumber) {
    const number = versionNumber, ///
          majorNumber = majorNumberFromNumber(number),
          minorNumber = minorNumberFromNumber(number),
          patchNumber = patchNumberFromNumber(number),
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }
}
