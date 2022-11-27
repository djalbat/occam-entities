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
    const sourceEntryPaths = pathMaps.map((pathMap) => {
            if (sourceEntryPath !== null) {
              ({ sourceEntryPath } = pathMap);
            }

            return sourceEntryPath;
          }),
          targetEntryPaths = pathMaps.map((pathMap) => {
            if (targetEntryPath !== null) {
              ({ targetEntryPath } = pathMap);
            }

            return targetEntryPath;
          }),
          json = {
            sourceEntryPaths,
            targetEntryPaths
          };

    callback(json);
  });
}
