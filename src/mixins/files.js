"use strict";

import { readmeFileFromFiles,
         furtleFilesFromFiles,
         nominalFilesFromFiles,
         metaJSONFileFromFiles,
         customGrammarBNFFilesFromFiles,
         customGrammarVocabularyFilesFromFiles } from "../utilities/files";

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

function getCustomGrammarVocabularyFiles() {
  const files = this.getFiles(),
        customGrammarVocabularyFiles = customGrammarVocabularyFilesFromFiles(files);

  return customGrammarVocabularyFiles;
}

const filesMixins = {
  getReadmeFile,
  getFurtleFiles,
  getNominalFiles,
  getMetaJSONFile,
  getCustomGrammarBNFFiles,
  getCustomGrammarVocabularyFiles
};

export default filesMixins;
