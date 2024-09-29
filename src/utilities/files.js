"use strict";

import { isFilePathReadmeFilePath,
         isFilePathNominalFilePath,
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

export function nominalFilesFromFiles(files) {
  const nominalFiles = files.reduceFile((nominalFiles, file) => {
          const filePath = file.getPath(),
                filePathNominalFilePath = isFilePathNominalFilePath(filePath),
                fileNominalFile = filePathNominalFilePath;  ///

          if (fileNominalFile) {
            const nominalFile = file;  ///

            nominalFiles.push(nominalFile);
          }

          return nominalFiles;
        }, []);

  return nominalFiles;
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
