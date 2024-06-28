"use strict";

import { versionFromDocumentNode, repositoryFromDocumentNode, dependenciesFromDocumentNode, dependencyNamesFromDocumentNode, documentNodeFromMetaJSONFile } from "../utilities/metaJSON";

function getVersion() {
  const metaJSONFile = this.getMetaJSONFile(),
        documentNode = documentNodeFromMetaJSONFile(metaJSONFile),
        version = versionFromDocumentNode(documentNode);

  return version;
}

function getRepository() {
  const metaJSONFile = this.getMetaJSONFile(),
        documentNode = documentNodeFromMetaJSONFile(metaJSONFile),
        repository = repositoryFromDocumentNode(documentNode);

  return repository;
}

function getDependencies() {
  const metaJSONFile = this.getMetaJSONFile(),
        documentNode = documentNodeFromMetaJSONFile(metaJSONFile),
        dependencies = dependenciesFromDocumentNode(documentNode);

  return dependencies;
}

function getDependencyNames() {
  const metaJSONFile = this.getMetaJSONFile(),
        documentNode = documentNodeFromMetaJSONFile(metaJSONFile),
        dependencyNames = dependencyNamesFromDocumentNode(documentNode);

  return dependencyNames;
}

const metaJSONMixins = {
  getVersion,
  getRepository,
  getDependencies,
  getDependencyNames
};

export default metaJSONMixins;
