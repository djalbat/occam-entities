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
                return this.version.matchShortenedVersion(shortenedVersion);
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
Object.assign(Project.prototype, _metaJSON.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW5zIGZyb20gXCIuL21peGlucy9lbnRyaWVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLnZlcnNpb24ubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdXBkYXRlVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgbGV0IHJlcG9zaXRvcnkgPSB0aGlzLmdldFJlcG9zaXRvcnkoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGNvbnN0IHZlcnNpb25KU09OID0gdmVyc2lvbi50b0pTT04oKSxcbiAgICAgICAgICByZXBvc2l0b3J5SlNPTiA9IHJlcG9zaXRvcnksICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzLnRvSlNPTigpO1xuXG4gICAgdmVyc2lvbiA9IHZlcnNpb25KU09OOyAgLy8vXG4gICAgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnlKU09OOyAgLy8vXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgbWV0YUpTT05GaWxlID0gdGhpcy5nZXRNZXRhSlNPTkZpbGUoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBET1VCTEVfU1BBQ0UpLFxuICAgICAgICAgIGZpbGUgPSBtZXRhSlNPTkZpbGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0ganNvblN0cmluZzsgLy8vXG5cbiAgICBmaWxlLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzOyAgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICByZWFkbWVGaWxlID0gcmVhZG1lRmlsZUZyb21GaWxlcyhmaWxlcyksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gbWV0YUpTT05GaWxlRnJvbUZpbGVzKGZpbGVzKTtcblxuICAgIGlmICgocmVhZG1lRmlsZSAhPT0gbnVsbCkgJiYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IG1ldGFKU09OTm9kZSA9IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKTtcblxuICAgICAgaWYgKG1ldGFKU09OTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsInVwZGF0ZVZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25KU09OIiwidG9KU09OIiwicmVwb3NpdG9yeUpTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwiZmlsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZW50cmllc0pTT04iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVBbmRFbnRyaWVzIiwiZmlsZXMiLCJnZXRGaWxlcyIsInJlYWRtZUZpbGUiLCJyZWFkbWVGaWxlRnJvbUZpbGVzIiwibWV0YUpTT05GaWxlRnJvbUZpbGVzIiwibWV0YUpTT05Ob2RlIiwibWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiLCJQcm9qZWN0IiwibWV0YUpTT05NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThHQTs7O2VBQUE7Ozs0REE1R29CO3dEQUNFOzBEQUNFOzZEQUNFOzREQUNBOzZEQUNDO3lCQUVFO3lCQUNnQjtzQkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFBLEFBQU1BLHdCQTJGSCxBQTNGSDthQUFNQSxRQUNRQyxJQUFJLEVBQUVDLE9BQU87OEJBRHJCRjtRQUVGLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7aUJBSGJGOztZQU1KRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQUUsT0FBTyxJQUFJLENBQUNILE9BQU8sQ0FBQ0csWUFBWTtZQUFJOzs7WUFFckRDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDQztZQUFXOzs7WUFFM0RDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQixFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDQyxPQUFPLENBQUNGLHFCQUFxQixDQUFDQztZQUFtQjs7O1lBRXZHRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsT0FBTyxFQUFFO2dCQUNyQixJQUFJRSxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXZDLElBQU1DLGNBQWNOLFFBQVFPLE1BQU0sSUFDNUJDLGlCQUFpQk4sWUFDakJPLG1CQUFtQkwsYUFBYUcsTUFBTTtnQkFFNUNQLFVBQVVNLGFBQWMsR0FBRztnQkFDM0JKLGFBQWFNLGdCQUFpQixHQUFHO2dCQUNqQ0osZUFBZUssa0JBQW1CLEdBQUc7Z0JBRXJDLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxPQUFPO29CQUNMWixTQUFBQTtvQkFDQUUsWUFBQUE7b0JBQ0FFLGNBQUFBO2dCQUNGLEdBQ0FTLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0gsTUFBTSxJQUFJLEVBQUVJLHVCQUFZLEdBQ3BEQyxPQUFPUCxjQUNQUSxVQUFVTCxZQUFZLEdBQUc7Z0JBRS9CSSxLQUFLRSxVQUFVLENBQUNEO1lBQ2xCOzs7WUFFQVgsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTWEsY0FBYyxJQUFJLENBQUM1QixPQUFPLENBQUNlLE1BQU0sSUFDakNoQixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVTRCLGFBQ1ZSLE9BQU87b0JBQ0xyQixNQUFBQTtvQkFDQUMsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT29CO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU1QsSUFBSSxFQUFFO2dCQUNwQixJQUFJLEFBQUVwQixVQUFZb0IsS0FBWnBCO2dCQUVOLElBQU0sQUFBRUQsT0FBU3FCLEtBQVRyQixNQUNGNkIsY0FBYzVCLFNBQVUsR0FBRztnQkFFakNvQixPQUFPUSxhQUFhLEdBQUc7Z0JBRXZCNUIsVUFBVThCLGdCQUFPLENBQUNELFFBQVEsQ0FBQ1QsT0FBTyxHQUFHO2dCQUVyQyxJQUFNVyxVQUFVLElBbkVkakMsUUFtRTBCQyxNQUFNQztnQkFFbEMsT0FBTytCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJqQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtnQkFDdkMsSUFBSStCLFVBQVUsSUFBSTtnQkFFbEIsSUFBTUUsUUFBUWpDLFFBQVFrQyxRQUFRLElBQ3hCQyxhQUFhQyxJQUFBQSwyQkFBbUIsRUFBQ0gsUUFDakNmLGVBQWVtQixJQUFBQSw2QkFBcUIsRUFBQ0o7Z0JBRTNDLElBQUksQUFBQ0UsZUFBZSxJQUFJLElBQU1qQixpQkFBaUIsSUFBSSxFQUFHO29CQUNwRCxJQUFNb0IsZUFBZUMsSUFBQUEsdUNBQTRCLEVBQUNyQjtvQkFFbEQsSUFBSW9CLGlCQUFpQixJQUFJLEVBQUU7d0JBQ3pCUCxVQUFVLElBbkZaakMsUUFtRndCQyxNQUFNQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU8rQjtZQUNUOzs7V0F4RklqQzs7QUEyRk4wQyxPQUFPQyxNQUFNLENBQUMzQyxRQUFRNEMsU0FBUyxFQUFFQyxZQUFTO0FBQzFDSCxPQUFPQyxNQUFNLENBQUMzQyxRQUFRNEMsU0FBUyxFQUFFRSxjQUFXO0FBQzVDSixPQUFPQyxNQUFNLENBQUMzQyxRQUFRNEMsU0FBUyxFQUFFRyxpQkFBYTtBQUM5Q0wsT0FBT0MsTUFBTSxDQUFDM0MsUUFBUTRDLFNBQVMsRUFBRUksZ0JBQWE7QUFDOUNOLE9BQU9DLE1BQU0sQ0FBQ00sUUFBUUwsU0FBUyxFQUFFTSxpQkFBYztJQUUvQyxXQUFlbEQifQ==