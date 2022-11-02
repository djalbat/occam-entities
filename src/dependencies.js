"use strict";

import { asynchronousUtilities } from "necessary";

import Dependency from "./dependency";
import ShortenedVersion from "./shortenedVersion";

const { forEach } = asynchronousUtilities;

export default class Dependencies {
  constructor(array) {
    this.array = array;
  }

  addDependency(dependency) {
    this.array.push(dependency);
  }

  mapDependency(callback) {
    return this.array.map(callback);
  }

  everyDependency(callback) {
    return this.array.every(callback);
  }

  reduceDependency(callback, initialValue) {
    return this.array.reduce(callback, initialValue);
  }

  forEachDependency(callback) {
    this.array.forEach(callback);
  }

  asynchronousForEachDependency(operation, done) { forEach(this.array, operation, done); }

  toJSON() {
    const dependenciesJSON = this.array.reduce((dependenciesJSON, dependency) => {
            const name = dependency.getName(),
                  shortenedVersion = dependency.getShortedVersion(),
                  shortenedVersionString = shortenedVersion.toString();

            dependenciesJSON[name] = shortenedVersionString;
  
            return dependenciesJSON;
          }, {}),
          json = dependenciesJSON; ///

    return json;
  }

  static fromJSON(json) {
    const dependenciesJSON = json, ///
          dependenciesJSONKeys = Object.keys(dependenciesJSON),
          names = dependenciesJSONKeys, ///
          array = names.map((name) => {
            const shortenedVersionString = dependenciesJSON[name],
                  string = shortenedVersionString,  ///
                  shortenedVersion = ShortenedVersion.fromString(string),
                  dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

            return dependency;
          }),
          dependencies = new Dependencies(array);

    return dependencies;
  }

  static fromNothing() {
    const array = [],
          dependencies = new Dependencies(array);

    return dependencies;
  }
}
