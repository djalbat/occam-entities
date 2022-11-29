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
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireDefault(require("./file"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./files"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("./directory"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixins/bnf"));
var _files1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/files"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
var _metaJSON = /*#__PURE__*/ _interopRequireDefault(require("./mixins/metaJSON"));
var _constants = require("./constants");
var _messages = require("./messages");
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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;
var Entries = /*#__PURE__*/ function() {
    function Entries(array) {
        _classCallCheck(this, Entries);
        this.array = array;
    }
    _createClass(Entries, [
        {
            key: "getTopmostDirectoryName",
            value: function getTopmostDirectoryName() {
                var topmostDirectoryName = null;
                var firstEntry = first(this.array); ///
                if (firstEntry) {
                    var firstEntryPath = firstEntry.getPath();
                    topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
                    if (topmostDirectoryName === null) {
                        topmostDirectoryName = firstEntryPath;
                    }
                }
                return topmostDirectoryName;
            }
        },
        {
            key: "removeFileByPath",
            value: function removeFileByPath(path) {
                filter(this.array, function(entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        if (filePath === path) {
                            return false;
                        }
                    }
                    return true;
                });
            }
        },
        {
            key: "getFile",
            value: function getFile(filePath) {
                var files = this.getFiles(), file = files.findFile(function(file) {
                    var path = file.getPath();
                    if (path === filePath) {
                        return true;
                    }
                }) || null;
                return file;
            }
        },
        {
            key: "getFiles",
            value: function getFiles() {
                var files = _files.default.fromNothing();
                this.mapEntry(function(entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry; ///
                        files.addFile(file);
                    }
                });
                return files;
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                var filePaths = this.reduceEntry(function(filePaths, entry) {
                    var entryFile = entry.isFile();
                    if (entryFile) {
                        var file = entry, filePath = file.getPath();
                        filePaths.push(filePath);
                    }
                    return filePaths;
                }, []);
                return filePaths;
            }
        },
        {
            key: "getEntryPaths",
            value: function getEntryPaths() {
                var entryPaths = this.mapEntry(function(entry) {
                    var entryPath = entry.getPath();
                    return entryPath;
                });
                return entryPaths;
            }
        },
        {
            key: "getDirectoryPaths",
            value: function getDirectoryPaths() {
                var directoryPaths = this.reduceEntry(function(directoryPaths, entry) {
                    var entryDirectory = entry.isDirectory();
                    if (entryDirectory) {
                        var directory = entry, directoryPath = directory.getPath();
                        directoryPaths.push(directoryPath);
                    }
                    return directoryPaths;
                }, []);
                return directoryPaths;
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
            key: "addFile",
            value: function addFile(file) {
                var entry = file; ///
                this.addEntry(entry);
            }
        },
        {
            key: "addEntry",
            value: function addEntry(entry) {
                this.array.push(entry);
                var length = this.array.length;
                if (length > _constants.ENTRIES_MAXIMUM_LENGTH) {
                    throw new Error(_messages.ENTRIES_MAXIMUM_LENGTH_EXCEEDED_MESSAGE);
                }
            }
        },
        {
            key: "addDirectory",
            value: function addDirectory(directory) {
                var entry = directory; ///
                this.addEntry(entry);
            }
        },
        {
            key: "mapEntry",
            value: function mapEntry(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "someEntry",
            value: function someEntry(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "everyEntry",
            value: function everyEntry(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "forEachEntry",
            value: function forEachEntry(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "reduceEntry",
            value: function reduceEntry(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.array.map(function(entry) {
                    var entryJSON = entry.toJSON();
                    return entryJSON;
                }), json = entriesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = [], entries = new Entries(array), entriesJSON = json; ///
                entriesJSON.map(function(entryJSON) {
                    var _$json = entryJSON, file = _file.default.fromJSON(_$json), directory = _directory.default.fromJSON(_$json), entry = file || directory; ///
                    entries.addEntry(entry);
                });
                return entries;
            }
        },
        {
            key: "fromEntry",
            value: function fromEntry(entry) {
                var array = [
                    entry
                ], entries = new Entries(array);
                return entries;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], entries = new Entries(array);
                return entries;
            }
        }
    ]);
    return Entries;
}();
Object.assign(Entries.prototype, _bnf.default);
Object.assign(Entries.prototype, _files1.default);
Object.assign(Entries.prototype, _pattern.default);
Object.assign(Entries.prototype, _metaJSON.default);
var _default = Entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RW50cnlQYXRocygpIHtcbiAgICBjb25zdCBlbnRyeVBhdGhzID0gdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGVudHJ5UGF0aDtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyeVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiA9IHZlcnNpb24ubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSksXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJpZXM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwiRW50cmllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZSIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmaW5kRmlsZSIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXRFbnRyeVBhdGhzIiwiZW50cnlQYXRocyIsImVudHJ5UGF0aCIsImdldERpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImFkZEVudHJ5IiwibGVuZ3RoIiwiRU5UUklFU19NQVhJTVVNX0xFTkdUSCIsIkVycm9yIiwiRU5UUklFU19NQVhJTVVNX0xFTkdUSF9FWENFRURFRF9NRVNTQUdFIiwiYWRkRGlyZWN0b3J5IiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsIkZpbGUiLCJEaXJlY3RvcnkiLCJmcm9tRW50cnkiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJibmZNaXhpbnMiLCJmaWxlc01peGlucyIsInBhdHRlcm5NaXhpbnMiLCJtZXRhSlNPTk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNE5BOzs7ZUFBQTs7O3lCQTFOOEM7eURBRTdCOzBEQUNDOzhEQUNJO3dEQUNBOzJEQUNFOzREQUNFOzZEQUNDO3lCQUVZO3dCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFRQSxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9F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