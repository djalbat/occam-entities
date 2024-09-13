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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpIHtcbiAgICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0RW50cnkgPSBmaXJzdCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICBpZiAoZmlyc3RFbnRyeSkgeyAvLy9cbiAgICAgIGNvbnN0IGZpcnN0RW50cnlQYXRoID0gZmlyc3RFbnRyeS5nZXRQYXRoKCk7XG5cbiAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChmaXJzdEVudHJ5UGF0aCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IGZpcnN0RW50cnlQYXRoOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xuICB9XG5cbiAgcmVtb3ZlRmlsZUJ5UGF0aChwYXRoKSB7XG4gICAgZmlsdGVyKHRoaXMuYXJyYXksIChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBpZiAoZmlsZVBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBnZXRGaWxlcygpIHtcbiAgICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLm1hcEVudHJ5KChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5OyAvLy9cblxuICAgICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGZpbGVQYXRocywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGVudHJ5RmlsZSA9IGVudHJ5LmlzRmlsZSgpO1xuXG4gICAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCk7XG5cbiAgICAgICAgZmlsZVBhdGhzLnB1c2goZmlsZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmlsZVBhdGhzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBmaWxlUGF0aHM7XG4gIH1cblxuICBnZXREaXJlY3RvcnlQYXRocygpIHtcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRocyA9IHRoaXMucmVkdWNlRW50cnkoKGRpcmVjdG9yeVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBlbnRyeS5pc0RpcmVjdG9yeSgpO1xuXG4gICAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5LmdldFBhdGgoKTtcblxuICAgICAgICBkaXJlY3RvcnlQYXRocy5wdXNoKGRpcmVjdG9yeVBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGRpcmVjdG9yeVBhdGhzO1xuICB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgICAgdmVyc2lvbk1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdmVyc2lvbi5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gdmVyc2lvbk1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgY29uc3QgZW50cnkgPSBmaWxlOyAvLy9cblxuICAgIHRoaXMuYWRkRW50cnkoZW50cnkpO1xuICB9XG5cbiAgYWRkRW50cnkoZW50cnkpIHsgdGhpcy5hcnJheS5wdXNoKGVudHJ5KTsgfVxuXG4gIGFkZERpcmVjdG9yeShkaXJlY3RvcnkpIHtcbiAgICBjb25zdCBlbnRyeSA9IGRpcmVjdG9yeTsgIC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeShlbnRyeSk7XG4gIH1cblxuICBmb3JFYWNoRmlsZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5nZXRGaWxlcygpO1xuXG4gICAgZmlsZXMuZm9yRWFjaEZpbGUoY2FsbGJhY2spO1xuICB9XG5cbiAgbWFwRW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5RW50cnkoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEVudHJ5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VFbnRyeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50cnlKU09OID0gZW50cnkudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KSxcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGpzb247IC8vL1xuXG4gICAgZW50cmllc0pTT04ubWFwKChlbnRyeUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBlbnRyeUpTT04sIC8vL1xuICAgICAgICAgICAgZmlsZSA9IEZpbGUuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBEaXJlY3RvcnkuZnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBlbnRyeSA9IGZpbGUgfHwgZGlyZWN0b3J5OyAgLy8vXG5cbiAgICAgIGVudHJpZXMuYWRkRW50cnkoZW50cnkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICBlbnRyeVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZW50cmllcyA9IG5ldyBFbnRyaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIGJuZk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBmaWxlc01peGlucyk7XG5PYmplY3QuYXNzaWduKEVudHJpZXMucHJvdG90eXBlLCBwYXR0ZXJuTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIG1ldGFKU09OTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRW50cmllcztcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwidG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCIsInBhdGhVdGlsaXRpZXMiLCJFbnRyaWVzIiwiYXJyYXkiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZmlyc3RFbnRyeSIsImZpcnN0RW50cnlQYXRoIiwiZ2V0UGF0aCIsInJlbW92ZUZpbGVCeVBhdGgiLCJwYXRoIiwiZW50cnkiLCJlbnRyeUZpbGUiLCJpc0ZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRGaWxlIiwiZmlsZXMiLCJnZXRGaWxlcyIsImZpbmRGaWxlIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsIm1hcEVudHJ5IiwiYWRkRmlsZSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsInJlZHVjZUVudHJ5IiwicHVzaCIsImdldERpcmVjdG9yeVBhdGhzIiwiZGlyZWN0b3J5UGF0aHMiLCJlbnRyeURpcmVjdG9yeSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5UGF0aCIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsInZlcnNpb25NYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImFkZEVudHJ5IiwiYWRkRGlyZWN0b3J5IiwiZm9yRWFjaEZpbGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVFbnRyeSIsInNvbWUiLCJldmVyeUVudHJ5IiwiZXZlcnkiLCJmb3JFYWNoRW50cnkiLCJmb3JFYWNoIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJlbnRyeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJlbnRyaWVzIiwiRmlsZSIsIkRpcmVjdG9yeSIsImZyb21FbnRyeSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImJuZk1peGlucyIsImZpbGVzTWl4aW5zIiwicGF0dGVybk1peGlucyIsIm1ldGFKU09OTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2TUE7OztlQUFBOzs7eUJBM004QzsyREFFN0I7NERBQ0M7Z0VBQ0k7MERBQ0E7NkRBQ0U7OERBQ0U7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBUUEsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkMsUUFDVCxBQUFFQywrQkFBaUNDLHdCQUFhLENBQTlDRDtBQUVSLElBQUEsQUFBTUUsd0JBQU47YUFBTUEsUUFDUUMsS0FBSztnQ0FEYkQ7UUFFRixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQUZYRDs7WUFLSkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsYUFBYVQsTUFBTSxJQUFJLENBQUNNLEtBQUssR0FBRyxHQUFHO2dCQUV6QyxJQUFJRyxZQUFZO29CQUNkLElBQU1DLGlCQUFpQkQsV0FBV0UsT0FBTztvQkFFekNILHVCQUF1QkwsNkJBQTZCTztvQkFFcEQsSUFBSUYseUJBQXlCLE1BQU07d0JBQ2pDQSx1QkFBdUJFLGdCQUFpQixHQUFHO29CQUM3QztnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsSUFBSTtnQkFDbkJYLE9BQU8sSUFBSSxDQUFDSSxLQUFLLEVBQUUsU0FBQ1E7b0JBQ2xCLElBQU1DLFlBQVlELE1BQU1FLE1BQU07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