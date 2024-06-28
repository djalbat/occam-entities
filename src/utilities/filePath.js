"use strict";

const readmeFilePathPattern = "^(?:[^\\/]+\\/){1}README\\.md$",
      markdownFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.md$",
      florenceFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.fls$",
      metaJSONFilePathPattern = "^(?:[^\\/]+\\/){1}meta\\.json$",
      indexJSONFilePathPattern = "^(?:[^\\/]+\\/){1}index\\.json$",
      markdownStyleFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.mds$",
      customGrammarBNFFilePathPattern = "^(?:[^\\/]+\\/){1}(term|statement|metastatement)\\.bnf$",
      customGrammarPatternFilePathPattern = "^(?:[^\\/]+\\/){1}(type|symbol|operator)\\.ptn$",
      defaultMarkdownStyleFilePathPattern = "^[^\\/]+\\/default\\.mds$",
      recognisedFilePathPattern = `${markdownFilePathPattern}|${florenceFilePathPattern}|${metaJSONFilePathPattern}|${indexJSONFilePathPattern}|${markdownStyleFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarPatternFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      markdownFilePathRegularExpression = new RegExp(markdownFilePathPattern),
      florenceFilePathRegularExpression = new RegExp(florenceFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      indexJSONFilePathRegularExpression = new RegExp(indexJSONFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      markdownStyleFilePathRegularExpression = new RegExp(markdownStyleFilePathPattern),
      customGrammarBNFFilePathRegularExpression = new RegExp(customGrammarBNFFilePathPattern),
      customGrammarPatternFilePathRegularExpression = new RegExp(customGrammarPatternFilePathPattern),
      defaultMarkdownStyleFilePathRegularExpression = new RegExp(defaultMarkdownStyleFilePathPattern);

export function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

export function isFilePathMarkdownFilePath(filePath) { return markdownFilePathRegularExpression.test(filePath); }

export function isFilePathFlorenceFilePath(filePath) { return florenceFilePathRegularExpression.test(filePath); }

export function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

export function isFilePathIndexJSONFilePath(filePath) { return indexJSONFilePathRegularExpression.test(filePath); }

export function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

export function isFilePathMarkdownStyleFilePath(filePath) { return markdownStyleFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarBNFFilePath(filePath) { return customGrammarBNFFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarPatternFilePath(filePath) { return customGrammarPatternFilePathRegularExpression.test(filePath); }

export function isFilePathDefaultMarkdownStyleFilePath(filePath) { return defaultMarkdownStyleFilePathRegularExpression.test(filePath); }

export default {
  isFilePathReadmeFilePath,
  isFilePathMarkdownFilePath,
  isFilePathFlorenceFilePath,
  isFilePathMetaJSONFilePath,
  isFilePathIndexJSONFilePath,
  isFilePathRecognisedFilePath,
  isFilePathMarkdownStyleFilePath,
  isFilePathCustomGrammarBNFFilePath,
  isFilePathCustomGrammarPatternFilePath,
  isFilePathDefaultMarkdownStyleFilePath
};
