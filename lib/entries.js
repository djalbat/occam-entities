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
var _metaJSON = /*#__PURE__*/ _interop_require_default(require("./mixins/metaJSON"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("./mixins/vocabulary"));
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
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
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
Object.assign(Entries.prototype, _metaJSON.default);
Object.assign(Entries.prototype, _vocabulary.default);
var _default = Entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuaW1wb3J0IEZpbGVzIGZyb20gXCIuL2ZpbGVzXCI7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gXCIuL2RpcmVjdG9yeVwiO1xuaW1wb3J0IGJuZk1peGlucyBmcm9tIFwiLi9taXhpbnMvYm5mXCI7XG5pbXBvcnQgZmlsZXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZpbGVzXCI7XG5pbXBvcnQgbWV0YUpTT05NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21ldGFKU09OXCI7XG5pbXBvcnQgdm9jYWJ1bGFyeU1peGlucyBmcm9tIFwiLi9taXhpbnMvdm9jYWJ1bGFyeVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIH0gPSBwYXRoVXRpbGl0aWVzO1xuXG5jbGFzcyBFbnRyaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZmlyc3RFbnRyeSA9IGZpcnN0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgIGlmIChmaXJzdEVudHJ5KSB7IC8vL1xuICAgICAgY29uc3QgZmlyc3RFbnRyeVBhdGggPSBmaXJzdEVudHJ5LmdldFBhdGgoKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKGZpcnN0RW50cnlQYXRoKTtcblxuICAgICAgaWYgKHRvcG1vc3REaXJlY3RvcnlOYW1lID09PSBudWxsKSB7XG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZmlyc3RFbnRyeVBhdGg7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG4gIH1cblxuICByZW1vdmVGaWxlQnlQYXRoKHBhdGgpIHtcbiAgICBmaWx0ZXIodGhpcy5hcnJheSwgKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnksIC8vL1xuICAgICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGlmIChmaWxlUGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCksXG4gICAgICAgICAgZmlsZSA9IGZpbGVzLmZpbmRGaWxlKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSBmaWxlLm1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZVBhdGhNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGdldEZpbGVzKCkge1xuICAgIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMubWFwRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeUZpbGUgPSBlbnRyeS5pc0ZpbGUoKTtcblxuICAgICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZW50cnk7IC8vL1xuXG4gICAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZmlsZVBhdGhzLCBlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgZW50cnlGaWxlID0gZW50cnkuaXNGaWxlKCk7XG5cbiAgICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGVudHJ5LCAvLy9cbiAgICAgICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgICBmaWxlUGF0aHMucHVzaChmaWxlUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWxlUGF0aHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGdldERpcmVjdG9yeVBhdGhzKCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGhzID0gdGhpcy5yZWR1Y2VFbnRyeSgoZGlyZWN0b3J5UGF0aHMsIGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGVudHJ5LmlzRGlyZWN0b3J5KCk7XG5cbiAgICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgICBjb25zdCBkaXJlY3RvcnkgPSBlbnRyeSwgLy8vXG4gICAgICAgICAgICAgIGRpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnkuZ2V0UGF0aCgpO1xuXG4gICAgICAgIGRpcmVjdG9yeVBhdGhzLnB1c2goZGlyZWN0b3J5UGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkaXJlY3RvcnlQYXRocztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5UGF0aHM7XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgICB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB2ZXJzaW9uLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiB2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBhZGRGaWxlKGZpbGUpIHtcbiAgICBjb25zdCBlbnRyeSA9IGZpbGU7IC8vL1xuXG4gICAgdGhpcy5hZGRFbnRyeShlbnRyeSk7XG4gIH1cblxuICBhZGRFbnRyeShlbnRyeSkgeyB0aGlzLmFycmF5LnB1c2goZW50cnkpOyB9XG5cbiAgYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZGlyZWN0b3J5OyAgLy8vXG5cbiAgICB0aGlzLmFkZEVudHJ5KGVudHJ5KTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmdldEZpbGVzKCk7XG5cbiAgICBmaWxlcy5mb3JFYWNoRmlsZShjYWxsYmFjayk7XG4gIH1cblxuICBtYXBFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUVudHJ5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlFbnRyeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRW50cnkoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUVudHJ5KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUpTT04gPSBlbnRyeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZW50cnlKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpLFxuICAgICAgICAgIGVudHJpZXNKU09OID0ganNvbjsgLy8vXG5cbiAgICBlbnRyaWVzSlNPTi5tYXAoKGVudHJ5SlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGVudHJ5SlNPTiwgLy8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgIGVudHJ5ID0gZmlsZSB8fCBkaXJlY3Rvcnk7ICAvLy9cblxuICAgICAgZW50cmllcy5hZGRFbnRyeShlbnRyeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRW50cnkoZW50cnkpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBlbnRyaWVzID0gbmV3IEVudHJpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbnRyaWVzLnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIG1ldGFKU09OTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRW50cmllcy5wcm90b3R5cGUsIHZvY2FidWxhcnlNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRyaWVzO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsIkVudHJpZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImZpcnN0RW50cnkiLCJmaXJzdEVudHJ5UGF0aCIsImdldFBhdGgiLCJyZW1vdmVGaWxlQnlQYXRoIiwicGF0aCIsImVudHJ5IiwiZW50cnlGaWxlIiwiaXNGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGUiLCJmaWxlcyIsImdldEZpbGVzIiwiZmlsZVBhdGhNYXRjaGVzIiwibWF0Y2hGaWxlUGF0aCIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJtYXBFbnRyeSIsImFkZEZpbGUiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJyZWR1Y2VFbnRyeSIsInB1c2giLCJnZXREaXJlY3RvcnlQYXRocyIsImRpcmVjdG9yeVBhdGhzIiwiZW50cnlEaXJlY3RvcnkiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsImRpcmVjdG9yeVBhdGgiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJ2ZXJzaW9uTWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJhZGRFbnRyeSIsImFkZERpcmVjdG9yeSIsImZvckVhY2hGaWxlIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRW50cnkiLCJzb21lIiwiZXZlcnlFbnRyeSIsImV2ZXJ5IiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsInRvSlNPTiIsImVudHJpZXNKU09OIiwiZW50cnlKU09OIiwianNvbiIsImZyb21KU09OIiwiZW50cmllcyIsIkZpbGUiLCJEaXJlY3RvcnkiLCJmcm9tRW50cnkiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJibmZNaXhpbnMiLCJmaWxlc01peGlucyIsIm1ldGFKU09OTWl4aW5zIiwidm9jYWJ1bGFyeU1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaU5BOzs7ZUFBQTs7O3lCQS9NOEM7MkRBRTdCOzREQUNDO2dFQUNJOzBEQUNBOzZEQUNFOytEQUNHO2lFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFBLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDLFFBQ1QsQUFBRUMsK0JBQWlDQyx3QkFBYSxDQUE5Q0Q7QUFFUixJQUFBLEFBQU1FLHdCQUFOO2FBQU1BLFFBQ1FDLEtBQUs7Z0NBRGJEO1FBRUYsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFGWEQ7O1lBS0pFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQU1DLGFBQWFWLE1BQU0sSUFBSSxDQUFDTSxLQUFLLEdBQUcsR0FBRztnQkFFekMsSUFBSUksWUFBWTtvQkFDZCxJQUFNQyxpQkFBaUJELFdBQVdFLE9BQU87b0JBRXpDSCx1QkFBdUJOLDZCQUE2QlE7b0JBRXBELElBQUlGLHlC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