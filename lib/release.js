"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
var _version = /*#__PURE__*/ _interopRequireDefault(require("./version"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixins/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixins/files"));
var _dependencies = /*#__PURE__*/ _interopRequireDefault(require("./dependencies"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
var _files1 = require("./utilities/files");
var _metaJSON = require("./utilities/metaJSON");
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
var Release = /*#__PURE__*/ function() {
    function Release(name, entries, version, repository, dependencies) {
        _classCallCheck(this, Release);
        this.name = name;
        this.entries = entries;
        this.version = version;
        this.repository = repository;
        this.dependendies = dependencies;
    }
    _createClass(Release, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "getVersion",
            value: function getVersion() {
                return this.version;
            }
        },
        {
            key: "getRepository",
            value: function getRepository() {
                return this.repository;
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.dependendies;
            }
        },
        {
            key: "getDependencyNames",
            value: function getDependencyNames() {
                var dependencyNames = this.dependendies.mapDependency(function(dependency) {
                    var dependencyName = dependency.getName();
                    return dependencyName;
                });
                return dependencyNames;
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                return this.entries.getFilePaths();
            }
        },
        {
            key: "getFile",
            value: function getFile(filePath) {
                return this.entries.getFile(filePath);
            }
        },
        {
            key: "matchesShortenedVersion",
            value: function matchesShortenedVersion(shortenedVersion) {
                return this.version.matchesShortenedVersion(shortenedVersion);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.entries.toJSON(), versionJSON = this.version.toJSON(), dependenciesJSON = this.dependendies.toJSON(), name = this.name, entries = entriesJSON, version = versionJSON, repository = this.repository, dependencies = dependenciesJSON, json = {
                    name: name,
                    entries: entries,
                    version: version,
                    repository: repository,
                    dependencies: dependencies
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entries = json.entries, version = json.version, dependencies = json.dependencies;
                var name = json.name, repository = json.repository, entriesJSON = entries, versionJSOM = version, dependenciesJSON = dependencies; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                json = versionJSOM; ///
                version = _version.default.fromJSON(json);
                json = dependenciesJSON; ///
                dependencies = _dependencies.default.fromJSON(json);
                var release = new Release(name, entries, version, repository, dependencies);
                return release;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var release = null;
                var files = entries.getFiles(), readmeFile = (0, _files1.readmeFileFromFiles)(files), metaJSONFile = (0, _files1.metaJSONFileFromFiles)(files);
                if (readmeFile !== null && metaJSONFile !== null) {
                    var metaJSONNode = (0, _metaJSON.metaJSONNodeFromMetaJSONFile)(metaJSONFile);
                    if (metaJSONNode !== null) {
                        var node = metaJSONNode, version = (0, _metaJSON.versionFromNode)(node), repository = (0, _metaJSON.repositoryFromNode)(node), dependencies = (0, _metaJSON.dependenciesFromNode)(node);
                        release = new Release(name, entries, version, repository, dependencies);
                    }
                }
                return release;
            }
        }
    ]);
    return Release;
}();
Object.assign(Release.prototype, _bnf.default);
Object.assign(Release.prototype, _files.default);
Object.assign(Release.prototype, _entries1.default);
Object.assign(Release.prototype, _pattern.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgVmVyc2lvbiBmcm9tIFwiLi92ZXJzaW9uXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuaW1wb3J0IHsgcmVhZG1lRmlsZUZyb21GaWxlcywgbWV0YUpTT05GaWxlRnJvbUZpbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVzXCI7XG5pbXBvcnQgeyB2ZXJzaW9uRnJvbU5vZGUsIHJlcG9zaXRvcnlGcm9tTm9kZSwgZGVwZW5kZW5jaWVzRnJvbU5vZGUsIG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgdGhpcy5kZXBlbmRlbmRpZXMgPSBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnk7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5kaWVzO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeU5hbWVzKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lcyA9IHRoaXMuZGVwZW5kZW5kaWVzLm1hcERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBkZXBlbmRlbmN5TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLnZlcnNpb24ubWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgdmVyc2lvbkpTT04gPSB0aGlzLnZlcnNpb24udG9KU09OKCksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuZGVwZW5kZW5kaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb25KU09OLCAgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXMucmVwb3NpdG9yeSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMsIHZlcnNpb24sIGRlcGVuZGVuY2llcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSwgcmVwb3NpdG9yeSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXMsICAvLy9cbiAgICAgICAgICB2ZXJzaW9uSlNPTSA9IHZlcnNpb24sICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzOyAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBqc29uID0gdmVyc2lvbkpTT007IC8vL1xuXG4gICAgdmVyc2lvbiA9IFZlcnNpb24uZnJvbUpTT04oanNvbik7XG5cbiAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbiwgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxuICAgICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgICBpZiAoKHJlYWRtZUZpbGUgIT09IG51bGwpICYmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBtZXRhSlNPTk5vZGUgPSBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlKG1ldGFKU09ORmlsZSk7XG5cbiAgICAgIGlmIChtZXRhSlNPTk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG1ldGFKU09OTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbkZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgICAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNGcm9tTm9kZShub2RlKTtcblxuICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbiwgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgZW50cmllc01peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZTtcbiJdLCJuYW1lcyI6WyJSZWxlYXNlIiwibmFtZSIsImVudHJpZXMiLCJ2ZXJzaW9uIiwicmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVuZGllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0VmVyc2lvbiIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmN5TmFtZXMiLCJkZXBlbmRlbmN5TmFtZXMiLCJtYXBEZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsImRlcGVuZGVuY3lOYW1lIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwibWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJ2ZXJzaW9uSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2ZXJzaW9uSlNPTSIsIkVudHJpZXMiLCJWZXJzaW9uIiwiRGVwZW5kZW5jaWVzIiwicmVsZWFzZSIsImZyb21OYW1lQW5kRW50cmllcyIsImZpbGVzIiwiZ2V0RmlsZXMiLCJyZWFkbWVGaWxlIiwicmVhZG1lRmlsZUZyb21GaWxlcyIsIm1ldGFKU09ORmlsZSIsIm1ldGFKU09ORmlsZUZyb21GaWxlcyIsIm1ldGFKU09OTm9kZSIsIm1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUiLCJub2RlIiwidmVyc2lvbkZyb21Ob2RlIiwicmVwb3NpdG9yeUZyb21Ob2RlIiwiZGVwZW5kZW5jaWVzRnJvbU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJibmZNaXhpbnMiLCJmaWxlc01peGlucyIsImVudHJpZXNNaXhpbnMiLCJwYXR0ZXJuTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvSUE7OztlQUFBOzs7NERBbElvQjs0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