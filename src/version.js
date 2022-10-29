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

  asNumber() {
    const number = this.majorNumber * MAJOR_NUMBER_MULTIPLIER + this.minorNumber * MINOR_NUMBER_MULTIPLIER + this.patchNumber * PATCH_NUMBER_MULTIPLIER;

    return number;
  }

  toString() {
    const string = `${this.majorNumber}.${this.minorNumber}.${this.patchNumber}`;

    return string;
  }

  toJSON() {
    const majorNumber = this.majorNumber,
          minorNumber = this.minorNumber,
          patchNumber = this.patchNumber,
          json = {
            majorNumber,
            minorNumber,
            patchNumber
          };

    return json;
  }

  static fromJSON(json) {
    const { majorNumber, minorNumber, patchNumber } = json,
          version = new Version(majorNumber, minorNumber, patchNumber);

    return version;
  }

  static fromString(string) {
    const majorNumber = majorNumberFromString(string),
          minorNumber = minorNumberFromString(string),
          patchNumber = patchNumberFromString(string),
          version = new Version(majorNumber, minorNumber, patchNumber);

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
