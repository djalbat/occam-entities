"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependencies;
    }
});
var _dependency = /*#__PURE__*/ _interopRequireDefault(require("./dependency"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Dependencies = /*#__PURE__*/ function() {
    function Dependencies(array) {
        _classCallCheck(this, Dependencies);
        this.array = array;
    }
    _createClass(Dependencies, [
        {
            key: "addDependency",
            value: function addDependency(dependency) {
                this.array.push(dependency);
            }
        },
        {
            key: "mapDependency",
            value: function mapDependency(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "everyDependency",
            value: function everyDependency(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "reduceDependency",
            value: function reduceDependency(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachDependency",
            value: function forEachDependency(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var dependenciesJSON = this.array.map(function(dependency) {
                    var dependencyJSON = dependency.toJSON();
                    return dependencyJSON;
                }), json = dependenciesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = [], dependencies = new Dependencies(array), dependenciesJSON = json; ///
                dependenciesJSON.forEach(function(dependencyJSON) {
                    var _$json = dependencyJSON, dependency = _dependency.default.fromJSON(_$json);
                    dependencies.addDependency(dependency);
                });
                return dependencies;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], dependencies = new Dependencies(array);
                return dependencies;
            }
        }
    ]);
    return Dependencies;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmNpZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGFkZERlcGVuZGVuY3koZGVwZW5kZW5jeSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChkZXBlbmRlbmN5KTtcbiAgfVxuXG4gIG1hcERlcGVuZGVuY3koY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgZXZlcnlEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlRGVwZW5kZW5jeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaERlcGVuZGVuY3koY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeUpTT04gPSBkZXBlbmRlbmN5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0ganNvbjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXNKU09OLmZvckVhY2goKGRlcGVuZGVuY3lKU09OKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGpzb24gPSBkZXBlbmRlbmN5SlNPTiwgIC8vL1xuICAgICAgICAgICAgZGVwZW5kZW5jeSA9IERlcGVuZGVuY3kuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIGRlcGVuZGVuY2llcy5hZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZXBlbmRlbmNpZXMiLCJhcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RGVwZW5kZW5jeSIsImV2ZXJ5IiwicmVkdWNlRGVwZW5kZW5jeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hEZXBlbmRlbmN5IiwiZm9yRWFjaCIsInRvSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJkZXBlbmRlbmN5SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImRlcGVuZGVuY2llcyIsIkRlcGVuZGVuY3kiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7K0RBSEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLEtBQUs7OEJBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBRklEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFVBQVUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0Q7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxHQUFHLENBQUNEO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsUUFBUSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDUSxLQUFLLENBQUNIO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosUUFBUSxFQUFFSyxZQUFZLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNXLE1BQU0sQ0FBQ04sVUFBVUs7WUFDckM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxRQUFRLEVBQUU7Z0JBQzFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDYSxPQUFPLENBQUNSO1lBQ3JCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ2YsS0FBSyxDQUFDTSxHQUFHLENBQUMsU0FBQ0osWUFBZTtvQkFDaEQsSUFBTWMsaUJBQWlCZCxXQUFXWSxNQUFNO29CQUV4QyxPQUFPRTtnQkFDVCxJQUNBQyxPQUFPRixrQkFBa0IsR0FBRztnQkFFbEMsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQU1qQixRQUFRLEVBQUUsRUFDVm1CLGVBQWUsSUF0Q0pwQixhQXNDcUJDLFFBQ2hDZSxtQkFBbUJFLE1BQU0sR0FBRztnQkFFbENGLGlCQUFpQkYsT0FBTyxDQUFDLFNBQUNHLGdCQUFtQjtvQkFDM0MsSUFBTUMsU0FBT0QsZ0JBQ1BkLGFBQWFrQixtQkFBVSxDQUFDRixRQUFRLENBQUNEO29CQUV2Q0UsYUFBYWxCLGFBQWEsQ0FBQ0M7Z0JBQzdCO2dCQUVBLE9BQU9pQjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTXJCLFFBQVEsRUFBRSxFQUNWbUIsZUFBZSxJQXJESnBCLGFBcURxQkM7Z0JBRXRDLE9BQU9tQjtZQUNUOzs7V0F4RG1CcEIifQ==