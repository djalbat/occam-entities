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
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
var _metaJSON = /*#__PURE__*/ _interopRequireDefault(require("./mixins/metaJSON"));
var _constants = require("./constants");
var _metaJSON1 = require("./utilities/metaJSON");
var _files1 = require("./utilities/files");
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
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
                var version = this.getVersion(), versionMatchesShortenedVersion = version.matchShortenedVersion(shortenedVersion);
                return versionMatchesShortenedVersion;
            }
        },
        {
            key: "updateVersion",
            value: function updateVersion(version) {
                var repository = this.getRepository(), dependencies = this.getDependencies();
                var versionJSON = version.toJSON(), repositoryJSON = repository, dependenciesJSON = dependencies.toJSON();
                version = versionJSON; ///
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
                var files = entries.getFiles(), readmeFile = (0, _files1.readmeFileFromFiles)(files), metaJSONFile = (0, _files1.metaJSONFileFromFiles)(files);
                if (readmeFile !== null && metaJSONFile !== null) {
                    var metaJSONNode = (0, _metaJSON1.metaJSONNodeFromMetaJSONFile)(metaJSONFile);
                    if (metaJSONNode !== null) {
                        release = new Release(name, entries);
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
Object.assign(Release.prototype, _metaJSON.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW5zIGZyb20gXCIuL21peGlucy9lbnRyaWVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiA9IHZlcnNpb24ubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uSlNPTiA9IHZlcnNpb24udG9KU09OKCksXG4gICAgICAgICAgcmVwb3NpdG9yeUpTT04gPSByZXBvc2l0b3J5LCAgLy8vXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGRlcGVuZGVuY2llcy50b0pTT04oKTtcblxuICAgIHZlcnNpb24gPSB2ZXJzaW9uSlNPTjsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxuICAgICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgICBpZiAoKHJlYWRtZUZpbGUgIT09IG51bGwpICYmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBtZXRhSlNPTk5vZGUgPSBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlKG1ldGFKU09ORmlsZSk7XG5cbiAgICAgIGlmIChtZXRhSlNPTk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIHBhdHRlcm5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgbWV0YUpTT05NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwidmVyc2lvbk1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uIiwidXBkYXRlVmVyc2lvbiIsInJlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5IiwiZGVwZW5kZW5jaWVzIiwiZ2V0RGVwZW5kZW5jaWVzIiwidmVyc2lvbkpTT04iLCJ0b0pTT04iLCJyZXBvc2l0b3J5SlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJtZXRhSlNPTkZpbGUiLCJnZXRNZXRhSlNPTkZpbGUiLCJqc29uIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJET1VCTEVfU1BBQ0UiLCJmaWxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJlbnRyaWVzSlNPTiIsImZyb21KU09OIiwiRW50cmllcyIsInJlbGVhc2UiLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJmaWxlcyIsImdldEZpbGVzIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTk5vZGUiLCJtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiYm5mTWl4aW5zIiwiZmlsZXNNaXhpbnMiLCJlbnRyaWVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSEE7OztlQUFBOzs7NERBakhvQjt3REFDRTswREFDRTs2REFDRTs0REFDQTs2REFDQzt5QkFFRTt5QkFDZ0I7c0JBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBQSxBQUFNQSx3QkFnR0gsQUFoR0g7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPOzhCQURyQkY7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2lCQUhiRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUFFLE9BQU8sSUFBSSxDQUFDSCxPQUFPLENBQUNHLFlBQVk7WUFBSTs7O1lBRXJEQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsUUFBUSxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDTCxPQUFPLENBQUNJLE9BQU8sQ0FBQ0M7WUFBVzs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRTtnQkFDdEMsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLGlDQUFpQ0Ys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