"use strict";

import { versionFromNode, repositoryFromNode, dependenciesFromNode, metaJSONNodeFromMetaJSONFile } from "../utilities/metaJSON";

function getVersion() {
  const metaJSONFile = this.getMetaJSONFile(),
        metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
        node = metaJSONNode,  ///
        version = versionFromNode(node);

  return version;
}

function getRepository() {
  const metaJSONFile = this.getMetaJSONFile(),
        metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
        node = metaJSONNode,  ///
        repository = repositoryFromNode(node);

  return repository;
}

function getDependencies() {
  const metaJSONFile = this.getMetaJSONFile(),
        metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
        node = metaJSONNode,  ///
        dependencies = dependenciesFromNode(node);

  return dependencies;
}

function getDependencyNames() {
  const metaJSONFile = this.getMetaJSONFile(),
        metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
        node = metaJSONNode,  ///
        dependencyNames = dependencyNamesFromNode(node);

  return dependencyNames;
}

const metaJSONMixins = {
  getVersion,
  getRepository,
  getDependencies,
  getDependencyNames
};

export default metaJSONMixins;
