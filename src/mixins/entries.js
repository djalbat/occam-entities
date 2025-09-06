"use strict";

function forEachFile(callback) { return this.entries.forEachFile(callback); }

function findFile(filePath) { return this.entries.findFile(filePath); }

function getBNF() { return this.entries.getBNF(); }

function getFiles() { return this.entries.getFiles(); }

function getTermBNF() { return this.entries.getTermBNF(); }

function getVersion() { return this.entries.getVersion(); }

function getFilePaths() { return this.entries.getFilePaths(); }

function getVocabulary() { return this.entries.getVocabulary(); }

function getRepository() { return this.entries.getRepository(); }

function getReadmeFile() { return this.entries.getReadmeFile(); }

function getStatementBNF() { return this.entries.getStatementBNF(); }

function getDependencies() { return this.entries.getDependencies(); }

function getTypeVocabulary() { return this.entries.getTypeVocabulary(); }

function getSymbolVocabulary() { return this.entries.getSymbolVocabulary(); }

function getMetaJSONFile() { return this.entries.getMetaJSONFile(); }

function getFurtleFiles() { return this.entries.getFurtleFiles(); }

function getNominalFiles() { return this.entries.getNominalFiles(); }

function getDirectoryPaths() { return this.entries.getDirectoryPaths(); }

function getDependencyNames() { return this.entries.getDependencyNames(); }

function getCustomGrammarBNFFiles() { return this.entries.getCustomGrammarBNFFiles(); }

function getCustomGrammarVocabularyFiles() { return this.entries.getCustomGrammarVocabularyFiles(); }

const entriesMixins = {
  forEachFile,
  findFile,
  getBNF,
  getFiles,
  getTermBNF,
  getVersion,
  getFilePaths,
  getVocabulary,
  getRepository,
  getReadmeFile,
  getStatementBNF,
  getDependencies,
  getTypeVocabulary,
  getSymbolVocabulary,
  getMetaJSONFile,
  getFurtleFiles,
  getNominalFiles,
  getDirectoryPaths,
  getDependencyNames,
  getCustomGrammarBNFFiles,
  getCustomGrammarVocabularyFiles
};

export default entriesMixins;
