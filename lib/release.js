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
                    var name = project.getName(), releasedEntries = releaseEntriesFromEntries(entries);
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
function releaseEntriesFromEntries(entries) {
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
        if (metaJSONFileValid) {
            entriesReleasable = true;
        }
    }
    return entriesReleasable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzTWV0YUpTT05GaWxlVmFsaWQgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWV0YUpTT05cIjtcbmltcG9ydCB7IHJlYWRtZUZpbGVGcm9tRmlsZXMsIG1ldGFKU09ORmlsZUZyb21GaWxlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlc1wiO1xuXG5jbGFzcyBSZWxlYXNlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCByZXBvc2l0b3J5ID0gdGhpcy5nZXRSZXBvc2l0b3J5KCksXG4gICAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCk7XG5cbiAgICBjb25zdCB2ZXJzaW9uU3RyaW5nID0gdmVyc2lvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlcG9zaXRvcnlKU09OID0gcmVwb3NpdG9yeSwgIC8vL1xuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBkZXBlbmRlbmNpZXMudG9KU09OKCk7XG5cbiAgICB2ZXJzaW9uID0gdmVyc2lvblN0cmluZzsgIC8vL1xuICAgIHJlcG9zaXRvcnkgPSByZXBvc2l0b3J5SlNPTjsgIC8vL1xuICAgIGRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llc0pTT047ICAvLy9cblxuICAgIGNvbnN0IG1ldGFKU09ORmlsZSA9IHRoaXMuZ2V0TWV0YUpTT05GaWxlKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICByZXBvc2l0b3J5LFxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgRE9VQkxFX1NQQUNFKSxcbiAgICAgICAgICBmaWxlID0gbWV0YUpTT05GaWxlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgZmlsZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgUmVsZWFzZShuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgbGV0IHJlbGVhc2UgPSBudWxsO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSkge1xuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9qZWN0KHByb2plY3QpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGwsXG4gICAgICAgIGVudHJpZXMgPSBwcm9qZWN0LmdldEVudHJpZXMoKTtcblxuICAgIGNvbnN0IGVudHJpZXNSZWxlYXNhYmxlID0gYXJlRW50cmllc1JlbGVhc2FibGUoZW50cmllcyk7XG5cbiAgICBpZiAoZW50cmllc1JlbGVhc2FibGUpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwcm9qZWN0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHJlbGVhc2VkRW50cmllcyA9IHJlbGVhc2VFbnRyaWVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgICAgIGVudHJpZXMgPSByZWxlYXNlZEVudHJpZXM7ICAvLy9cblxuICAgICAgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZWxlYXNlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVsZWFzZS5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxlYXNlO1xuXG5mdW5jdGlvbiByZWxlYXNlRW50cmllc0Zyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgY29uc3QgcmVsZWFzZWRFbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLCAgLy8vXG4gICAgICAgIGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpO1xuXG4gIGZpbGVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICByZWxlYXNlZCA9IHRydWU7XG5cbiAgICBmaWxlID0gRmlsZS5mcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZChwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7ICAvLy9cblxuICAgIHJlbGVhc2VkRW50cmllcy5hZGRGaWxlKGZpbGUpO1xuICB9KTtcblxuICByZXR1cm4gcmVsZWFzZWRFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKSB7XG4gIGxldCBlbnRyaWVzUmVsZWFzYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpLFxuICAgICAgICByZWFkbWVGaWxlID0gcmVhZG1lRmlsZUZyb21GaWxlcyhmaWxlcyksXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgaWYgKChyZWFkbWVGaWxlICE9PSBudWxsKSAmJiAobWV0YUpTT05GaWxlICE9PSBudWxsKSkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBlbnRyaWVzUmVsZWFzYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXNSZWxlYXNhYmxlO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidXBkYXRlVmVyc2lvbiIsInZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlcG9zaXRvcnlKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsInRvSlNPTiIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRPVUJMRV9TUEFDRSIsImZpbGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImVudHJpZXNKU09OIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicmVsZWFzZSIsImZyb21OYW1lQW5kRW50cmllcyIsImVudHJpZXNSZWxlYXNhYmxlIiwiYXJlRW50cmllc1JlbGVhc2FibGUiLCJmcm9tUHJvamVjdCIsInByb2plY3QiLCJyZWxlYXNlZEVudHJpZXMiLCJyZWxlYXNlRW50cmllc0Zyb21FbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZW50cmllc01peGlucyIsImZyb21Ob3RoaW5nIiwiZmlsZXMiLCJnZXRGaWxlcyIsImZvckVhY2hGaWxlIiwicGF0aCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwicmVsZWFzZWQiLCJGaWxlIiwiZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQiLCJhZGRGaWxlIiwicmVhZG1lRmlsZSIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVGcm9tRmlsZXMiLCJtZXRhSlNPTkZpbGVWYWxpZCIsImlzTWV0YUpTT05GaWxlVmFsaWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZHQTs7O2VBQUE7OzsyREEzR2lCOzhEQUNHOytEQUNNO3lCQUVHO3dCQUNPO3FCQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTztnQ0FEckJGO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIYkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxPQUFPO2dCQUNuQixJQUFJQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRXZDLElBQU1DLGdCQUFnQkwsUUFBUU0sUUFBUSxJQUNoQ0MsaUJBQWlCTixZQUNqQk8sbUJBQW1CTCxhQUFhTSxNQUFNO2dCQUU1Q1QsVUFBVUssZUFBZ0IsR0FBRztnQkFDN0JKLGFBQWFNLGdCQUFpQixHQUFHO2dCQUNqQ0osZUFBZUssa0JBQW1CLEdBQUc7Z0JBRXJDLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxPQUFPO29CQUNMWixTQUFBQTtvQkFDQUMsWUFBQUE7b0JBQ0FFLGNBQUFBO2dCQUNGLEdBQ0FVLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0gsTUFBTSxNQUFNSSx1QkFBWSxHQUNwREMsT0FBT1AsY0FDUFEsVUFBVUwsWUFBWSxHQUFHO2dCQUUvQkksS0FBS0UsVUFBVSxDQUFDRDtZQUNsQjs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVyxjQUFjLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2EsTUFBTSxJQUNqQ2QsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFVBQVV3QixhQUNWUixPQUFPO29CQUNMakIsTUFBQUE7b0JBQ0FDLFNBQUFBO2dCQUNGO2dCQUVOLE9BQU9nQjtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNULElBQUk7Z0JBQ2xCLElBQUksQUFBRWhCLFVBQVlnQixLQUFaaEI7Z0JBRU4sSUFBTSxBQUFFRCxPQUFTaUIsS0FBVGpCLE1BQ0Z5QixjQUFjeEIsU0FBVSxHQUFHO2dCQUVqQ2dCLE9BQU9RLGFBQWEsR0FBRztnQkFFdkJ4QixVQUFVMEIsZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDVCxPQUFPLEdBQUc7Z0JBRXJDLElBQU1XLFVBQVUsSUE3RGQ3QixRQTZEMEJDLE1BQU1DO2dCQUVsQyxPQUFPMkI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQjdCLElBQUksRUFBRUMsT0FBTztnQkFDckMsSUFBSTJCLFVBQVU7Z0JBRWQsSUFBTUUsb0JBQW9CQyxxQkFBcUI5QjtnQkFFL0MsSUFBSTZCLG1CQUFtQjtvQkFDckJGLFVBQVUsSUF4RVY3QixRQXdFc0JDLE1BQU1DO2dCQUM5QjtnQkFFQSxPQUFPMkI7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLE9BQU87Z0JBQ3hCLElBQUlMLFVBQVUsTUFDVjNCLFVBQVVnQyxRQUFROUIsVUFBVTtnQkFFaEMsSUFBTTJCLG9CQUFvQkMscUJBQXFCOUI7Z0JBRS9DLElBQUk2QixtQkFBbUI7b0JBQ3JCLElBQU05QixPQUFPaUMsUUFBUS9CLE9BQU8sSUFDdEJnQyxrQkFBa0JDLDBCQUEwQmxDO29CQUVsREEsVUFBVWlDLGlCQUFrQixHQUFHO29CQUUvQk4sVUFBVSxJQTFGVjdCLFFBMEZzQkMsTUFBTUM7Z0JBQzlCO2dCQUVBLE9BQU8yQjtZQUNUOzs7V0E5Rkk3Qjs7QUFpR05xQyxPQUFPQyxNQUFNLENBQUN0QyxRQUFRdUMsU0FBUyxFQUFFQyxpQkFBYTtJQUU5QyxXQUFleEM7QUFFZixTQUFTb0MsMEJBQTBCbEMsT0FBTztJQUN4QyxJQUFNaUMsa0JBQWtCUCxnQkFBTyxDQUFDYSxXQUFXLElBQ3JDQyxRQUFReEMsUUFBUXlDLFFBQVE7SUFFOUJELE1BQU1FLFdBQVcsQ0FBQyxTQUFDckI7UUFDakIsSUFBTXNCLE9BQU90QixLQUFLdUIsT0FBTyxJQUNuQnRCLFVBQVVELEtBQUt3QixVQUFVLElBQ3pCQyxXQUFXO1FBRWpCekIsT0FBTzBCLGFBQUksQ0FBQ0MsMEJBQTBCLENBQUNMLE1BQU1yQixTQUFTd0IsV0FBWSxHQUFHO1FBRXJFYixnQkFBZ0JnQixPQUFPLENBQUM1QjtJQUMxQjtJQUVBLE9BQU9ZO0FBQ1Q7QUFFQSxTQUFTSCxxQkFBcUI5QixPQUFPO0lBQ25DLElBQUk2QixvQkFBb0I7SUFFeEIsSUFBTVcsUUFBUXhDLFFBQVF5QyxRQUFRLElBQ3hCUyxhQUFhQyxJQUFBQSwwQkFBbUIsRUFBQ1gsUUFDakMxQixlQUFlc0MsSUFBQUEsNEJBQXFCLEVBQUNaO0lBRTNDLElBQUksQUFBQ1UsZUFBZSxRQUFVcEMsaUJBQWlCLE1BQU87UUFDcEQsSUFBTXVDLG9CQUFvQkMsSUFBQUEsNkJBQW1CLEVBQUN4QztRQUU5QyxJQUFJdUMsbUJBQW1CO1lBQ3JCeEIsb0JBQW9CO1FBQ3RCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=