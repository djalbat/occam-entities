"use strict";

import { asynchronousUtilities } from "necessary";

const { forEach } = asynchronousUtilities;

export function asynchronousForEach(pathMaps, callback, done) {
  forEach(
    pathMaps,
    (pathMap, next, done, context, index) => {
      const { sourcePath, targetPath, directory } = pathMap;

      callback(sourcePath, targetPath, directory, next, done, index);
    },
    done
  );
}

export default {
  asynchronousForEach
};
