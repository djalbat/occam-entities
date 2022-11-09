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
                var files = entries.getFiles(), readmeFile = (0, _files.readmeFileFromFiles)(files), metaJSONFile = (0, _files.metaJSONFileFromFiles)(files);
                if (readmeFile !== null && metaJSONFile !== null) {
                    var metaJSONNode = (0, _metaJSON.metaJSONNodeFromMetaJSONFile)(metaJSONFile);
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
Object.assign(Release.prototype, _entries1.default);
var _default = Release;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXG4gICAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxuICAgICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgICBpZiAoKHJlYWRtZUZpbGUgIT09IG51bGwpICYmIChtZXRhSlNPTkZpbGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCBtZXRhSlNPTk5vZGUgPSBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlKG1ldGFKU09ORmlsZSk7XG5cbiAgICAgIGlmIChtZXRhSlNPTk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidXBkYXRlVmVyc2lvbiIsInZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlcG9zaXRvcnlKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsInRvSlNPTiIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsImZpbGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImVudHJpZXNKU09OIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicmVsZWFzZSIsImZyb21OYW1lQW5kRW50cmllcyIsImZpbGVzIiwiZ2V0RmlsZXMiLCJyZWFkbWVGaWxlIiwicmVhZG1lRmlsZUZyb21GaWxlcyIsIm1ldGFKU09ORmlsZUZyb21GaWxlcyIsIm1ldGFKU09OTm9kZSIsIm1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJlbnRyaWVzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR0E7OztlQUFBOzs7NERBOUZvQjs2REFDTTt5QkFFRzt3QkFDZ0I7cUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsSUFBQSxBQUFNQSx3QkFxRkgsQUFyRkg7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPOzhCQURyQkY7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2lCQUhiRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPLEVBQUU7Z0JBQ3JCLElBQUlDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxlQUFlLElBQUksQ0FBQ0MsZUFBZTtnQkFFdkMsSUFBTUMsZ0JBQWdCTCxRQUFRTSxRQUFRLElBQ2hDQyxpQkFBaUJOLFlBQ2pCTyxtQkFBbUJMLGFBQWFNLE1BQU07Z0JBRTVDVCxVQUFVSyxlQUFnQixHQUFHO2dCQUM3QkosYUFBYU0sZ0JBQWlCLEdBQUc7Z0JBQ2pDSixlQUFlSyxrQkFBbUIsR0FBRztnQkFFckMsSUFBTUUsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLE9BQU87b0JBQ0xaLFNBQUFBO29CQUNBQyxZQUFBQTtvQkFDQUUsY0FBQUE7Z0JBQ0YsR0FDQVUsYUFBYUMsS0FBS0MsU0FBUyxDQUFDSCxNQUFNLElBQUksRUFBRUksdUJBQVksR0FDcERDLE9BQU9QLGNBQ1BRLFVBQVVMLFlBQVksR0FBRztnQkFFL0JJLEtBQUtFLFVBQVUsQ0FBQ0Q7WUFDbEI7OztZQUVBVCxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNVyxjQUFjLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2EsTUFBTSxJQUNqQ2QsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFVBQVV3QixhQUNWUixPQUFPO29CQUNMakIsTUFBQUE7b0JBQ0FDLFNBQUFBO2dCQUNGO2dCQUVOLE9BQU9nQjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNULElBQUksRUFBRTtnQkFDcEIsSUFBSSxBQUFFaEIsVUFBWWdCLEtBQVpoQjtnQkFFTixJQUFNLEFBQUVELE9BQVNpQixLQUFUakIsTUFDRnlCLGNBQWN4QixTQUFVLEdBQUc7Z0JBRWpDZ0IsT0FBT1EsYUFBYSxHQUFHO2dCQUV2QnhCLFVBQVUwQixnQkFBTyxDQUFDRCxRQUFRLENBQUNULE9BQU8sR0FBRztnQkFFckMsSUFBTVcsVUFBVSxJQTdEZDdCLFFBNkQwQkMsTUFBTUM7Z0JBRWxDLE9BQU8yQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CN0IsSUFBSSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3ZDLElBQUkyQixVQUFVLElBQUk7Z0JBRWxCLElBQU1FLFFBQVE3QixRQUFROEIsUUFBUSxJQUN4QkMsYUFBYUMsSUFBQUEsMEJBQW1CLEVBQUNILFFBQ2pDZixlQUFlbUIsSUFBQUEsNEJBQXFCLEVBQUNKO2dCQUUzQyxJQUFJLEFBQUNFLGVBQWUsSUFBSSxJQUFNakIsaUJBQWlCLElBQUksRUFBRztvQkFDcEQsSUFBTW9CLGVBQWVDLElBQUFBLHNDQUE0QixFQUFDckI7b0JBRWxELElBQUlvQixpQkFBaUIsSUFBSSxFQUFFO3dCQUN6QlAsVUFBVSxJQTdFWjdCLFFBNkV3QkMsTUFBTUM7b0JBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPMkI7WUFDVDs7O1dBbEZJN0I7O0FBcUZOc0MsT0FBT0MsTUFBTSxDQUFDdkMsUUFBUXdDLFNBQVMsRUFBRUMsaUJBQWE7SUFFOUMsV0FBZXpDIn0=