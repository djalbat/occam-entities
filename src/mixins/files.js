"use strict";

import { readmeFileFromFiles,
         metaJSONFileFromFiles,
         florenceFilesFromFiles,
         contextJSONFileFromFiles,
         customGrammarBNFFilesFromFiles,
         customGrammarPatternFilesFromFiles } from "../utilities/files";

function getReadmeFile() {
  const files = this.getFiles(),
        readmeFile = readmeFileFromFiles(files);

  return readmeFile;
}

function getMetaJSONFile() {
  const files = this.getFiles(),
        metaJSONFile = metaJSONFileFromFiles(files);

  return metaJSONFile;
}

function getFlorenceFiles() {
  const files = this.getFiles(),
        florenceFiles = florenceFilesFromFiles(files);

  return florenceFiles;
}

function getContextJSONFile() {
  const files = this.getFiles(),
        contextJSONFile = contextJSONFileFromFiles(files);

  return contextJSONFile;
}

function getCustomGrammarBNFFiles() {
  const files = this.getFiles(),
        customGrammarBNFFiles = customGrammarBNFFilesFromFiles(files);

  return customGrammarBNFFiles;
}

function getCustomGrammarPatternFiles() {
  const files = this.getFiles(),
        customGrammarPatternFiles = customGrammarPatternFilesFromFiles(files);

  return customGrammarPatternFiles;
}

const filesMixins = {
  getReadmeFile,
  getMetaJSONFile,
  getFlorenceFiles,
  getContextJSONFile,
  getCustomGrammarBNFFiles,
  getCustomGrammarPatternFiles
};

export default filesMixins;
