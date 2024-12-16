"use strict";

const readmeFilePathPattern = "^(?:[^\\/]+\\/){1}README\\.md$",
      furtleFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.ftl$",
      nominalFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.nml$",
      markdownFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.md$",
      metaJSONFilePathPattern = "^(?:[^\\/]+\\/){1}meta\\.json$",
      indexJSONFilePathPattern = "^(?:[^\\/]+\\/){1}index\\.json$",
      markdownStyleFilePathPattern = "^(?:[^\\/]+\\/){1,}[^\\.]+\\.mds$",
      customGrammarBNFFilePathPattern = "^(?:[^\\/]+\\/){1}(term|statement)\\.bnf$",
      customGrammarPatternFilePathPattern = "^(?:[^\\/]+\\/){1}(type|symbol|property|operator)\\.ptn$",
      defaultMarkdownStyleFilePathPattern = "^[^\\/]+\\/default\\.mds$",
      releaseFilePathPattern = `${readmeFilePathPattern}|${furtleFilePathPattern}|${nominalFilePathPattern}|${metaJSONFilePathPattern}|${customGrammarBNFFilePathPattern}|${customGrammarPatternFilePathPattern}`,
      recognisedFilePathPattern = `${releaseFilePathPattern}|${indexJSONFilePathPattern}|${markdownFilePathPattern}|${markdownStyleFilePathPattern}`;

const readmeFilePathRegularExpression = new RegExp(readmeFilePathPattern),
      furtleFilePathRegularExpression = new RegExp(furtleFilePathPattern),
      releaseFilePathRegularExpression = new RegExp(releaseFilePathPattern),
      nominalFilePathRegularExpression = new RegExp(nominalFilePathPattern),
      markdownFilePathRegularExpression = new RegExp(markdownFilePathPattern),
      metaJSONFilePathRegularExpression = new RegExp(metaJSONFilePathPattern),
      indexJSONFilePathRegularExpression = new RegExp(indexJSONFilePathPattern),
      recognisedFilePathRegularExpression = new RegExp(recognisedFilePathPattern),
      markdownStyleFilePathRegularExpression = new RegExp(markdownStyleFilePathPattern),
      customGrammarBNFFilePathRegularExpression = new RegExp(customGrammarBNFFilePathPattern),
      customGrammarPatternFilePathRegularExpression = new RegExp(customGrammarPatternFilePathPattern),
      defaultMarkdownStyleFilePathRegularExpression = new RegExp(defaultMarkdownStyleFilePathPattern);

export function isFilePathReadmeFilePath(filePath) { return readmeFilePathRegularExpression.test(filePath); }

export function isFilePathFurtleFilePath(filePath) { return furtleFilePathRegularExpression.test(filePath); }

export function isFilePathReleaseFilePath(filePath) { return releaseFilePathRegularExpression.test(filePath); }

export function isFilePathNominalFilePath(filePath) { return nominalFilePathRegularExpression.test(filePath); }

export function isFilePathMarkdownFilePath(filePath) { return markdownFilePathRegularExpression.test(filePath); }

export function isFilePathMetaJSONFilePath(filePath) { return metaJSONFilePathRegularExpression.test(filePath); }

export function isFilePathIndexJSONFilePath(filePath) { return indexJSONFilePathRegularExpression.test(filePath); }

export function isFilePathRecognisedFilePath(filePath) { return recognisedFilePathRegularExpression.test(filePath); }

export function isFilePathMarkdownStyleFilePath(filePath) { return markdownStyleFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarBNFFilePath(filePath) { return customGrammarBNFFilePathRegularExpression.test(filePath); }

export function isFilePathCustomGrammarPatternFilePath(filePath) { return customGrammarPatternFilePathRegularExpression.test(filePath); }

export function isFilePathDefaultMarkdownStyleFilePath(filePath) { return defaultMarkdownStyleFilePathRegularExpression.test(filePath); }

export default {
  isFilePathReadmeFilePath,
  isFilePathFurtleFilePath,
  isFilePathReleaseFilePath,
  isFilePathNominalFilePath,
  isFilePathMarkdownFilePath,
  isFilePathMetaJSONFilePath,
  isFilePathIndexJSONFilePath,
  isFilePathRecognisedFilePath,
  isFilePathMarkdownStyleFilePath,
  isFilePathCustomGrammarBNFFilePath,
  isFilePathCustomGrammarPatternFilePath,
  isFilePathDefaultMarkdownStyleFilePath
};
