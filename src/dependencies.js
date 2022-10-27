"use strict";

import Dependency from "./dependency";

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
