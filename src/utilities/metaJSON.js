"use strict";

import { JSONLexer, JSONParser } from "occam-grammars";

import Version from "../version";
import Dependency from "../dependency";
import Dependencies from "../dependencies";
import ShortenedVersion from "../shortenedVersion";

import { DOUBLE_SPACE } from "../constants";
import { trimDoubleQuotes } from "../utilities/content";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { isStringVersionString, isStringShortenedVersionString } from "../utilities/validate";
import { VERSION_PROPERTY_NAME, REPOSITORY_PROPERTY_NAME, DEPENDENCIES_PROPERTY_NAME } from "../propertyNames";

const jsonLexer = JSONLexer.fromNothing(),
      jsonParser = JSONParser.fromNothing();

const errorNodesQuery = nodesQuery("/*/error"),
      propertyNodesQuery = nodesQuery("/property/json/object/property"),
      documentPropertyNodesQuery = nodesQuery("/document/json/object/property"),
      propertyStringLiteralTerminalNodeQuery = nodeQuery("/property/@string-literal"),
      propertyJSONStringLiteralTerminalNodeQuery = nodeQuery("/property/json/@string-literal!");

export function isMetaJSONFileValid(metaJSONFile) {
  let metaJSONFileValid = false;

  const documentNode = documentNodeFromMetaJSONFile(metaJSONFile);

  if (documentNode !== null) {
    const errorNodes = errorNodesQuery(documentNode),
          errorNodesLength = errorNodes.length;

    if (errorNodesLength === 0) {
      const version = versionFromDocumentNode(documentNode),
            repository = repositoryFromDocumentNode(documentNode),
            dependencies = dependenciesFromDocumentNode(documentNode);

      metaJSONFileValid = ((version !== null) && (repository !== null) && (dependencies !== null));
    }
  }

  return metaJSONFileValid;
}

export function updateMetaJSONFileVersion(metaJSONFile, version) {
  const documentNode = documentNodeFromMetaJSONFile(metaJSONFile),
        repository = repositoryFromDocumentNode(documentNode);

  let dependencies = dependenciesFromDocumentNode(documentNode);

  const string = version.toString(),
        dependenciesJSON = dependencies.toJSON();

  version = string;  ///

  dependencies = dependenciesJSON;  ///

  const metaJSON = {
          version,
          repository,
          dependencies
        },
        metaJSONString = JSON.stringify(metaJSON, null, DOUBLE_SPACE),
        metaJSONFileContent = metaJSONString; ///

  metaJSONFile.setContent(metaJSONFileContent);
}

export function documentNodeFromMetaJSONFile(metaJSONFile) {
  let documentNode = null;

  if (metaJSONFile !== null) {
    const content = metaJSONFile.getContent(),
          tokens = jsonLexer.tokenise(content),
          node = jsonParser.parse(tokens);

    documentNode = node;  ///
  }

  return documentNode;
}

export function versionFromDocumentNode(documentNode) {
  let version = null;

  const documentPropertyNodes = documentPropertyNodesFromDocumentNode(documentNode);

  documentPropertyNodes.some((documentPropertyNode) => {
    const propertyNode = documentPropertyNode,  ///
          propertyName = propertyNameFromPropertyNode(propertyNode);

    if (propertyName === VERSION_PROPERTY_NAME) {
      const stringPropertyValue = stringPropertyValueFromPropertyNode(propertyNode),
            string = stringPropertyValue, ///
            stringVersionString = isStringVersionString(string);

      if (stringVersionString) {
        version = Version.fromString(string);
      }

      return true;
    }
  });

  return version;
}

export function repositoryFromDocumentNode(documentNode) {
  let repository = null;

  const documentPropertyNodes = documentPropertyNodesFromDocumentNode(documentNode);

  documentPropertyNodes.some((documentPropertyNode) => {
    const propertyNode = documentPropertyNode,  ///
          propertyName = propertyNameFromPropertyNode(propertyNode);

    if (propertyName === REPOSITORY_PROPERTY_NAME) {
      const stringPropertyValue = stringPropertyValueFromPropertyNode(propertyNode);

      repository = stringPropertyValue;  ///

      return true;
    }
  });

  return repository;
}

