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
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
var _entries1 = /*#__PURE__*/ _interop_require_default(require("./mixins/entries"));
var _constants = require("./constants");
var _metaJSON = require("./utilities/metaJSON");
var _filePath = require("./utilities/filePath");
var _files = require("./utilities/files");
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
var Release = /*#__PURE__*/ function() {
    function Release(name, entries) {
        _class_call_check(this, Release);
        this.name = name;
        this.entries = entries;
    }
    _create_class(Release, [
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
            key: "fromProject",
            value: function fromProject(project) {
                var release = null, entries = project.getEntries();
                var entriesReleasable = areEntriesReleasable(entries);
                if (entriesReleasable) {
                    var name = project.getName(), releasedEntries = releaseEntriesFromEntries(entries);
                    entries = releasedEntries; ///
                    release = new Release(name, entries);
                }
                return release;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var release = null;
                var entriesReleasable = areEntriesReleasable(entries);
                if (entriesReleasable) {
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
function releaseEntriesFromEntries(entries) {
    var releasedEntries = _entries.default.fromNothing(), files = entries.getFiles();
    files.forEachFile(function(file) {
        var filePath = file.getPath(), filePathReleaseFilePath = (0, _filePath.isFilePathReleaseFilePath)(filePath);
        if (filePathReleaseFilePath) {
            var path = filePath, content = file.getContent(), released = true;
            file = _file.default.fromPathContentAndReleased(path, content, released); ///
            releasedEntries.addFile(file);
        }
    });
    return releasedEntries;
}
function areEntriesReleasable(entries) {
    var entriesReleasable = false;
    var files = entries.getFiles(), readmeFile = (0, _files.readmeFileFromFiles)(files), metaJSONFile = (0, _files.metaJSONFileFromFiles)(files);
    if (readmeFile !== null && metaJSONFile !== null) {
        var metaJSONFileValid = (0, _metaJSON.isMetaJSONFileValid)(metaJSONFile);
        if (metaJSONFileValid) {
            entriesReleasable = true;
        }
    }
    return entriesReleasable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTWV0YUpTT05GaWxlVmFsaWQgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IGlzRmlsZVBhdGhSZWxlYXNlRmlsZVBhdGggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0KHByb2plY3QpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGwsXG4gICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGVudHJpZXNSZWxlYXNhYmxlID0gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcyk7XG5cbiAgICBpZiAoZW50cmllc1JlbGVhc2FibGUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VkRW50cmllcyA9IHJlbGVhc2VFbnRyaWVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgICAgIGVudHJpZXMgPSByZWxlYXNlZEVudHJpZXM7ICAvLy9cblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSkge1xuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuXG5mdW5jdGlvbiByZWxlYXNlRW50cmllc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3QgcmVsZWFzZWRFbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLCAgLy8vXG4gICAgICAgIGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpO1xuXG4gIGZpbGVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aFJlbGVhc2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWxlYXNlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKGZpbGVQYXRoUmVsZWFzZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHJlbGVhc2VkID0gdHJ1ZTtcblxuICAgICAgZmlsZSA9IEZpbGUuZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQocGF0aCwgY29udGVudCwgcmVsZWFzZWQpOyAgLy8vXG5cbiAgICAgIHJlbGVhc2VkRW50cmllcy5hZGRGaWxlKGZpbGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlbGVhc2VkRW50cmllcztcbn1cblxuZnVuY3Rpb24gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcykge1xuICBsZXQgZW50cmllc1JlbGVhc2FibGUgPSBmYWxzZTtcblxuICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxuICAgICAgICBtZXRhSlNPTkZpbGUgPSBtZXRhSlNPTkZpbGVGcm9tRmlsZXMoZmlsZXMpO1xuXG4gIGlmICgocmVhZG1lRmlsZSAhPT0gbnVsbCkgJiYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkpIHtcbiAgICBjb25zdCBtZXRhSlNPTkZpbGVWYWxpZCA9IGlzTWV0YUpTT05GaWxlVmFsaWQobWV0YUpTT05GaWxlKTtcblxuICAgIGlmIChtZXRhSlNPTkZpbGVWYWxpZCkge1xuICAgICAgZW50cmllc1JlbGVhc2FibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnRyaWVzUmVsZWFzYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlIiwibmFtZSIsImVudHJpZXMiLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsInVwZGF0ZVZlcnNpb24iLCJ2ZXJzaW9uIiwicmVwb3NpdG9yeSIsImdldFJlcG9zaXRvcnkiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJ2ZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJyZXBvc2l0b3J5SlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJ0b0pTT04iLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJqc29uIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJET1VCTEVfU1BBQ0UiLCJmaWxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJlbnRyaWVzSlNPTiIsImZyb21KU09OIiwiRW50cmllcyIsInJlbGVhc2UiLCJmcm9tUHJvamVjdCIsInByb2plY3QiLCJlbnRyaWVzUmVsZWFzYWJsZSIsImFyZUVudHJpZXNSZWxlYXNhYmxlIiwicmVsZWFzZWRFbnRyaWVzIiwicmVsZWFzZUVudHJpZXNGcm9tRW50cmllcyIsImZyb21OYW1lQW5kRW50cmllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImVudHJpZXNNaXhpbnMiLCJmcm9tTm90aGluZyIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmb3JFYWNoRmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImZpbGVQYXRoUmVsZWFzZUZpbGVQYXRoIiwiaXNGaWxlUGF0aFJlbGVhc2VGaWxlUGF0aCIsInBhdGgiLCJnZXRDb250ZW50IiwicmVsZWFzZWQiLCJGaWxlIiwiZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQiLCJhZGRGaWxlIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImlzTWV0YUpTT05GaWxlVmFsaWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThHQTs7O2VBQUE7OzsyREE1R2lCOzhEQUNHOytEQUNNO3lCQUVHO3dCQUNPO3dCQUNNO3FCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTztnQ0FEckJGO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIYkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFJQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXZDLElBQU1DLGdCQUFnQkwsUUFBUU0sUUFBUSxJQUNoQ0MsaUJBQWlCTixZQUNqQk8sbUJBQW1CTCxhQUFhTSxNQUFNO2dCQUU1Q1QsVUFBVUssZUFBZ0IsR0FBRztnQkFDN0JKLGFBQWFNLGdCQUFpQixHQUFHO2dCQUNqQ0osZUFBZUssa0JBQW1CLEdBQUc7Z0JBRXJDLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxPQUFPO29CQUNMWixTQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FFLGNBQUFBO2dCQUNGLEdBQ0FVLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0gsTUFBTSxNQUFNSSx1QkFBWSxHQUNwREMsT0FBT1AsY0FDUFEsVUFBVUwsWUFBWSxHQUFHO2dCQUUvQkksS0FBS0UsVUFBVSxDQUFDRDtZQUNsQjs7O1lBRUFULEtBQUFBO21CQUFB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