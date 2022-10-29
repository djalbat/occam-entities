"use strict";

import { arrayUtilities } from "necessary";

import { MAJOR_NUMBER_MULTIPLIER, MINOR_NUMBER_MULTIPLIER, PATCH_NUMBER_MULTIPLIER } from "./multiplers";

const { second } = arrayUtilities;

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

function majorNumberFromNumber(number) {
  const majorNumber = (number !== null) ?
                        Math.floor(number / MAJOR_NUMBER_MULTIPLIER) :
                          0;  ///

  return majorNumber;
}

function minorNumberFromNumber(number) {
  const minorNumber = (number !== null) ?
                        Math.floor(number / MINOR_NUMBER_MULTIPLIER) :
                          0;  ///

  return minorNumber;
}

function patchNumberFromNumber(number) {
  const patchNumber = (number !== null) ?
                        Math.floor(number / PATCH_NUMBER_MULTIPLIER) :
                          0;  ///

  return patchNumber;
}

function majorNumberFromString(string) {
  let majorNumber = 0;

  if (string) {
    const matches = string.match(/^(\d+)\.\d+\.\d+$/),
          secondMatch = second(matches);

    majorNumber = secondMatch;  ///
  }

  return majorNumber;
}

function minorNumberFromString(string) {
  let minorNumber = 0;

  if (string) {
    const matches = string.match(/^\d+\.(\d+)\.\d+$/),
          secondMatch = second(matches);

    minorNumber = secondMatch;  ///
  }

  return minorNumber;
}

function patchNumberFromString(string) {
  let patchNumber = 0;

  if (string) {
    const matches = string.match(/^\d+\.\d+\.(\d+)$/),
          secondMatch = second(matches);

    patchNumber = secondMatch;  ///
  }

  return patchNumber;
}
