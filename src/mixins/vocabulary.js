"use strict";

import { fileNameFromFilePath } from "../utilities/name";
import { TYPE_VOCABULARY_FILE_NAME, SYMBOL_VOCABULARY_FILE_NAME } from "../fileNames";

function getVocabulary(vocabularyFileName) {
  let vocabulary = null;

  const customGrammarVocabularyFiles = this.getCustomGrammarVocabularyFiles(),
        customGrammarVocabularyFile = customGrammarVocabularyFiles.find((customGrammarVocabularyFile) => {
        const customGrammarVocabularyFilePath = customGrammarVocabularyFile.getPath(),
              customGrammarVocabularyFileName = fileNameFromFilePath(customGrammarVocabularyFilePath);

        if (customGrammarVocabularyFileName === vocabularyFileName) {
          return true;
        }
      }) || null;

  if (customGrammarVocabularyFile !== null) {
    const customGrammarVocabularyFileContent = customGrammarVocabularyFile.getContent();

    vocabulary = customGrammarVocabularyFileContent;  ///
  }

  return vocabulary;
}

function getTypeVocabulary() {
  const fileName = TYPE_VOCABULARY_FILE_NAME, ///
        vocabulary = this.getVocabulary(fileName),
        typeVocabulary = vocabulary;  ///

  return typeVocabulary;
}

function getSymbolVocabulary() {
  const fileName = SYMBOL_VOCABULARY_FILE_NAME, ///
        vocabulary = this.getVocabulary(fileName),
        symbolVocabulary = vocabulary;  ///

  return symbolVocabulary;
}

const vocabularyMixins =  {
  getVocabulary,
  getTypeVocabulary,
  getSymbolVocabulary
};

export default vocabularyMixins;
