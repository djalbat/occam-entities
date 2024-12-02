"use strict";

import { readmeFileFromFiles,
         metaJSONFileFromFiles,
         nominalFilesFromFiles,
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

function getFurtleFiles() {
  const files = this.getFiles(),
        furtleFiles = furtleFilesFromFiles(files);

  return furtleFiles;
}

function getNominalFiles() {
  const files = this.getFiles(),
        nominalFiles = nominalFilesFromFiles(files);

  return nominalFiles;
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
  getFurtleFiles,
  getNominalFiles,
  getCustomGrammarBNFFiles,
  getCustomGrammarPatternFiles
};

export default filesMixins;
