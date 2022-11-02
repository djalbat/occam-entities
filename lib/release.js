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
    function Release(name, entries, contextJSON) {
        _classCallCheck(this, Release);
        this.name = name;
        this.entries = entries;
        this.contextJSON = contextJSON;
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
            key: "getContextJSON",
            value: function getContextJSON() {
                return this.contextJSON;
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
                var entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, context = this.contextJSON, json = {
                    name: name,
                    entries: entries,
                    context: context
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entries = json.entries;
                var name = json.name, context = json.context, entriesJSON = entries, contextJSON = context; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                var release = new Release(name, entries, contextJSON);
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
                        var contextJSON = null;
                        release = new Release(name, entries, contextJSON);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW5zIGZyb20gXCIuL21peGlucy9lbnRyaWVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcywgY29udGV4dEpTT04pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5jb250ZXh0SlNPTiA9IGNvbnRleHRKU09OO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0Q29udGV4dEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dEpTT047XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB2ZXJzaW9uLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICB1cGRhdGVWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBsZXQgcmVwb3NpdG9yeSA9IHRoaXMuZ2V0UmVwb3NpdG9yeSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSB0aGlzLmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgY29uc3QgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5SlNPTiA9IHJlcG9zaXRvcnksICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzLnRvSlNPTigpO1xuXG4gICAgdmVyc2lvbiA9IHZlcnNpb25TdHJpbmc7ICAvLy9cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUpTT047ICAvLy9cbiAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNKU09OOyAgLy8vXG5cbiAgICBjb25zdCBtZXRhSlNPTkZpbGUgPSB0aGlzLmdldE1ldGFKU09ORmlsZSgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgcmVwb3NpdG9yeSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llc1xuICAgICAgICAgIH0sXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIERPVUJMRV9TUEFDRSksXG4gICAgICAgICAgZmlsZSA9IG1ldGFKU09ORmlsZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIGZpbGUuc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lLCBjb250ZXh0IH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllcywgIC8vL1xuICAgICAgICAgIGNvbnRleHRKU09OID0gY29udGV4dDsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzLCBjb250ZXh0SlNPTik7XG5cbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcykge1xuICAgIGxldCByZWxlYXNlID0gbnVsbDtcblxuICAgIGNvbnN0IGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpLFxuICAgICAgICAgIHJlYWRtZUZpbGUgPSByZWFkbWVGaWxlRnJvbUZpbGVzKGZpbGVzKSxcbiAgICAgICAgICBtZXRhSlNPTkZpbGUgPSBtZXRhSlNPTkZpbGVGcm9tRmlsZXMoZmlsZXMpO1xuXG4gICAgaWYgKChyZWFkbWVGaWxlICE9PSBudWxsKSAmJiAobWV0YUpTT05GaWxlICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgbWV0YUpTT05Ob2RlID0gbWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZShtZXRhSlNPTkZpbGUpO1xuXG4gICAgICBpZiAobWV0YUpTT05Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHRKU09OID0gbnVsbDtcblxuICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcywgY29udGV4dEpTT04pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBlbnRyaWVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIHBhdHRlcm5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgbWV0YUpTT05NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImNvbnRleHRKU09OIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRDb250ZXh0SlNPTiIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsInVwZGF0ZVZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlcG9zaXRvcnlKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsInRvSlNPTiIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsImZpbGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImVudHJpZXNKU09OIiwiY29udGV4dCIsImZyb21KU09OIiwiRW50cmllcyIsInJlbGVhc2UiLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJmaWxlcyIsImdldEZpbGVzIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTk5vZGUiLCJtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiYm5mTWl4aW5zIiwiZmlsZXNNaXhpbnMiLCJlbnRyaWVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5SEE7OztlQUFBOzs7NERBdkhvQjt3REFDRTswREFDRTs2REFDRTs0REFDQTs2REFDQzt5QkFFRTt5QkFDZ0I7c0JBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBQSxBQUFNQSx3QkFzR0gsQUF0R0g7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7OEJBRGxDSDtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSmpCSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FB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