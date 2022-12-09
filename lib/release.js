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
var _file = /*#__PURE__*/ _interopRequireDefault(require("./file"));
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _constants = require("./constants");
var _metaJSON = require("./utilities/metaJSON");
var _files = require("./utilities/files");
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
    function Release(name, entries) {
        _classCallCheck(this, Release);
        this.name = name;
        this.entries = entries;
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
            key: "updateVersion",
            value: function updateVersion(version) {
                var repository = this.getRepository(), dependencies = this.getDependencies();
                var versionString = version.toString(), repositoryJSON = repository, dependenciesJSON = dependencies.toJSON();
                version = versionString; ///
                repository = repositoryJSON; ///
                dependencies = dependenciesJSON; ///
                var metaJSONFile = this.getMetaJSONFile(), json = {
                    version: version,
                    repository: repository,
                    dependencies: dependencies
                }, jsonString = JSON.stringify(json, null, _constants.DOUBLE_SPACE), file = metaJSONFile, content = jsonString; ///
                file.setContent(content);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, json = {
                    name: name,
                    entries: entries
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entries = json.entries;
                var name = json.name, entriesJSON = entries; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                var release = new Release(name, entries);
                return release;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var release = null;
                var filesReleasable = areEntriesReleasable(entries);
                if (filesReleasable) {
                    release = new Release(name, entries);
                }
                return release;
            }
        },
        {
            key: "fromProject",
            value: function fromProject(project) {
                var release = null, entries = project.getEntries();
                var entriesReleasable = areEntriesReleasable(entries);
                if (entriesReleasable) {
                    var name = project.getName(), releasedEntries = releaseEntries(entries);
                    entries = releasedEntries; ///
                    release = new Release(name, entries);
                }
                return release;
            }
        }
    ]);
    return Release;
}();
Object.assign(Release.prototype, _entries1.default);
var _default = Release;
function releaseEntries(entries) {
    var releasedEntries = _entries.default.fromNothing(), files = entries.getFiles();
    files.forEachFile(function(file) {
        var path = file.getPath(), content = file.getContent(), released = true;
        file = _file.default.fromPathContentAndReleased(path, content, released); ///
        releasedEntries.addFile(file);
    });
    return releasedEntries;
}
function areEntriesReleasable(entries) {
    var entriesReleasable = false;
    var files = entries.getFiles(), readmeFile = (0, _files.readmeFileFromFiles)(files), metaJSONFile = (0, _files.metaJSONFileFromFiles)(files);
    if (readmeFile !== null && metaJSONFile !== null) {
        var metaJSONNode = (0, _metaJSON.metaJSONNodeFromMetaJSONFile)(metaJSONFile);
        if (metaJSONNode !== null) {
            entriesReleasable = true;
        }
    }
    return entriesReleasable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXNSZWxlYXNhYmxlID0gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcyk7XG5cbiAgICBpZiAoZmlsZXNSZWxlYXNhYmxlKSB7XG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbCxcbiAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZWRFbnRyaWVzID0gcmVsZWFzZUVudHJpZXMoZW50cmllcyk7XG5cbiAgICAgIGVudHJpZXMgPSByZWxlYXNlZEVudHJpZXM7ICAvLy9cblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuXG5mdW5jdGlvbiByZWxlYXNlRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHJlbGVhc2VkRW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSwgIC8vL1xuICAgICAgICBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKTtcblxuICBmaWxlcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcmVsZWFzZWQgPSB0cnVlO1xuXG4gICAgZmlsZSA9IEZpbGUuZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQocGF0aCwgY29udGVudCwgcmVsZWFzZWQpOyAgLy8vXG5cbiAgICByZWxlYXNlZEVudHJpZXMuYWRkRmlsZShmaWxlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlbGVhc2VkRW50cmllcztcbn1cblxuZnVuY3Rpb24gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcykge1xuICBsZXQgZW50cmllc1JlbGVhc2FibGUgPSBmYWxzZTtcblxuICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxuICAgICAgICBtZXRhSlNPTkZpbGUgPSBtZXRhSlNPTkZpbGVGcm9tRmlsZXMoZmlsZXMpO1xuXG4gIGlmICgocmVhZG1lRmlsZSAhPT0gbnVsbCkgJiYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkpIHtcbiAgICBjb25zdCBtZXRhSlNPTk5vZGUgPSBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05Ob2RlICE9PSBudWxsKSB7XG4gICAgICBlbnRyaWVzUmVsZWFzYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXNSZWxlYXNhYmxlO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidXBkYXRlVmVyc2lvbiIsInZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlcG9zaXRvcnlKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsInRvSlNPTiIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsImZpbGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImVudHJpZXNKU09OIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicmVsZWFzZSIsImZyb21OYW1lQW5kRW50cmllcyIsImZpbGVzUmVsZWFzYWJsZSIsImFyZUVudHJpZXNSZWxlYXNhYmxlIiwiZnJvbVByb2plY3QiLCJwcm9qZWN0IiwiZW50cmllc1JlbGVhc2FibGUiLCJyZWxlYXNlZEVudHJpZXMiLCJyZWxlYXNlRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImVudHJpZXNNaXhpbnMiLCJmcm9tTm90aGluZyIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmb3JFYWNoRmlsZSIsInBhdGgiLCJnZXRQYXRoIiwiZ2V0Q29udGVudCIsInJlbGVhc2VkIiwiRmlsZSIsImZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkIiwiYWRkRmlsZSIsInJlYWRtZUZpbGUiLCJyZWFkbWVGaWxlRnJvbUZpbGVzIiwibWV0YUpTT05GaWxlRnJvbUZpbGVzIiwibWV0YUpTT05Ob2RlIiwibWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkdBOzs7ZUFBQTs7O3lEQTNHaUI7NERBQ0c7NkRBQ007eUJBRUc7d0JBQ2dCO3FCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELElBQUEsQUFBTUEsd0JBaUdILEFBakdIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTzs4QkFEckJGO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztpQkFIYkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsT0FBTyxFQUFFO2dCQUNyQixJQUFJQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXZDLElBQU1DLGdCQUFnQkwsUUFBUU0sUUFBUSxJQUNoQ0MsaUJBQWlCTixZQUNqQk8sbUJBQW1CTCxhQUFhTSxNQUFNO2dCQUU1Q1QsVUFBVUssZUFBZ0IsR0FBRztnQkFDN0JKLGFBQWFNLGdCQUFpQixHQUFHO2dCQUNqQ0osZUFBZUssa0JBQW1CLEdBQUc7Z0JBRXJDLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxPQUFPO29CQUNMWixTQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FFLGNBQUFBO2dCQUNGLEdBQ0FVLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0gsTUFBTSxJQUFJLEVBQUVJLHVCQUFZLEdBQ3BEQyxPQUFPUCxjQUNQUSxVQUFVTCxZQUFZLEdBQUc7Z0JBRS9CSSxLQUFLRSxVQUFVLENBQUNEO1lBQ2xCOzs7WUFFQVQsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTVcsY0FBYyxJQUFJLENBQUN4QixPQUFPLENBQUNhLE1BQU0sSUFDakNkLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVd0IsYUFDVlIsT0FBTztvQkFDTGpCLE1BQUFBO29CQUNBQyxTQUFBQTtnQkFDRjtnQkFFTixPQUFPZ0I7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTVCxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQUFBRWhCLFVBQVlnQixLQUFaaEI7Z0JBRU4sSUFBTSxBQUFFRCxPQUFTaUIsS0FBVGpCLE1BQ0Z5QixjQUFjeEIsU0FBVSxHQUFHO2dCQUVqQ2dCLE9BQU9RLGFBQWEsR0FBRztnQkFFdkJ4QixVQUFVMEIsZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDVCxPQUFPLEdBQUc7Z0JBRXJDLElBQU1XLFVBQVUsSUE3RGQ3QixRQTZEMEJDLE1BQU1DO2dCQUVsQyxPQUFPMkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQjdCLElBQUksRUFBRUMsT0FBTyxFQUFFO2dCQUN2QyxJQUFJMkIsVUFBVSxJQUFJO2dCQUVsQixJQUFNRSxrQkFBa0JDLHFCQUFxQjlCO2dCQUU3QyxJQUFJNkIsaUJBQWlCO29CQUNuQkYsVUFBVSxJQXhFVjdCLFFBd0VzQkMsTUFBTUM7Z0JBQzlCLENBQUM7Z0JBRUQsT0FBTzJCO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUlMLFVBQVUsSUFBSSxFQUNkM0IsVUFBVWdDLFFBQVE5QixVQUFVO2dCQUVoQyxJQUFNK0Isb0JBQW9CSCxxQkFBcUI5QjtnQkFFL0MsSUFBSWlDLG1CQUFtQjtvQkFDckIsSUFBTWxDLE9BQU9pQyxRQUFRL0IsT0FBTyxJQUN0QmlDLGtCQUFrQkMsZUFBZW5DO29CQUV2Q0EsVUFBVWtDLGlCQUFrQixHQUFHO29CQUUvQlAsVUFBVSxJQTFGVjdCLFFBMEZzQkMsTUFBTUM7Z0JBQzlCLENBQUM7Z0JBRUQsT0FBTzJCO1lBQ1Q7OztXQTlGSTdCOztBQWlHTnNDLE9BQU9DLE1BQU0sQ0FBQ3ZDLFFBQVF3QyxTQUFTLEVBQUVDLGlCQUFhO0lBRTlDLFdBQWV6QztBQUVmLFNBQVNxQyxlQUFlbkMsT0FBTyxFQUFFO0lBQy9CLElBQU1rQyxrQkFBa0JSLGdCQUFPLENBQUNjLFdBQVcsSUFDckNDLFFBQVF6QyxRQUFRMEMsUUFBUTtJQUU5QkQsTUFBTUUsV0FBVyxDQUFDLFNBQUN0QixNQUFTO1FBQzFCLElBQU11QixPQUFPdkIsS0FBS3dCLE9BQU8sSUFDbkJ2QixVQUFVRCxLQUFLeUIsVUFBVSxJQUN6QkMsV0FBVyxJQUFJO1FBRXJCMUIsT0FBTzJCLGFBQUksQ0FBQ0MsMEJBQTBCLENBQUNMLE1BQU10QixTQUFTeUIsV0FBWSxHQUFHO1FBRXJFYixnQkFBZ0JnQixPQUFPLENBQUM3QjtJQUMxQjtJQUVBLE9BQU9hO0FBQ1Q7QUFFQSxTQUFTSixxQkFBcUI5QixPQUFPLEVBQUU7SUFDckMsSUFBSWlDLG9CQUFvQixLQUFLO0lBRTdCLElBQU1RLFFBQVF6QyxRQUFRMEMsUUFBUSxJQUN4QlMsYUFBYUMsSUFBQUEsMEJBQW1CLEVBQUNYLFFBQ2pDM0IsZUFBZXVDLElBQUFBLDRCQUFxQixFQUFDWjtJQUUzQyxJQUFJLEFBQUNVLGVBQWUsSUFBSSxJQUFNckMsaUJBQWlCLElBQUksRUFBRztRQUNwRCxJQUFNd0MsZUFBZUMsSUFBQUEsc0NBQTRCLEVBQUN6QztRQUVsRCxJQUFJd0MsaUJBQWlCLElBQUksRUFBRTtZQUN6QnJCLG9CQUFvQixJQUFJO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVCJ9