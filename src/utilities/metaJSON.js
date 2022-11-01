"use strict";

import { MetaJSONLexer, MetaJSONParser } from "occam-grammars";

import Version from "../version";
import Dependency from "../dependency";
import Dependencies from "../dependencies";
import ShortenedVersion from "../shortenedVersion";

import { trimDoubleQuotes } from "../utilities/content";
import { nodeQuery, nodesQuery } from "../utilities/query";

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependencyNodesQuery = nodesQuery("//dependencies/dependency"),
      repositoryTerminalNodeQuery = nodeQuery("//repository!/@*!"),
      versionNumberTerminalNodeQuery = nodeQuery("//version!/versionNumber!/@*!"),
      dependencyNameTerminalNodeQuery = nodeQuery("/dependency/name!/@*!"),
      shortenedVersionNumberTerminalNodeQuery = nodeQuery("//dependency/shortenedVersionNumber/@*!");

export function versionFromNode(node) {
  let version = null;

  if (node !== null) {
    const versionNumberTerminalNode = versionNumberTerminalNodeQuery(node),
          versionNumberTerminalNodeContent = versionNumberTerminalNode.getContent(),
          string = trimDoubleQuotes(versionNumberTerminalNodeContent); //

    version = Version.fromString(string);
  }

  return version;
}

export function repositoryFromNode(node) {
  let repository = null;

  if (node !== null) {
    const repositoryTerminalNode = repositoryTerminalNodeQuery(node),
          repositoryTerminalNodeContent = repositoryTerminalNode.getContent();

    repository = trimDoubleQuotes(repositoryTerminalNodeContent); //
  }

  return repository;
}

export function dependenciesFromNode(node) {
  const dependencies = Dependencies.fromNothing();

  if (node !== null) {
    const dependencyNodes = dependencyNodesQuery(node);

    dependencyNodes.forEach((dependencyNode) => {
      const dependencyNameTerminalNode = dependencyNameTerminalNodeQuery(dependencyNode),
            shortenedVersionNumberTerminalNode = shortenedVersionNumberTerminalNodeQuery(dependencyNode),
            dependencyNameTerminalNodeContent = dependencyNameTerminalNode.getContent(),
            shortenedVersionNumberTerminalNodeContent = shortenedVersionNumberTerminalNode.getContent(),
            string = trimDoubleQuotes(shortenedVersionNumberTerminalNodeContent),  ///
            name = trimDoubleQuotes(dependencyNameTerminalNodeContent),///
            shortenedVersion = ShortenedVersion.fromString(string),
            dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

      dependencies.addDependency(dependency);
    });
  }

  return dependencies;
}

export function dependencyNamesFromNode(node) {
  const dependencies = dependenciesFromNode(node),
        dependencyNames = dependencies.mapDependency((dependency) => {
          const dependencyName = dependency.getName();

          return dependencyName;
        });

  return dependencyNames;
}

export function metaJSONNodeFromMetaJSONFile(metaJSONFile) {
  let metaJSONNode = null;

  if (metaJSONFile !== null) {
    const content = metaJSONFile.getContent(),
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens);

    metaJSONNode = node;  ///
  }

  return metaJSONNode;
}

export default {
  versionFromNode,
  repositoryFromNode,
  dependenciesFromNode,
  dependencyNamesFromNode
};
