"use strict";

import { readmeFileFromFiles,
         furtleFilesFromFiles,
         nominalFilesFromFiles,
         metaJSONFileFromFiles,
         customGrammarBNFFilesFromFiles,
         customGrammarPatternFilesFromFiles } from "../utilities/files";

function getReadmeFile() {
  const files = this.getFiles(),
        readmeFile = readmeFileFromFiles(files);

  return readmeFile;
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

function getMetaJSONFile() {
  const files = this.getFiles(),
        metaJSONFile = metaJSONFileFromFiles(files);

  return metaJSONFile;
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
  getFurtleFiles,
  getNominalFiles,
  getMetaJSONFile,
  getCustomGrammarBNFFiles,
  getCustomGrammarPatternFiles
};

export default filesMixins;
