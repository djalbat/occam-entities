"use strict";

import { EMPTY_STRING } from "../constants";
import { fileNameFromFilePath } from "../utilities/name";
import { TERM_BNF_FILE_NAME, STATEMENT_BNF_FILE_NAME } from "../fileNames";

function getBNF(bnfFileName) {
  let bnf = EMPTY_STRING;

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
  getTermBNF,
  getStatementBNF
};

export default bnfMixins;
