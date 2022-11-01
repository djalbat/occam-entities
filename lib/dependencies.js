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
var _necessary = require("necessary");
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
var forEach = _necessary.asynchronousUtilities.forEach;
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
            key: "asynchronousForEachDependency",
            value: function asynchronousForEachDependency(operation, done) {
                forEach(this.array, operation, done);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGV2ZXJ5RGVwZW5kZW5jeShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZURlcGVuZGVuY3koY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KG9wZXJhdGlvbiwgZG9uZSkgeyBmb3JFYWNoKHRoaXMuYXJyYXksIG9wZXJhdGlvbiwgZG9uZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5SlNPTiA9IGRlcGVuZGVuY3kudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3lKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpLFxuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGRlcGVuZGVuY2llc0pTT04uZm9yRWFjaCgoZGVwZW5kZW5jeUpTT04pID0+IHsgIC8vL1xuICAgICAgY29uc3QganNvbiA9IGRlcGVuZGVuY3lKU09OLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgZGVwZW5kZW5jaWVzLmFkZERlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlcGVuZGVuY2llcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RGVwZW5kZW5jeSIsImV2ZXJ5IiwicmVkdWNlRGVwZW5kZW5jeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hEZXBlbmRlbmN5IiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJvcGVyYXRpb24iLCJkb25lIiwidG9KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsImRlcGVuZGVuY3lKU09OIiwianNvbiIsImZyb21KU09OIiwiZGVwZW5kZW5jaWVzIiwiRGVwZW5kZW5jeSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOaUI7K0RBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTSxBQUFFQyxVQUFZQyxnQ0FBcUIsQ0FBakNEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjthQUFNQSxhQUNQRyxLQUFLOzhCQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2lCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDRDtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JGLFFBQVEsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ1EsS0FBSyxDQUFDSDtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLFFBQVEsRUFBRUssWUFBWSxFQUFFO2dCQUN2QyxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNLENBQUNOLFVBQVVLO1lBQ3JDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUNMLEtBQUssQ0FBQ0YsT0FBTyxDQUFDTztZQUNyQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJDLFNBQVMsRUFBRUMsSUFBSSxFQUFFO2dCQUFFakIsUUFBUSxJQUFJLENBQUNFLEtBQUssRUFBRWMsV0FBV0M7WUFBTzs7O1lBRXZGQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDakIsS0FBSyxDQUFDTSxHQUFHLENBQUMsU0FBQ0osWUFBZTtvQkFDaEQsSUFBTWdCLGlCQUFpQmhCLFdBQVdjLE1BQU07b0JBRXhDLE9BQU9FO2dCQUNULElBQ0FDLE9BQU9GLGtCQUFrQixHQUFHO2dCQUVsQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTW5CLFFBQVEsRUFBRSxFQUNWcUIsZUFBZSxJQXhDSnhCLGFBd0NxQkcsUUFDaENpQixtQkFBbUJFLE1BQU0sR0FBRztnQkFFbENGLGlCQUFpQm5CLE9BQU8sQ0FBQyxTQUFDb0IsZ0JBQW1CO29CQUMzQyxJQUFNQyxTQUFPRCxnQkFDUGhCLGFBQWFvQixtQkFBVSxDQUFDRixRQUFRLENBQUNEO29CQUV2Q0UsYUFBYXBCLGFBQWEsQ0FBQ0M7Z0JBQzdCO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTXZCLFFBQVEsRUFBRSxFQUNWcUIsZUFBZSxJQXZESnhCLGFBdURxQkc7Z0JBRXRDLE9BQU9xQjtZQUNUOzs7V0ExRG1CeEIifQ==