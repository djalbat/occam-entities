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
Object.assign(Release.prototype, _metaJSON.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW5zIGZyb20gXCIuL21peGlucy9lbnRyaWVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLnZlcnNpb24ubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdXBkYXRlVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgbGV0IHJlcG9zaXRvcnkgPSB0aGlzLmdldFJlcG9zaXRvcnkoKSxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gdGhpcy5nZXREZXBlbmRlbmNpZXMoKTtcblxuICAgIGNvbnN0IHZlcnNpb25KU09OID0gdmVyc2lvbi50b0pTT04oKSxcbiAgICAgICAgICByZXBvc2l0b3J5SlNPTiA9IHJlcG9zaXRvcnksICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzLnRvSlNPTigpO1xuXG4gICAgdmVyc2lvbiA9IHZlcnNpb25KU09OOyAgLy8vXG4gICAgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnlKU09OOyAgLy8vXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzSlNPTjsgIC8vL1xuXG4gICAgY29uc3QgbWV0YUpTT05GaWxlID0gdGhpcy5nZXRNZXRhSlNPTkZpbGUoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgIHJlcG9zaXRvcnksXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBET1VCTEVfU1BBQ0UpLFxuICAgICAgICAgIGZpbGUgPSBtZXRhSlNPTkZpbGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0ganNvblN0cmluZzsgLy8vXG5cbiAgICBmaWxlLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzOyAgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGw7XG5cbiAgICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZ2V0RmlsZXMoKSxcbiAgICAgICAgICByZWFkbWVGaWxlID0gcmVhZG1lRmlsZUZyb21GaWxlcyhmaWxlcyksXG4gICAgICAgICAgbWV0YUpTT05GaWxlID0gbWV0YUpTT05GaWxlRnJvbUZpbGVzKGZpbGVzKTtcblxuICAgIGlmICgocmVhZG1lRmlsZSAhPT0gbnVsbCkgJiYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IG1ldGFKU09OTm9kZSA9IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKTtcblxuICAgICAgaWYgKG1ldGFKU09OTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKFJlbGVhc2UucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG4iXSwibmFtZXMiOlsiUmVsZWFzZSIsIm5hbWUiLCJlbnRyaWVzIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRGaWxlUGF0aHMiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsInVwZGF0ZVZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25KU09OIiwidG9KU09OIiwicmVwb3NpdG9yeUpTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwibWV0YUpTT05GaWxlIiwiZ2V0TWV0YUpTT05GaWxlIiwianNvbiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwiZmlsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZW50cmllc0pTT04iLCJmcm9tSlNPTiIsIkVudHJpZXMiLCJyZWxlYXNlIiwiZnJvbU5hbWVBbmRFbnRyaWVzIiwiZmlsZXMiLCJnZXRGaWxlcyIsInJlYWRtZUZpbGUiLCJyZWFkbWVGaWxlRnJvbUZpbGVzIiwibWV0YUpTT05GaWxlRnJvbUZpbGVzIiwibWV0YUpTT05Ob2RlIiwibWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwiZW50cmllc01peGlucyIsInBhdHRlcm5NaXhpbnMiLCJtZXRhSlNPTk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEdBOzs7ZUFBQTs7OzREQTVHb0I7d0RBQ0U7MERBQ0U7NkRBQ0U7NERBQ0E7NkRBQ0M7eUJBRUU7eUJBQ2dCO3NCQUNjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELElBQUEsQUFBTUEsd0JBMkZILEFBM0ZIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTzs4QkFEckJGO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztpQkFIYkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFBRSxPQUFPLElBQUksQ0FBQ0gsT0FBTyxDQUFDRyxZQUFZO1lBQUk7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFFBQVEsRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxPQUFPLENBQUNDO1lBQVc7OztZQUUzREMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0YscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFdkdFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRCxPQUFPLEVBQUU7Z0JBQ3JCLElBQUlFLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFdkMsSUFBTUMsY0FBY04sUUFBUU8sTUFBTSxJQUM1QkMsaUJBQWlCTixZQUNqQk8sbUJBQW1CTCxhQUFhRyxNQUFNO2dCQUU1Q1AsVUFBVU0sYUFBYyxHQUFHO2dCQUMzQkosYUFBYU0sZ0JBQWlCLEdBQUc7Z0JBQ2pDSixlQUFlSyxrQkFBbUIsR0FBRztnQkFFckMsSUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLE9BQU87b0JBQ0xaLFNBQUFBO29CQUNBRSxZQUFBQTtvQkFDQUUsY0FBQUE7Z0JBQ0YsR0FDQVMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDSCxNQUFNLElBQUksRUFBRUksdUJBQVksR0FDcERDLE9BQU9QLGNBQ1BRLFVBQVVMLFlBQVksR0FBRztnQkFFL0JJLEtBQUtFLFVBQVUsQ0FBQ0Q7WUFDbEI7OztZQUVBWCxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNYSxjQUFjLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ2UsTUFBTSxJQUNqQ2hCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVNEIsYUFDVlIsT0FBTztvQkFDTHJCLE1BQUFBO29CQUNBQyxTQUFBQTtnQkFDRjtnQkFFTixPQUFPb0I7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTVCxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQUFBRXBCLFVBQVlvQixLQUFacEI7Z0JBRU4sSUFBTSxBQUFFRCxPQUFTcUIsS0FBVHJCLE1BQ0Y2QixjQUFjNUIsU0FBVSxHQUFHO2dCQUVqQ29CLE9BQU9RLGFBQWEsR0FBRztnQkFFdkI1QixVQUFVOEIsZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDVCxPQUFPLEdBQUc7Z0JBRXJDLElBQU1XLFVBQVUsSUFuRWRqQyxRQW1FMEJDLE1BQU1DO2dCQUVsQyxPQUFPK0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQmpDLElBQUksRUFBRUMsT0FBTyxFQUFFO2dCQUN2QyxJQUFJK0IsVUFBVSxJQUFJO2dCQUVsQixJQUFNRSxRQUFRakMsUUFBUWtDLFFBQVEsSUFDeEJDLGFBQWFDLElBQUFBLDJCQUFtQixFQUFDSCxRQUNqQ2YsZUFBZW1CLElBQUFBLDZCQUFxQixFQUFDSjtnQkFFM0MsSUFBSSxBQUFDRSxlQUFlLElBQUksSUFBTWpCLGlCQUFpQixJQUFJLEVBQUc7b0JBQ3BELElBQU1vQixlQUFlQyxJQUFBQSx1Q0FBNEIsRUFBQ3JCO29CQUVsRCxJQUFJb0IsaUJBQWlCLElBQUksRUFBRTt3QkFDekJQLFVBQVUsSUFuRlpqQyxRQW1Gd0JDLE1BQU1DO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBTytCO1lBQ1Q7OztXQXhGSWpDOztBQTJGTjBDLE9BQU9DLE1BQU0sQ0FBQzNDLFFBQVE0QyxTQUFTLEVBQUVDLFlBQVM7QUFDMUNILE9BQU9DLE1BQU0sQ0FBQzNDLFFBQVE0QyxTQUFTLEVBQUVFLGNBQVc7QUFDNUNKLE9BQU9DLE1BQU0sQ0FBQzNDLFFBQVE0QyxTQUFTLEVBQUVHLGlCQUFhO0FBQzlDTCxPQUFPQyxNQUFNLENBQUMzQyxRQUFRNEMsU0FBUyxFQUFFSSxnQkFBYTtBQUM5Q04sT0FBT0MsTUFBTSxDQUFDM0MsUUFBUTRDLFNBQVMsRUFBRUssaUJBQWM7SUFFL0MsV0FBZWpEIn0=