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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuaW1wb3J0IHBhdHRlcm5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3BhdHRlcm5cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0UmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5O1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY2llcztcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lOYW1lcygpIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5TmFtZXMgPSB0aGlzLmRlcGVuZGVuZGllcy5tYXBEZXBlbmRlbmN5KChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5TmFtZSA9IGRlcGVuZGVuY3kuZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeU5hbWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmRlcGVuZGVuY2llcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJlcG9zaXRvcnkgPSB0aGlzLnJlcG9zaXRvcnksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMsIGRlcGVuZGVuY2llcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSwgcmVwb3NpdG9yeSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXMsICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzOyAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXMgPSBEZXBlbmRlbmNpZXMuZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCByZWxlYXNlID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcywgcmVwb3NpdG9yeSwgZGVwZW5kZW5jaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnkgPSBudWxsLCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gRGVwZW5kZW5jaWVzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUVudHJpZXNSZXBvc2l0b3J5QW5kRGVwZW5kZW5jaWVzKG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcykge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwicmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0UmVwb3NpdG9yeSIsImdldERlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuY3lOYW1lcyIsImRlcGVuZGVuZGllcyIsIm1hcERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwiZGVwZW5kZW5jeU5hbWUiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwiRGVwZW5kZW5jaWVzIiwicmVsZWFzZSIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciLCJwcm9qZWN0IiwiZnJvbU5hbWVFbnRyaWVzUmVwb3NpdG9yeUFuZERlcGVuZGVuY2llcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFHQTs7O2VBQUE7Ozs0REFuR29CO3dEQUNFOzBEQUNFO2lFQUNDOzZEQUNDOzREQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsd0JBdUZILEFBdkZIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7OEJBRC9DSjtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2lCQUxsQko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNKLFlBQVk7WUFDMUI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCO2dCQUNuQixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxZQUFZLENBQUNDLGFBQWEsQ0FBQyxTQUFDQyxZQUFlO29CQUN0RSxJQUFNQyxpQkFBaUJELFdBQVdSLE9BQU87b0JBRXpDLE9BQU9TO2dCQUNUO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxjQUFjLElBQUksQ0FBQ2QsT0FBTyxDQUFDYSxNQUFNLElBQ2pDRSxtQkFBbUIsSUFBSSxDQUFDYixZQUFZLENBQUNXLE1BQU0sSUFDM0NkLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVYyxhQUNWYixhQUFhLElBQUksQ0FBQ0EsVUFBVSxFQUM1QkMsZUFBZWEsa0JBQ2ZDLE9BQU87b0JBQ0xqQixNQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFlBQUFBO29CQUNBQyxjQUFBQTtnQkFDRjtnQkFFTixPQUFPYztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTWhCLFVBQTBCZ0IsS0FBMUJoQixTQUFTRSxlQUFpQmMsS0FBakJkO2dCQUVmLElBQVFILE9BQXFCaUIsS0FBckJqQixNQUFNRSxhQUFlZSxLQUFmZixZQUNSYSxjQUFjZCxTQUNkZSxtQkFBbUJiLGNBQWMsR0FBRztnQkFFMUNjLE9BQU9GLGFBQWEsR0FBRztnQkFFdkJkLFVBQVVrQixnQkFBTyxDQUFDRCxRQUFRLENBQUNELE9BQU8sR0FBRztnQkFFckNBLE9BQU9ELGtCQUFrQixHQUFHO2dCQUU1QmIsZUFBZWlCLHFCQUFZLENBQUNGLFFBQVEsQ0FBQ0Q7Z0JBRXJDLElBQU1JLFVBQVUsSUFsRWR0QixRQWtFMEJDLE1BQU1DLFNBQVNDLFlBQVlDO2dCQUV2RCxPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVN0QixJQUFJLEVBQUU7Z0JBQ3BCLElBQU1DLFVBQVVrQixnQkFBTyxDQUFDSSxXQUFXLElBQzdCckIsYUFBYSxJQUFJLEVBQ2pCQyxlQUFlaUIscUJBQVksQ0FBQ0csV0FBVyxJQUN2Q0MsVUFBVSxJQTNFZHpCLFFBMkUwQkMsTUFBTUMsU0FBU0MsWUFBWUM7Z0JBRXZELE9BQU9xQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUNBQXlDekIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFO2dCQUN2RixJQUFNcUIsVUFBVSxJQWpGZHpCLFFBaUYwQkMsTUFBTUMsU0FBU0MsWUFBWUM7Z0JBRXZELE9BQU9xQjtZQUNUOzs7V0FwRkl6Qjs7QUF1Rk4yQixPQUFPQyxNQUFNLENBQUM1QixRQUFRNkIsU0FBUyxFQUFFQyxZQUFTO0FBQzFDSCxPQUFPQyxNQUFNLENBQUM1QixRQUFRNkIsU0FBUyxFQUFFRSxjQUFXO0FBQzVDSixPQUFPQyxNQUFNLENBQUM1QixRQUFRNkIsU0FBUyxFQUFFRyxpQkFBYTtBQUM5Q0wsT0FBT0MsTUFBTSxDQUFDNUIsUUFBUTZCLFNBQVMsRUFBRUksZ0JBQWE7SUFFOUMsV0FBZWpDIn0=