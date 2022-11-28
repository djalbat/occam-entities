"use strict";

import { arrayUtilities } from "necessary";

import { moveEntryOperation } from "./moveProjectEntries";

const { last } = arrayUtilities;

export default function renameProjectEntry(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        lastPathMap = last(pathMaps),
        pathMap = lastPathMap,  ///
        { sourceEntryPath, targetEntryPath } = pathMap;

  moveEntryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
    const entryMissing = (sourceEntryPath === null),
          entryUnmoved = (sourceEntryPath === targetEntryPath),
          sourceEntryPaths = [],
          targetEntryPaths = [];

    pathMaps.forEach((pathMap) => {
      let sourceEntryPath,
          targetEntryPath;

      if (false) {
        ///
      } else if (entryMissing) {
        sourceEntryPath = null;

        ({ targetEntryPath } = pathMap);
      } else if (entryUnmoved) {
        ({ sourceEntryPath } = pathMap);

        targetEntryPath = sourceEntryPath;  ///
      } else {
        ({ sourceEntryPath, targetEntryPath } = pathMap);
      }

      sourceEntryPaths.push(sourceEntryPath);
      targetEntryPaths.push(targetEntryPath);
    });

    const json = {
      sourceEntryPaths,
      targetEntryPaths
    };

    callback(json);
  });
}
