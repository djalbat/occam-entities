"use strict";

import { asynchronousUtilities } from "necessary";

import Dependency from "./dependency";

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
    const dependenciesJSON = this.array.map((dependency) => {
            const dependencyJSON = dependency.toJSON();
  
            return dependencyJSON;
          }),
          json = dependenciesJSON; ///

    return json;
  }

  static fromJSON(json) {
    const array = [],
          dependencies = new Dependencies(array),
          dependenciesJSON = json; ///

    dependenciesJSON.forEach((dependencyJSON) => {  ///
      const json = dependencyJSON,  ///
            dependency = Dependency.fromJSON(json);

      dependencies.addDependency(dependency);
    });

    return dependencies;
  }

  static fromNothing() {
    const array = [],
          dependencies = new Dependencies(array);

    return dependencies;
  }
}
