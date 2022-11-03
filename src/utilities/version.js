"use strict";

import { arrayUtilities } from "necessary";

import { MAJOR_NUMBER_MULTIPLIER, MINOR_NUMBER_MULTIPLIER, PATCH_NUMBER_MULTIPLIER } from "../multiplers";

const { second } = arrayUtilities;

export function majorNumberFromNumber(number) {
  const majorNumber = (number !== null) ?
                        Math.floor(number / MAJOR_NUMBER_MULTIPLIER) :
                          0;  ///

  return majorNumber;
}

export function minorNumberFromNumber(number) {
  const minorNumber = (number !== null) ?
                        Math.floor((number % MAJOR_NUMBER_MULTIPLIER) / MINOR_NUMBER_MULTIPLIER) :
                          0;  ///

  return minorNumber;
}

export function patchNumberFromNumber(number) {
  const patchNumber = (number !== null) ?
                        Math.floor((number % MINOR_NUMBER_MULTIPLIER) / PATCH_NUMBER_MULTIPLIER) :
                          0;  ///

  return patchNumber;
}

export function majorNumberFromString(string) {
  let majorNumber = 0;

  if (string) {
    const matches = string.match(/^(\d+)/),
          secondMatch = second(matches);

    majorNumber = Number(secondMatch);  ///
  }

  return majorNumber;
}

export function minorNumberFromString(string) {
  let minorNumber = 0;

  if (string) {
    const matches = string.match(/^\d+\.(\d+)/),
          secondMatch = second(matches);

    minorNumber = Number(secondMatch);  ///
  }

  return minorNumber;
}

export function patchNumberFromString(string) {
  let patchNumber = 0;

  if (string) {
    const matches = string.match(/^\d+\.\d+\.(\d+)/),
          secondMatch = second(matches);

    patchNumber = Number(secondMatch);  ///
  }

  return patchNumber;
}
