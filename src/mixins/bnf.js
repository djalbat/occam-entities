"use strict";

import { fileNameFromFilePath } from "../utilities/name";
import { TYPE_PATTERN_FILE_NAME, TERM_BNF_FILE_NAME, STATEMENT_BNF_FILE_NAME } from "../fileNames";

function getBNF(bnfFileName) {
  let bnf = null;

  const customGrammarBNFFiles = this.getCustomGrammarBNFFiles(),
        customGrammarBNFFile = customGrammarBNFFiles.find((customGrammarBNFFile) => {
        const customGrammarBNFFilePath = customGrammarBNFFile.getPath(),
              customGrammarBNFFileName = fileNameFromFilePath(customGrammarBNFFilePath);

        if (customGrammarBNFFileName === bnfFileName) {
          return true;
        }
      }) || null;

  if (customGrammarBNFFile !== null) {
    const customGrammarBNFFileContent = customGrammarBNFFile.getContent();

    bnf = customGrammarBNFFileContent;  ///
  }

  return bnf;
}

function getTypeBNF() {
  const fileName = TYPE_BNF_FILE_NAME, ///
        bnf = this.getBNF(fileName),
        typeBNF = bnf;  ///

  return typeBNF;
}

function getTermBNF() {
  const fileName = TERM_BNF_FILE_NAME, ///
        bnf = this.getBNF(fileName),
        termBNF = bnf;  ///

  return termBNF;
}

function getStatementBNF() {
  const fileName = STATEMENT_BNF_FILE_NAME, ///
        bnf = this.getBNF(fileName),
        statementBNF = bnf;  ///

  return statementBNF;
}

const bnfMixins = {
  getBNF,
  getTypeBNF,
  getTermBNF,
  getStatementBNF
};

export default bnfMixins;
