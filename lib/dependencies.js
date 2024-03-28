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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuaW1wb3J0IFNob3J0ZW5lZFZlcnNpb24gZnJvbSBcIi4vc2hvcnRlbmVkVmVyc2lvblwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGV2ZXJ5RGVwZW5kZW5jeShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZURlcGVuZGVuY3koY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hEZXBlbmRlbmN5KG9wZXJhdGlvbiwgZG9uZSkgeyBmb3JFYWNoKHRoaXMuYXJyYXksIG9wZXJhdGlvbiwgZG9uZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuYXJyYXkucmVkdWNlKChkZXBlbmRlbmNpZXNKU09OLCBkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVkVmVyc2lvbigpLFxuICAgICAgICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb24udG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTltuYW1lXSA9IHNob3J0ZW5lZFZlcnNpb25TdHJpbmc7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY2llc0pTT047XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTktleXMgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXNKU09OKSxcbiAgICAgICAgICBuYW1lcyA9IGRlcGVuZGVuY2llc0pTT05LZXlzLCAvLy9cbiAgICAgICAgICBhcnJheSA9IG5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IGRlcGVuZGVuY2llc0pTT05bbmFtZV0sXG4gICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gU2hvcnRlbmVkVmVyc2lvbi5mcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24obmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlcGVuZGVuY2llcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RGVwZW5kZW5jeSIsImV2ZXJ5IiwicmVkdWNlRGVwZW5kZW5jeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hEZXBlbmRlbmN5IiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJvcGVyYXRpb24iLCJkb25lIiwidG9KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZGVwZW5kZW5jaWVzSlNPTktleXMiLCJPYmplY3QiLCJrZXlzIiwibmFtZXMiLCJzdHJpbmciLCJTaG9ydGVuZWRWZXJzaW9uIiwiZnJvbVN0cmluZyIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24iLCJkZXBl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