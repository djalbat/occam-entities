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
Object.assign(Entties.prototype, _bnf.default);
Object.assign(Entties.prototype, _files1.default);
Object.assign(Entties.prototype, _pattern.default);
Object.assign(Entries.prototype, _metaJSON.default);
var _default = Entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UgfSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHJlbW92ZUZpbGVCeVBhdGgocGF0aCkge1xuICAgIGZpbHRlcih0aGlzLmFycmF5LCAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgaWYgKGZpbGVQYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IEVOVFJJRVNfTUFYSU1VTV9MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFTlRSSUVTX01BWElNVU1fTEVOR1RIX0VYQ0VFREVEX01FU1NBR0UpXG4gICAgfVxuICB9XG5cbiAgYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSksXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHRpZXMucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnR0aWVzLnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnR0aWVzLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJpZXM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwiRW50cmllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0RmlsZSIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmaW5kRmlsZSIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJhZGRFbnRyeSIsImxlbmd0aCIsIkVOVFJJRVNfTUFYSU1VTV9MRU5HVEgiLCJFcnJvciIsIkVOVFJJRVNfTUFYSU1VTV9MRU5HVEhfRVhDRUVERURfTUVTU0FHRSIsImFkZERpcmVjdG9yeSIsImNhbGxiYWNrIiwibWFwIiwic29tZUVudHJ5Iiwic29tZSIsImV2ZXJ5RW50cnkiLCJldmVyeSIsImZvckVhY2hFbnRyeSIsImZvckVhY2giLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJ0b0pTT04iLCJlbnRyaWVzSlNPTiIsImVudHJ5SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImVudHJpZXMiLCJGaWxlIiwiRGlyZWN0b3J5IiwiZnJvbUVudHJ5IiwiT2JqZWN0IiwiYXNzaWduIiwiRW50dGllcyIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyTUE7OztlQUFBOzs7eUJBek04Qzt5REFFN0I7MERBQ0M7OERBQ0k7d0RBQ0E7MkRBQ0U7NERBQ0U7NkRBQ0M7eUJBRVk7d0JBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQVFBLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDLFFBQ1QsQUFBRUMsK0JBQWlDQyx3QkFBYSxDQUE5Q0Q7QUFFUixJQUFBLEFBQU1FLHdCQW9MSCxBQXBMSDthQUFNQSxRQUNRQyxLQUFLOzhCQURiRDtRQUVGLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBRlhEOztZQUtKRSxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCO2dCQUN4QixJQUFJQyx1QkFBdUIsSUFBSTtnQkFFL0IsSUFBTUMsYUFBYVQsTUFBTSxJQUFJLENBQUNNLEtBQUssR0FBRyxHQUFHO2dCQUV6QyxJQUFJRyxZQUFZO29CQUNkLElBQU1DLGlCQUFpQkQsV0FBV0UsT0FBTztvQkFFekNILHVCQUF1QkwsNkJBQTZCTztvQkFFcEQsSUFBSUYseUJBQXlCLElBQUksRUFBRTt3QkFDakNBLHVCQUF1QkU7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsSUFBSSxFQUFFO2dCQUNyQlgsT0FBTyxJQUFJLENBQUNJLEtBQUssRUFBRSxTQUFDUSxPQUFVO29CQUM1QixJQUFNQyxZQUFZRCxNQUFNRSxNQUFNO29CQUU5QixJQUFJRCxXQUFX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