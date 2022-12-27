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
                var entriesReleasable = areEntriesReleasable(entries);
                if (entriesReleasable) {
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
        var metaJSONFileValid = (0, _metaJSON.isMetaJSONFileValid)(metaJSONFile);
        if (metaJSONFileValid !== null) {
            entriesReleasable = true;
        }
    }
    return entriesReleasable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTWV0YUpTT05GaWxlVmFsaWQgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSkge1xuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0KHByb2plY3QpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGwsXG4gICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGVudHJpZXNSZWxlYXNhYmxlID0gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcyk7XG5cbiAgICBpZiAoZW50cmllc1JlbGVhc2FibGUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VkRW50cmllcyA9IHJlbGVhc2VFbnRyaWVzKGVudHJpZXMpO1xuXG4gICAgICBlbnRyaWVzID0gcmVsZWFzZWRFbnRyaWVzOyAgLy8vXG5cbiAgICAgIHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsZWFzZTtcblxuZnVuY3Rpb24gcmVsZWFzZUVudHJpZXMoZW50cmllcykge1xuICBjb25zdCByZWxlYXNlZEVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksICAvLy9cbiAgICAgICAgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCk7XG5cbiAgZmlsZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBwYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHJlbGVhc2VkID0gdHJ1ZTtcblxuICAgIGZpbGUgPSBGaWxlLmZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTsgIC8vL1xuXG4gICAgcmVsZWFzZWRFbnRyaWVzLmFkZEZpbGUoZmlsZSk7XG4gIH0pO1xuXG4gIHJldHVybiByZWxlYXNlZEVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIGFyZUVudHJpZXNSZWxlYXNhYmxlKGVudHJpZXMpIHtcbiAgbGV0IGVudHJpZXNSZWxlYXNhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgIHJlYWRtZUZpbGUgPSByZWFkbWVGaWxlRnJvbUZpbGVzKGZpbGVzKSxcbiAgICAgICAgbWV0YUpTT05GaWxlID0gbWV0YUpTT05GaWxlRnJvbUZpbGVzKGZpbGVzKTtcblxuICBpZiAoKHJlYWRtZUZpbGUgIT09IG51bGwpICYmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgbWV0YUpTT05GaWxlVmFsaWQgPSBpc01ldGFKU09ORmlsZVZhbGlkKG1ldGFKU09ORmlsZSk7XG5cbiAgICBpZiAobWV0YUpTT05GaWxlVmFsaWQgIT09IG51bGwpIHtcbiAgICAgIGVudHJpZXNSZWxlYXNhYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW50cmllc1JlbGVhc2FibGU7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJ1cGRhdGVWZXJzaW9uIiwidmVyc2lvbiIsInJlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwicmVwb3NpdG9yeUpTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwidG9KU09OIiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwiZmlsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZW50cmllc0pTT04iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVBbmRFbnRyaWVzIiwiZW50cmllc1JlbGVhc2FibGUiLCJhcmVFbnRyaWVzUmVsZWFzYWJsZSIsImZyb21Qcm9qZWN0IiwicHJvamVjdCIsInJlbGVhc2VkRW50cmllcyIsInJlbGVhc2VFbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZW50cmllc01peGlucyIsImZyb21Ob3RoaW5nIiwiZmlsZXMiLCJnZXRGaWxlcyIsImZvckVhY2hGaWxlIiwicGF0aCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwicmVsZWFzZWQiLCJGaWxlIiwiZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQiLCJhZGRGaWxlIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImlzTWV0YUpTT05GaWxlVmFsaWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZHQTs7O2VBQUE7Ozt5REEzR2lCOzREQUNHOzZEQUNNO3lCQUVHO3dCQUNPO3FCQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFBLEFBQU1BLHdCQWlHSCxBQWpHSDthQUFNQSxRQUNRQyxJQUFJLEVBQUVDLE9BQU87OEJBRHJCRjtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7aUJBSGJGOztZQU1KRyxLQUFBQTtt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