"use strict";

import { move as moveExtra, remove as removeExtra } from "fs-extra";

export function move(absoluteSourcePath, absoluteTargetPath, callback) {
  moveExtra(absoluteSourcePath, absoluteTargetPath, callback);
}

export function remove(absoluteSourcePath, callback) {
  removeExtra(absoluteSourcePath, callback);
}
