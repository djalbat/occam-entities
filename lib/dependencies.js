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
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuaW1wb3J0IFNob3J0ZW5lZFZlcnNpb24gZnJvbSBcIi4vc2hvcnRlbmVkVmVyc2lvblwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGFkZERlcGVuZGVuY3koZGVwZW5kZW5jeSkgeyB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7IH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBldmVyeURlcGVuZGVuY3koY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRGVwZW5kZW5jeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeShvcGVyYXRpb24sIGRvbmUpIHsgZm9yRWFjaCh0aGlzLmFycmF5LCBvcGVyYXRpb24sIGRvbmUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVwZW5kZW5jaWVzSlNPTiwgZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IGRlcGVuZGVuY3kuZ2V0U2hvcnRlZFZlcnNpb24oKSxcbiAgICAgICAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGRlcGVuZGVuY2llc0pTT05bbmFtZV0gPSBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmNpZXNKU09OO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT05LZXlzID0gT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzSlNPTiksXG4gICAgICAgICAgbmFtZXMgPSBkZXBlbmRlbmNpZXNKU09OS2V5cywgLy8vXG4gICAgICAgICAgYXJyYXkgPSBuYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBkZXBlbmRlbmNpZXNKU09OW25hbWVdLFxuICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IFNob3J0ZW5lZFZlcnNpb24uZnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeSA9IERlcGVuZGVuY3kuZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uKG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZXBlbmRlbmNpZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJnZXRBcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RGVwZW5kZW5jeSIsImV2ZXJ5IiwicmVkdWNlRGVwZW5kZW5jeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hEZXBlbmRlbmN5IiwiYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kiLCJvcGVyYXRpb24iLCJkb25lIiwidG9KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsIm5hbWUiLCJnZXROYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldFNob3J0ZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZGVwZW5kZW5jaWVzSlNPTktleXMiLCJPYmplY3QiLCJrZXlzIiwibmFtZXMiLCJzdHJpbmciLCJTaG9ydGVuZWRWZXJzaW9uIiwiZnJvbVN0cmluZyIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZUFuZFNob3J0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