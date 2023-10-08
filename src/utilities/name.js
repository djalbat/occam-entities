"use strict";

import { pathUtilities } from "necessary";

const { bottommostNameFromPath } = pathUtilities;

export function fileNameFromFilePath(filePath) {
  const path = filePath,  ///
        bottommostName = bottommostNameFromPath(path),
        fileName = bottommostName;  //

  return fileName;
}
