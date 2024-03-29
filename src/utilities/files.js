"use strict";

import { isFilePathReadmeFilePath,
         isFilePathFlorenceFilePath,
         isFilePathMetaJSONFilePath,
         isFilePathCustomGrammarBNFFilePath,
         isFilePathCustomGrammarPatternFilePath } from "../utilities/filePath";

export function readmeFileFromFiles(files) {
  let readmeFile = null;

  files.someFile((file) => {
    const filePath = file.getPath(),
          filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);

    if (filePathReadmeFilePath) {
      readmeFile = file;  ///

      return true;
    }
  });

  return readmeFile;
}

export function metaJSONFileFromFiles(files) {
  let metaJSONFile = null;

  files.someFile((file) => {
    const filePath = file.getPath(),
          filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

    if (filePathMetaJSONFilePath) {
      metaJSONFile = file;  ///

      return true;
    }
  });

  return metaJSONFile;
}

export function florenceFilesFromFiles(files) {
  const florenceFiles = files.reduceFile((florenceFiles, file) => {
          const filePath = file.getPath(),
                filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath),
                fileFlorenceFile = filePathFlorenceFilePath;  ///

          if (fileFlorenceFile) {
            const florenceFile = file;  ///

            florenceFiles.push(florenceFile);
          }

          return florenceFiles;
        }, []);

  return florenceFiles;
}

export function customGrammarBNFFilesFromFiles(files) {
  const customGrammarBNFFiles = files.reduceFile((customGrammarBNFFiles, file) => {
          const filePath = file.getPath(),
                filePathCustomGrammarBNFFilePath = isFilePathCustomGrammarBNFFilePath(filePath),
                fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath;  ///

          if (fileCustomGrammarBNFFile) {
            const customGrammarBNFFile = file;  ///

            customGrammarBNFFiles.push(customGrammarBNFFile);
          }

          return customGrammarBNFFiles;
        }, []);

  return customGrammarBNFFiles;
}

export function customGrammarPatternFilesFromFiles(files) {
  const customGrammarPatternFiles = files.reduceFile((customGrammarPatternFiles, file) => {
          const filePath = file.getPath(),
                filePathCustomGrammarPatternFilePath = isFilePathCustomGrammarPatternFilePath(filePath),
                fileCustomGrammarPatternFile = filePathCustomGrammarPatternFilePath;  ///

          if (fileCustomGrammarPatternFile) {
            const customGrammarPatternFile = file;  ///

            customGrammarPatternFiles.push(customGrammarPatternFile);
          }

          return customGrammarPatternFiles;
        }, []);

  return customGrammarPatternFiles;
}
