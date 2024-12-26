"use strict";

function forEachFile(callback) { return this.entries.forEachFile(callback); }

function findFile(filePath) { return this.entries.findFile(filePath); }

function getBNF() { return this.entries.getBNF(); }

function getFiles() { return this.entries.getFiles(); }

function getTermBNF() { return this.entries.getTermBNF(); }

function getVersion() { return this.entries.getVersion(); }

function getPattern() { return this.entries.getPattern(); }

function getFilePaths() { return this.entries.getFilePaths(); }

function getRepository() { return this.entries.getRepository(); }

function getReadmeFile() { return this.entries.getReadmeFile(); }

function getTypePattern() { return this.entries.getTypePattern(); }

function getSymbolPattern() { return this.entries.getSymbolPattern(); }

function getOperatorPattern() { return this.entries.getOperatorPattern(); }

function getStatementBNF() { return this.entries.getStatementBNF(); }

function getDependencies() { return this.entries.getDependencies(); }

function getMetaJSONFile() { return this.entries.getMetaJSONFile(); }

function getFurtleFiles() { return this.entries.getFurtleFiles(); }

function getNominalFiles() { return this.entries.getNominalFiles(); }

function getDirectoryPaths() { return this.entries.getDirectoryPaths(); }

function getDependencyNames() { return this.entries.getDependencyNames(); }

function getCustomGrammarBNFFiles() { return this.entries.getCustomGrammarBNFFiles(); }

function getCustomGrammarPatternFiles() { return this.entries.getCustomGrammarPatternFiles(); }

const entriesMixins = {
  forEachFile,
  findFile,
  getBNF,
  getFiles,
  getTermBNF,
  getVersion,
  getPattern,
  getFilePaths,
  getRepository,
  getReadmeFile,
  getTypePattern,
  getSymbolPattern,
  getOperatorPattern,
  getStatementBNF,
  getDependencies,
  getMetaJSONFile,
  getFurtleFiles,
  getNominalFiles,
  getDirectoryPaths,
  getDependencyNames,
  getCustomGrammarBNFFiles,
  getCustomGrammarPatternFiles
};

export default entriesMixins;
