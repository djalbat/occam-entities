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
                    var filePathMatches = file.matchFilePath(filePath);
                    if (filePathMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlcy5maW5kRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGhNYXRjaGVzID0gZmlsZS5tYXRjaEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVQYXRoTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLm1hcEVudHJ5KChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGZpbGVQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZmlsZVBhdGhzLnB1c2goZmlsZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGRpcmVjdG9yeVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRocy5wdXNoKGRpcmVjdG9yeVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgdmVyc2lvbk1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdmVyc2lvbi5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gdmVyc2lvbk1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgY29uc3QgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnkoZW50cnkpO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHsgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTsgfVxuXG4gIGFkZERpcmVjdG9yeShkaXJlY3RvcnkpIHtcbiAgICBjb25zdCBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeShlbnRyeSk7XG4gIH1cblxuICBmb3JFYWNoRmlsZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuZm9yRWFjaEZpbGUoY2FsbGJhY2spO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb247IC8vL1xuXG4gICAgZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIG1ldGFKU09OTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50cmllcztcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhVdGlsaXRpZXMiLCJFbnRyaWVzIiwiYXJyYXkiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInJlbW92ZUZpbGVCeVBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJmaW5kRmlsZSIsImZpbGVzIiwiZ2V0RmlsZXMiLCJmaWxlUGF0aE1hdGNoZXMiLCJtYXRjaEZpbGVQYXRoIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImdldERpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImFkZEVudHJ5IiwiYWRkRGlyZWN0b3J5IiwiZm9yRWFjaEZpbGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVFbnRyeSIsInNvbWUiLCJldmVyeUVudHJ5IiwiZXZlcnkiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwiRmlsZSIsIkRpcmVjdG9yeSIsImZyb21FbnRyeSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2TUE7OztlQUFBOzs7eUJBM004QzsyREFFN0I7NERBQ0M7Z0VBQ0k7MERBQ0E7NkRBQ0U7OERBQ0U7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUEsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkMsUUFDVCxBQUFFQywrQkFBaUNDLHdCQUFhLENBQTlDRDtBQUVSLElBQUEsQUFBTUUsd0JBQU47YUFBTUEsUUFDUUMsS0FBSztnQ0FEYkQ7UUFFRixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQUZYRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsYUFBYVQsTUFBTSxJQUFJLENBQUNNLEtBQUssR0FBRyxHQUFHO2dCQUV6QyxJQUFJRyxZQUFZO29CQUNkLElBQU1DLGlCQUFpQkQsV0FBV0UsT0FBTztvQkFFekNILHVCQUF1QkwsNkJBQTZCTztvQkFFcEQsSUFBSUYseUJBQXlCLE1BQU07d0JBQ2pDQSx1QkFBdUJFLGdCQUFpQixHQUFHO29CQUM3QztnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsSUFBSTtnQkFDbkJYLE9BQU8sSUFBSSxDQUFD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