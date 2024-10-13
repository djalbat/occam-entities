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
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
var _files = /*#__PURE__*/ _interop_require_default(require("./files"));
var _directory = /*#__PURE__*/ _interop_require_default(require("./directory"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./mixins/bnf"));
var _files1 = /*#__PURE__*/ _interop_require_default(require("./mixins/files"));
var _pattern = /*#__PURE__*/ _interop_require_default(require("./mixins/pattern"));
var _metaJSON = /*#__PURE__*/ _interop_require_default(require("./mixins/metaJSON"));
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
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, topmostDirectoryNameFromPath = _necessary.pathUtilities.topmostDirectoryNameFromPath;
var Entries = /*#__PURE__*/ function() {
    function Entries(array) {
        _class_call_check(this, Entries);
        this.array = array;
    }
    _create_class(Entries, [
        {
            key: "getTopmostDirectoryName",
            value: function getTopmostDirectoryName() {
                var topmostDirectoryName = null;
                var firstEntry = first(this.array); ///
                if (firstEntry) {
                    var firstEntryPath = firstEntry.getPath();
                    topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
                    if (topmostDirectoryName === null) {
                        topmostDirectoryName = firstEntryPath; ///
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
            key: "findFile",
            value: function findFile(filePath) {
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
            key: "forEachFile",
            value: function forEachFile(callback) {
                var files = this.getFiles();
                files.forEachFile(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgZ2V0RmlsZXMoKSB7XG4gICAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tYXBFbnRyeSgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeTsgLy8vXG5cbiAgICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIGdldEZpbGVQYXRocygpIHtcbiAgICBjb25zdCBmaWxlUGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChmaWxlUGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGZpbGVQYXRocy5wdXNoKGZpbGVQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbGVQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgZ2V0RGlyZWN0b3J5UGF0aHMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aHMgPSB0aGlzLnJlZHVjZUVudHJ5KChkaXJlY3RvcnlQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gZW50cnkuaXNEaXJlY3RvcnkoKTtcblxuICAgICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZGlyZWN0b3J5UGF0aHMucHVzaChkaXJlY3RvcnlQYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbigpLFxuICAgICAgICAgIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiA9IHZlcnNpb24ubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIHZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZmlsZTsgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGFkZEVudHJ5KGVudHJ5KSB7IHRoaXMuYXJyYXkucHVzaChlbnRyeSk7IH1cblxuICBhZGREaXJlY3RvcnkoZGlyZWN0b3J5KSB7XG4gICAgY29uc3QgZW50cnkgPSBkaXJlY3Rvcnk7ICAvLy9cblxuICAgIHRoaXMuYWRkRW50cnkoZW50cnkpO1xuICB9XG5cbiAgZm9yRWFjaEZpbGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZ2V0RmlsZXMoKTtcblxuICAgIGZpbGVzLmZvckVhY2hGaWxlKGNhbGxiYWNrKTtcbiAgfVxuXG4gIG1hcEVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBldmVyeUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hFbnRyeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRW50cnkoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5SlNPTiA9IGVudHJ5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBlbnRyeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSksXG4gICAgICAgICAgZW50cmllc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGVudHJpZXNKU09OLm1hcCgoZW50cnlKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZW50cnlKU09OLCAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgZW50cnkgPSBmaWxlIHx8IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgICBlbnRyaWVzLmFkZEVudHJ5KGVudHJ5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbnRyeShlbnRyeSkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGVudHJpZXMgPSBuZXcgRW50cmllcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBibmZNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgZmlsZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJpZXM7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgiLCJwYXRoVXRpbGl0aWVzIiwiRW50cmllcyIsImFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGUiLCJmaWxlcyIsImdldEZpbGVzIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImdldERpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImFkZEVudHJ5IiwiYWRkRGlyZWN0b3J5IiwiZm9yRWFjaEZpbGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVFbnRyeSIsInNvbWUiLCJldmVyeUVudHJ5IiwiZXZlcnkiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwiRmlsZSIsIkRpcmVjdG9yeSIsImZyb21FbnRyeSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2TUE7OztlQUFBOzs7eUJBM004QzsyREFFN0I7NERBQ0M7Z0VBQ0k7MERBQ0E7NkRBQ0U7OERBQ0U7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUEsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkMsUUFDVCxBQUFFQywrQkFBaUNDLHdCQUFhLENBQTlDRDtBQUVSLElBQUEsQUFBTUUsd0JBQU47YUFBTUEsUUFDUUMsS0FBSztnQ0FEYkQ7UUFFRixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQUZYRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsYUFBYVQsTUFBTSxJQUFJLENBQUNNLEtBQUssR0FBRyxHQUFHO2dCQUV6QyxJQUFJRyxZQUFZO29CQUNkLElBQU1DLGlCQUFpQkQsV0FBV0UsT0FBTztvQkFFekNILHVCQUF1QkwsNkJBQTZCTztvQkFFcEQsSUFBSUYseUJBQXlCLE1BQU07d0JBQ2pDQSx1QkFBdUJFLGdCQUFpQixHQUFHO29CQUM3QztnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsSUFBSTtnQkFDbkJYLE9BQU8sSUFBSSxDQUFDSSxLQUFLLEVBQUUsU0FBQ1E7b0JBQ2xCLElBQU1DLFlBQVlELE1BQU1FLE1BQU07b0JBRTlCLElB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