"use strict";

export function isStringVersionString(string) { return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string); }

export function isStringShortenedVersionString(string) { return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string); }