export function dependenciesFromDocumentNode(documentNode) {
  let dependencies = null;

  const dependenciesPropertyNode = dependenciesPropertyNodeFromDocumentNode(documentNode);

  if (dependenciesPropertyNode !== null) {
    dependencies = Dependencies.fromNothing();

    const propertyNode = dependenciesPropertyNode,  ///
          propertyNodes = propertyNodesQuery(propertyNode);

    propertyNodes.forEach((propertyNode) => {
      const stringPropertyValue = stringPropertyValueFromPropertyNode(propertyNode),
            string = stringPropertyValue, ///
            stringShortenedVersionString = isStringShortenedVersionString(string);

      if (stringShortenedVersionString) {
        const propertyName = propertyNameFromPropertyNode(propertyNode),
              name = propertyName,  ///
              shortenedVersion = ShortenedVersion.fromString(string),
              dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

        dependencies.addDependency(dependency);
      }
    });
  }

  return dependencies;
}

export function dependencyNamesFromDocumentNode(documentNode) {
  let dependencyNames = null;

  const dependenciesPropertyNode = dependenciesPropertyNodeFromDocumentNode(documentNode);

  if (dependenciesPropertyNode !== null) {
    dependencyNames = [];

    const propertyNode = dependenciesPropertyNode,  ///
          propertyNodes = propertyNodesQuery(propertyNode);

    propertyNodes.forEach((propertyNode) => {
      const stringPropertyValue = stringPropertyValueFromPropertyNode(propertyNode),
            string = stringPropertyValue, ///
            stringShortenedVersionString = isStringShortenedVersionString(string);

      if (stringShortenedVersionString) {
        const propertyName = propertyNameFromPropertyNode(propertyNode),
              dependencyName = propertyName;  ///

        dependencyNames.push(dependencyName);
      }
    });
  }

  return dependencyNames;
}

export default {
  isMetaJSONFileValid,
  updateMetaJSONFileVersion,
  documentNodeFromMetaJSONFile,
  versionFromDocumentNode,
  repositoryFromDocumentNode,
  dependenciesFromDocumentNode,
  dependencyNamesFromDocumentNode
};

function propertyNameFromPropertyNode(propertyNode) {
  const propertyStringLiteralTerminalNode = propertyStringLiteralTerminalNodeQuery(propertyNode),
        propertyStringLiteralTerminalNodeContent = propertyStringLiteralTerminalNode.getContent(),
        propertyName = trimDoubleQuotes(propertyStringLiteralTerminalNodeContent); ///

  return propertyName;
}

function stringPropertyValueFromPropertyNode(propertyNode) {
  const propertyJSONStringLiteralTerminalNode = propertyJSONStringLiteralTerminalNodeQuery(propertyNode),
        propertyJSONStringLiteralTerminalNodeContent = propertyJSONStringLiteralTerminalNode.getContent(),
        stringPropertyValue = trimDoubleQuotes(propertyJSONStringLiteralTerminalNodeContent); ///

  return stringPropertyValue;
}

function documentPropertyNodesFromDocumentNode(documentNode) {
  const documentPropertyNodes = documentPropertyNodesQuery(documentNode);

  return documentPropertyNodes;
}

function dependenciesPropertyNodeFromDocumentNode(documentNode) {
  let dependenciesPropertyNode = null;

  const documentPropertyNodes = documentPropertyNodesFromDocumentNode(documentNode);

  documentPropertyNodes.some((documentPropertyNode) => {
    const propertyNode = documentPropertyNode,  ///
          propertyName = propertyNameFromPropertyNode(propertyNode);

    if (propertyName === DEPENDENCIES_PROPERTY_NAME) {
      dependenciesPropertyNode = propertyNode;  ///

      return true;
    }
  });

  return dependenciesPropertyNode;
}
