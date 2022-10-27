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
var Project = /*#__PURE__*/ function() {
    function Project(name, entries, repository, dependencies) {
        _classCallCheck(this, Project);
        this.name = name;
        this.entries = entries;
        this.repository = repository;
        this.dependencies = dependencies;
    }
    _createClass(Project, [
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
            key: "getRepository",
            value: function getRepository() {
                return this.repository;
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.dependencies;
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
                var entriesJSON = this.entries.toJSON(), dependenciesJSON = this.dependencies.toJSON(), name = this.name, entries = entriesJSON, repository = this.repository, dependencies = dependenciesJSON, json = {
                    name: name,
                    entries: entries,
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
                var entries = json.entries, dependencies = json.dependencies;
                var name = json.name, repository = json.repository, entriesJSON = entries, dependenciesJSON = dependencies; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                json = dependenciesJSON; ///
                dependencies = _dependencies.default.fromJSON(json);
                var project = new Project(name, entries, repository, dependencies);
                return project;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var entries = _entries.default.fromNothing(), repository = null, dependencies = _dependencies.default.fromNothing(), project = new Project(name, entries, repository, dependencies);
                return project;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var files = entries.getFiles(), metaJSONFile = (0, _files1.metaJSONFileFromFiles)(files);
                var repository = null, dependencies = _dependencies.default.fromNothing();
                if (metaJSONFile !== null) {
                    var metaJSONNode = (0, _metaJSON.metaJSONNodeFromMetaJSONFile)(metaJSONFile);
                    if (metaJSONNode !== null) {
                        var node = metaJSONNode; ///
                        repository = (0, _metaJSON.repositoryFromNode)(node);
                        dependencies = (0, _metaJSON.dependenciesFromNode)(node);
                    }
                }
                var project = new Project(name, entries, repository, dependencies);
                return project;
            }
        }
    ]);
    return Project;
}();
Object.assign(Project.prototype, _bnf.default);
Object.assign(Project.prototype, _files.default);
Object.assign(Project.prototype, _entries1.default);
Object.assign(Project.prototype, _pattern.default);
var _default = Project;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuaW1wb3J0IHsgbWV0YUpTT05GaWxlRnJvbUZpbGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVzXCI7XG5pbXBvcnQgeyByZXBvc2l0b3J5RnJvbU5vZGUsIGRlcGVuZGVuY2llc0Zyb21Ob2RlLCBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL21ldGFKU09OXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldFJlcG9zaXRvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeTtcbiAgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmNpZXM7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5TmFtZXMoKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeU5hbWVzID0gdGhpcy5kZXBlbmRlbmRpZXMubWFwRGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeU5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKTtcblxuICAgICAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lOYW1lcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5kZXBlbmRlbmNpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5ID0gdGhpcy5yZXBvc2l0b3J5LFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzLCBkZXBlbmRlbmNpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUsIHJlcG9zaXRvcnkgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzLCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGRlcGVuZGVuY2llczsgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21KU09OKGpzb24pO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5ID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IERlcGVuZGVuY2llcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpIHtcbiAgICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBtZXRhSlNPTkZpbGVGcm9tRmlsZXMoZmlsZXMpO1xuXG4gICAgbGV0IHJlcG9zaXRvcnkgPSBudWxsLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIGlmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFKU09OTm9kZSA9IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKTtcblxuICAgICAgaWYgKG1ldGFKU09OTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gbWV0YUpTT05Ob2RlOyAgLy8vXG5cbiAgICAgICAgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnlGcm9tTm9kZShub2RlKTtcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbU5vZGUobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgZW50cmllc01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJyZXBvc2l0b3J5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRSZXBvc2l0b3J5IiwiZ2V0RGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5jeU5hbWVzIiwiZGVwZW5kZW5kaWVzIiwibWFwRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJkZXBlbmRlbmN5TmFtZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJEZXBlbmRlbmNpZXMiLCJwcm9qZWN0IiwiZnJvbU5hbWUiLCJmcm9tTm90aGluZyIsImZyb21OYW1lQW5kRW50cmllcyIsImZpbGVzIiwiZ2V0RmlsZXMiLCJtZXRhSlNPTkZpbGUiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTk5vZGUiLCJtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlIiwibm9kZSIsInJlcG9zaXRvcnlGcm9tTm9kZSIsImRlcGVuZGVuY2llc0Zyb21Ob2RlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiYm5mTWl4aW5zIiwiZmlsZXNNaXhpbnMiLCJlbnRyaWVzTWl4aW5zIiwicGF0dGVybk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUhBOzs7ZUFBQTs7OzREQXZIb0I7d0RBQ0U7MERBQ0U7aUVBQ0M7NkRBQ0M7NERBQ0E7c0JBRVk7d0JBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZGLElBQUEsQUFBTUEsd0JBd0dILEFBeEdIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7OEJBRC9DSjtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2lCQUxsQko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCO2dCQUNuQixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxZQUFZLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxZQUFlO29C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