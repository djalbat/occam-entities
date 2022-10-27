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
                var release = new Project(name, entries, repository, dependencies);
                return release;
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
            key: "fromNameEntriesRepositoryAndDependencies",
            value: function fromNameEntriesRepositoryAndDependencies(name, entries, repository, dependencies) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5O1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY2llcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5kZXBlbmRlbmNpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICByZXBvc2l0b3J5ID0gdGhpcy5yZXBvc2l0b3J5LFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzLCBkZXBlbmRlbmNpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUsIHJlcG9zaXRvcnkgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzLCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGRlcGVuZGVuY2llczsgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21KU09OKGpzb24pO1xuXG4gICAgY29uc3QgcmVsZWFzZSA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5ID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IERlcGVuZGVuY2llcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVFbnRyaWVzUmVwb3NpdG9yeUFuZERlcGVuZGVuY2llcyhuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIHBhdHRlcm5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsInJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldFJlcG9zaXRvcnkiLCJnZXREZXBlbmRlbmNpZXMiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwiRGVwZW5kZW5jaWVzIiwicmVsZWFzZSIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciLCJwcm9qZWN0IiwiZnJvbU5hbWVFbnRyaWVzUmVwb3NpdG9yeUFuZERlcGVuZGVuY2llcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIs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