"use strict";

import { pathUtilities, arrayUtilities, fileSystemUtilities } from "necessary";

const { last } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { checkEntryExists, removeEntry: removeEntryEx } = fileSystemUtilities;

export default function removeRelease(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        lastPathMap = last(pathMaps),
        pathMap = lastPathMap,  ///
        { sourceEntryPath } = pathMap;

  let error = null;

  const sourceFilePath = sourceEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        sourceFileExists = checkEntryExists(absoluteSourceFilePath);

  if (!sourceFileExists) {
    error = `The '${sourceEntryPath}' package does not exist.`;
  } else {
    const entryPath = absoluteSourceFilePath; ///

    try {
      removeEntryEx(entryPath);
    } catch (nativeError) {
      error = nativeError;  ///
    }
  }

  const targetEntryPaths = pathMaps.forEach((pathMap) => {
    let targetEntryPath;

    if (error === null) {
      targetEntryPath = null;
    } else {
      const { sourceEntryPath } = pathMap;

      targetEntryPath = sourceEntryPath;  ///
    }

    return targetEntryPath;
  })

  json = {  ///
    targetEntryPaths
  };

  callback(json);
}
