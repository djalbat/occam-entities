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
            key: "fromNameEntriesVersionRepositoryAndDependencies",
            value: function fromNameEntriesVersionRepositoryAndDependencies(name, entries, version, repository, dependencies) {
                var release = new Release(name, entries, version, repository, dependencies);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgVmVyc2lvbiBmcm9tIFwiLi92ZXJzaW9uXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgdGhpcy5kZXBlbmRlbmRpZXMgPSBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnk7XG4gIH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5kaWVzO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeU5hbWVzKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lcyA9IHRoaXMuZGVwZW5kZW5kaWVzLm1hcERlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lOYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCk7XG5cbiAgICAgIHJldHVybiBkZXBlbmRlbmN5TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5TmFtZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgdmVyc2lvbkpTT04gPSB0aGlzLnZlcnNpb24udG9KU09OKCksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuZGVwZW5kZW5kaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb25KU09OLCAgLy8vXG4gICAgICAgICAgcmVwb3NpdG9yeSA9IHRoaXMucmVwb3NpdG9yeSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMsIHZlcnNpb24sIGRlcGVuZGVuY2llcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSwgcmVwb3NpdG9yeSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXMsICAvLy9cbiAgICAgICAgICB2ZXJzaW9uSlNPTSA9IHZlcnNpb24sICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzOyAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBqc29uID0gdmVyc2lvbkpTT007IC8vL1xuXG4gICAgdmVyc2lvbiA9IFZlcnNpb24uZnJvbUpTT04oanNvbik7XG5cbiAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgdmVyc2lvbiwgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lRW50cmllc1ZlcnNpb25SZXBvc2l0b3J5QW5kRGVwZW5kZW5jaWVzKG5hbWUsIGVudHJpZXMsIHZlcnNpb24sIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwidmVyc2lvbiIsInJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmRpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldFZlcnNpb24iLCJnZXRSZXBvc2l0b3J5IiwiZ2V0RGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzIiwibWFwRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbmN5TmFtZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwidmVyc2lvbkpTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwianNvbiIsImZyb21KU09OIiwidmVyc2lvbkpTT00iLCJFbnRyaWVzIiwiVmVyc2lvbiIsIkRlcGVuZGVuY2llcyIsInJlbGVhc2UiLCJmcm9tTmFtZUVudHJpZXNWZXJzaW9uUmVwb3NpdG9yeUFuZERlcGVuZGVuY2llcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBHQTs7O2VBQUE7Ozs0REF4R29COzREQUNBO3dEQUNFOzBEQUNFO2lFQUNDOzZEQUNDOzREQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsd0JBMkZILEFBM0ZIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTs4QkFEeERMO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0UsWUFBWSxHQUFHRDs7aUJBTmxCTDs7WUFTSk8sS0FBQUE7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