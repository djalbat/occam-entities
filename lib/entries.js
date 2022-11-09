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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSksXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJpZXM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwiRW50cmllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZSIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmaW5kRmlsZSIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJhZGRFbnRyeSIsImxlbmd0aCIsIkVOVFJJRVNfTUFYSU1VTV9MRU5HVEgiLCJFcnJvciIsIkVOVFJJRVNfTUFYSU1VTV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSIsImFkZERpcmVjdG9yeSIsImNhbGxiYWNrIiwibWFwIiwic29tZUVudHJ5Iiwic29tZSIsImV2ZXJ5RW50cnkiLCJldmVyeSIsImZvckVhY2hFbnRyeSIsImZvckVhY2giLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImVudHJ5SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImVudHJpZXMiLCJGaWxlIiwiRGlyZWN0b3J5IiwiZnJvbUVudHJ5IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiYm5mTWl4aW5zIiwiZmlsZXNNaXhpbnMiLCJwYXR0ZXJuTWl4aW5zIiwibWV0YUpTT05NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJNQTs7O2VBQUE7Ozt5QkF6TThDO3lEQUU3QjswREFDQzs4REFDSTt3REFDQTsyREFDRTs0REFDRTs2REFDQzt5QkFFWTt3QkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBUUEsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkMsUUFDVCxBQUFFQywrQkFBaUNDLHdCQUFhLENBQTlDRDtBQUVSLElBQUEsQUFBTUUsd0JBb0xILEFBcExIO2FBQU1BLFFBQ1FDLEtBQUs7OEJBRGJEO1FBRUYsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztpQkFGWEQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEI7Z0JBQ3hCLElBQUlDLHVCQUF1QixJQUFJO2dCQUUvQixJQUFNQyxhQUFhVCxNQUFNLElBQUksQ0FBQ00sS0FBSyxHQUFHLEdBQUc7Z0JBRXpDLElBQUlHLFlBQVk7b0JBQ2QsSUFBTUMsaUJBQWlCRCxXQUFXRSxPQUFPO29CQUV6Q0gsdUJBQXVCTCw2QkFBNkJPO29CQUVwRCxJQUFJRix5QkFBeUIsSUFBSSxFQUFFO3dCQUNqQ0EsdUJBQXVCRTtvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9GO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxJQUFJLEVBQUU7Z0JBQ3JCWCxPQUFPLElBQUksQ0FBQ0ksS0FBSyxFQUFFLFNBQUNRLE9BQVU7b0JBQzVCLElBQU1DLFlBQVlELE1BQU1FLE1BQU07b0JBRTlCLElBQUlELFdBQVc7d0JBQ2IsSUFB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