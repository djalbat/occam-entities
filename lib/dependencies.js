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
var _dependency = /*#__PURE__*/ _interop_require_default(require("./dependency"));
var _shortenedVersion = /*#__PURE__*/ _interop_require_default(require("./shortenedVersion"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var forEach = _necessary.asynchronousUtilities.forEach;
var Dependencies = /*#__PURE__*/ function() {
    function Dependencies(array) {
        _class_call_check(this, Dependencies);
        this.array = array;
    }
    _create_class(Dependencies, [
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
                var dependenciesJSON = this.array.reduce(function(dependenciesJSON, dependency) {
                    var name = dependency.getName(), shortenedVersion = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion.toString();
                    dependenciesJSON[name] = shortenedVersionString;
                    return dependenciesJSON;
                }, {}), json = dependenciesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var dependenciesJSON = json, dependenciesJSONKeys = Object.keys(dependenciesJSON), names = dependenciesJSONKeys, array = names.map(function(name) {
                    var shortenedVersionString = dependenciesJSON[name], string = shortenedVersionString, shortenedVersion = _shortenedVersion.default.fromString(string), dependency = _dependency.default.fromNameAndShortenedVersion(name, shortenedVersion);
                    return dependency;
                }), dependencies = new Dependencies(array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuaW1wb3J0IFNob3J0ZW5lZFZlcnNpb24gZnJvbSBcIi4vc2hvcnRlbmVkVmVyc2lvblwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGV2ZXJ5RGVwZW5kZW5jeShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZURlcGVuZGVuY3koY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KG9wZXJhdGlvbiwgZG9uZSkgeyBmb3JFYWNoKHRoaXMuYXJyYXksIG9wZXJhdGlvbiwgZG9uZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuYXJyYXkucmVkdWNlKChkZXBlbmRlbmNpZXNKU09OLCBkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTltuYW1lXSA9IHNob3J0ZW5lZFZlcnNpb25TdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY2llc0pTT047XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTktleXMgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXNKU09OKSxcbiAgICAgICAgICBuYW1lcyA9IGRlcGVuZGVuY2llc0pTT05LZXlzLCAvLy9cbiAgICAgICAgICBhcnJheSA9IG5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IGRlcGVuZGVuY2llc0pTT05bbmFtZV0sXG4gICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gU2hvcnRlbmVkVmVyc2lvbi5mcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24obmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZXBlbmRlbmNpZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJhZGREZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsInB1c2giLCJtYXBEZXBlbmRlbmN5IiwiY2FsbGJhY2siLCJtYXAiLCJldmVyeURlcGVuZGVuY3kiLCJldmVyeSIsInJlZHVjZURlcGVuZGVuY3kiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoRGVwZW5kZW5jeSIsImFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5Iiwib3BlcmF0aW9uIiwiZG9uZSIsInRvSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJuYW1lIiwiZ2V0TmFtZSIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsImRlcGVuZGVuY2llc0pTT05LZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwic3RyaW5nIiwiU2hvcnRlbmVkVmVyc2lvbiIsImZyb21TdHJpbmciLCJEZXBlbmRlbmN5IiwiZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIiwiZGVwZW5kZW5jaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBpQjtpRUFFZjt1RUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLFVBQVlDLGdDQUFxQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2FBQU1BLGFBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFVBQVUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0Q7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDTSxHQUFHLENBQUNEO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsUUFBUSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDUSxLQUFLLENBQUNIO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosUUFBUSxFQUFFSyxZQUFZLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNXLE1BQU0sQ0FBQ04sVUFBVUs7WUFDckM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxRQUFRLEVBQUU7Z0JBQzFCLElBQUksQ0FBQ0wsS0FBSyxDQUFDRixPQUFPLENBQUNPO1lBQ3JCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLDhCQUE4QkMsU0FBUyxFQUFFQyxJQUFJLEVBQUU7Z0JBQUVqQixRQUFRLElBQUksQ0FBQ0UsS0FBSyxFQUFFYyxXQUFXQztZQUFPOzs7WUFFdkZDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLG1CQUFtQixJQUFJLENBQUNqQixLQUFLLENBQUNXLE1BQU0sQ0FBQyxTQUFDTSxrQkFBa0JmLFlBQWU7b0JBQ3JFLElBQU1nQixPQUFPaEIsV0FBV2lCLE9BQU8sSUFDekJDLG1CQUFtQmxCLFdBQVdtQixpQkFBaUIsSUFDL0NDLHlCQUF5QkYsaUJBQWlCRyxRQUFRO29CQUV4RE4sZ0JBQWdCLENBQUNDLEtBQUssR0FBR0k7b0JBRXpCLE9BQU9MO2dCQUNULEdBQUcsQ0FBQyxJQUNKTyxPQUFPUCxrQkFBa0IsR0FBRztnQkFFbEMsT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQU1QLG1CQUFtQk8sTUFDbkJFLHVCQUF1QkMsT0FBT0MsSUFBSSxDQUFDWCxtQkFDbkNZLFFBQVFILHNCQUNSMUIsUUFBUTZCLE1BQU12QixHQUFHLENBQUMsU0FBQ1ksTUFBUztvQkFDMUIsSUFBTUkseUJBQXlCTCxnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUMvQ1ksU0FBU1Isd0JBQ1RGLG1CQUFtQlcseUJBQWdCLENBQUNDLFVBQVUsQ0FBQ0YsU0FDL0M1QixhQUFhK0IsbUJBQVUsQ0FBQ0MsMkJBQTJCLENBQUNoQixNQUFNRTtvQkFFaEUsT0FBT2xCO2dCQUNULElBQ0FpQyxlQUFlLElBdERKdEMsYUFzRHFCRztnQkFFdEMsT0FBT21DO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNcEMsUUFBUSxFQUFFLEVBQ1ZtQyxlQUFlLElBN0RKdEMsYUE2RHFCRztnQkFFdEMsT0FBT21DO1lBQ1Q7OztXQWhFbUJ0QyJ9