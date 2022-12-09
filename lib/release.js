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
                if (entriesReleasable()) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXNSZWxlYXNhYmxlID0gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcyk7XG5cbiAgICBpZiAoZmlsZXNSZWxlYXNhYmxlKSB7XG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbCxcbiAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSgpKSB7XG4gICAgICBjb25zdCBuYW1lID0gcHJvamVjdC5nZXROYW1lKCksXG4gICAgICAgICAgICByZWxlYXNlZEVudHJpZXMgPSByZWxlYXNlRW50cmllcyhlbnRyaWVzKTtcblxuICAgICAgZW50cmllcyA9IHJlbGVhc2VkRW50cmllczsgIC8vL1xuXG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgZW50cmllc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG5cbmZ1bmN0aW9uIHJlbGVhc2VFbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3QgcmVsZWFzZWRFbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLCAgLy8vXG4gICAgICAgIGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpO1xuXG4gIGZpbGVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICByZWxlYXNlZCA9IHRydWU7XG5cbiAgICBmaWxlID0gRmlsZS5mcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZChwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7ICAvLy9cblxuICAgIHJlbGVhc2VkRW50cmllcy5hZGRGaWxlKGZpbGUpO1xuICB9KTtcblxuICByZXR1cm4gcmVsZWFzZWRFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKSB7XG4gIGxldCBlbnRyaWVzUmVsZWFzYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpLFxuICAgICAgICByZWFkbWVGaWxlID0gcmVhZG1lRmlsZUZyb21GaWxlcyhmaWxlcyksXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgaWYgKChyZWFkbWVGaWxlICE9PSBudWxsKSAmJiAobWV0YUpTT05GaWxlICE9PSBudWxsKSkge1xuICAgIGNvbnN0IG1ldGFKU09OTm9kZSA9IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKTtcblxuICAgIGlmIChtZXRhSlNPTk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGVudHJpZXNSZWxlYXNhYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW50cmllc1JlbGVhc2FibGU7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJ1cGRhdGVWZXJzaW9uIiwidmVyc2lvbiIsInJlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwidmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwicmVwb3NpdG9yeUpTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwidG9KU09OIiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwiZmlsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZW50cmllc0pTT04iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVBbmRFbnRyaWVzIiwiZmlsZXNSZWxlYXNhYmxlIiwiYXJlRW50cmllc1JlbGVhc2FibGUiLCJmcm9tUHJvamVjdCIsInByb2plY3QiLCJlbnRyaWVzUmVsZWFzYWJsZSIsInJlbGVhc2VkRW50cmllcyIsInJlbGVhc2VFbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZW50cmllc01peGlucyIsImZyb21Ob3RoaW5nIiwiZmlsZXMiLCJnZXRGaWxlcyIsImZvckVhY2hGaWxlIiwicGF0aCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwicmVsZWFzZWQiLCJGaWxlIiwiZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQiLCJhZGRGaWxlIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTk5vZGUiLCJtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2R0E7OztlQUFBOzs7eURBM0dpQjs0REFDRzs2REFDTTt5QkFFRzt3QkFDZ0I7cUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBQSxBQUFNQSx3QkFpR0gsQUFqR0g7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPOzhCQURyQkY7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8s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