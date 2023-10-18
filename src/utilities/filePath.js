"use strict";

const readmeFilePathPattern = "^(?:[^\\/]+\\/){1}README\\.md$",
      markdownFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.md$",
      florenceFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.fls$",
      metaJSONFilePathPattern = "^(?:[^\\/]+\\/){1}meta\\.json$",
      customGrammarBNFFilePathPattern = "^(?:[^\\/]+\\/){1}(term|statement|metastatement)\\.bnf$",
      customGrammarPatternFilePathPattern = "^(?:[^\\/]+\\/){1}(type|symbol|operator)\\.ptn$",
      recognisedFilePathPattern = `${markdownFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarPatternFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      markdownFilePathRegularExpression = new RegExp(markdownFilePathPattern),
      florenceFilePathRegularExpression = new RegExp(florenceFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      customGrammarBNFFilePathRegularExpression = new RegExp(customGrammarBNFFilePathPattern),
      customGrammarPatternFilePathRegularExpression = new RegExp(customGrammarPatternFilePathPattern);

export function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

export function isFilePathMarkdownFilePath(filePath) { return markdownFilePathRegularExpression.test(filePath); }

export function isFilePathFlorenceFilePath(filePath) { return florenceFilePathRegularExpression.test(filePath); }

export function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

export function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarBNFFilePath(filePath) { return customGrammarBNFFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarPatternFilePath(filePath) { return customGrammarPatternFilePathRegularExpression.test(filePath); }

export default {
  isFilePathReadmeFilePath,
  isFilePathMarkdownFilePath,
  isFilePathFlorenceFilePath,
  isFilePathMetaJSONFilePath,
  isFilePathRecognisedFilePath,
  isFilePathCustomGrammarBNFFilePath,
  isFilePathCustomGrammarPatternFilePath
};
