"use strict";

import { asynchronousUtilities } from "necessary";

const { forEach } = asynchronousUtilities;

export function asynchronousForEach(pathMaps, operation, done) {
  forEach(
    pathMaps,
    (pathMap, next, done, context, index) => {
      const { sourceEntryPath, targetEntryPath, entryDirectory } = pathMap;

      operation(sourceEntryPath, targetEntryPath, entryDirectory, next, done, index);
    },
    done
  );
}

export default {
  asynchronousForEach
};
