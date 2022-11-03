"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    loadFile: function() {
        return loadFile;
    },
    saveFile: function() {
        return saveFile;
    },
    loadFiles: function() {
        return loadFiles;
    },
    saveFiles: function() {
        return saveFiles;
    },
    loadEntries: function() {
        return loadEntries;
    },
    loadRelease: function() {
        return loadRelease;
    },
    loadProject: function() {
        return loadProject;
    },
    loadReleases: function() {
        return loadReleases;
    },
    loadProjects: function() {
        return loadProjects;
    },
    loadDirectory: function() {
        return loadDirectory;
    },
    default: function() {
        return _default;
    }
});
var _mkdirp = /*#__PURE__*/ _interopRequireDefault(require("mkdirp"));
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireDefault(require("../file"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("../files"));
var _entries = /*#__PURE__*/ _interopRequireDefault(require("../entries"));
var _project = /*#__PURE__*/ _interopRequireDefault(require("../project"));
var _release = /*#__PURE__*/ _interopRequireDefault(require("../release"));
var _projects = /*#__PURE__*/ _interopRequireDefault(require("../projects"));
var _releases = /*#__PURE__*/ _interopRequireDefault(require("../releases"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("../directory"));
var _name = require("../utilities/name");
var _filePath = require("../utilities/filePath");
var _content = require("../utilities/content");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath, readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
function loadFile(path, projectsDirectoryPath) {
    var file = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryFile = isEntryFile(absolutePath);
        if (entryFile) {
            var content = readFile(absolutePath);
            content = (0, _content.convertContentTabsToWhitespace)(content); ///
            file = _file.default.fromPathAndContent(path, content);
        }
    } catch (error) {
    ///
    }
    return file;
}
function saveFile(file, projectsDirectoryPath) {
    var path = file.getPath(), content = file.getContent(), absolutePath = concatenatePaths(projectsDirectoryPath, path), topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);
    _mkdirp.default.sync(topmostAbsoluteDirectoryPath);
    writeFile(absolutePath, content);
}
function loadFiles(paths, projectsDirectoryPath) {
    var files = _files.default.fromNothing();
    paths.forEach(function(path) {
        var file = loadFile(path, projectsDirectoryPath);
        files.addFile(file);
    });
    return files;
}
function saveFiles(files, projectsDirectoryPath) {
    files.forEachFile(function(file) {
        saveFile(file, projectsDirectoryPath);
    });
}
function loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var entries = _entries.default.fromNothing(), relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles);
    return entries;
}
function loadRelease(topmostDirectoryName, projectsDirectoryPath) {
    var name = topmostDirectoryName, loadOnlyRecognisedFiles = true, entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles), release = _release.default.fromNameAndEntries(name, entries);
    return release;
}
function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var name = topmostDirectoryName, entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles), project = _project.default.fromNameAndEntries(name, entries);
    return project;
}
function loadReleases(projectsDirectoryPath) {
    var releases;
    try {
        var releases1 = _releases.default.fromNothing(), topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath);
        topmostFileNames.forEach(function(topmostFileName) {
            var release = loadRelease(topmostFileName, projectsDirectoryPath);
            if (release !== null) {
                releases1.addRelease(release);
            }
        });
    } catch (error) {
        releases = null;
    }
    return releases;
}
function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var projects = _projects.default.fromNothing();
    try {
        var topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);
        topmostDirectoryNames.forEach(function(topmostDirectoryName) {
            var project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);
            projects.addProject(project);
        });
    } catch (error) {
        projects = null;
    }
    return projects;
}
function loadDirectory(path, projectsDirectoryPath) {
    var directory = null;
    try {
        var absolutePath = concatenatePaths(projectsDirectoryPath, path), entryDirectory = isEntryDirectory(absolutePath);
        if (entryDirectory) {
            directory = _directory.default.fromPath(path);
        }
    } catch (error) {
    ///
    }
    return directory;
}
var _default = {
    loadFile: loadFile,
    saveFile: saveFile,
    loadFiles: loadFiles,
    saveFiles: saveFiles,
    loadEntries: loadEntries,
    loadRelease: loadRelease,
    loadProject: loadProject,
    loadReleases: loadReleases,
    loadProjects: loadProjects,
    loadDirectory: loadDirectory
};
function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
        if (!subEntryNameHiddenName) {
            var path = concatenatePaths(relativeDirectoryPath, subEntryName), directory = loadDirectory(path, projectsDirectoryPath);
            if (directory !== null) {
                var directoryPath = path; ///
                if (loadUnrecognisedFilesAndDirectories) {
                    entries.addDirectory(directory);
                }
                entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles); ///
            } else {
                var file = loadFile(path, projectsDirectoryPath);
                if (file !== null) {
                    var filePath = file.getPath(), filePathRecognisedFilePath = (0, _filePath.isFilePathRecognisedFilePath)(filePath), fileRecognisedFile = filePathRecognisedFilePath; ///
                    if (fileRecognisedFile || loadUnrecognisedFilesAndDirectories) {
                        entries.addFile(file);
                    }
                }
            }
        }
    });
}
function topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
    var topmostFileNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostFileNames = subEntryNames.reduce(function(topmostFileNames, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName);
        if (!subEntryNameHiddenName) {
            var subEntryFile = isEntryFile(absoluteSubEntryPath);
            if (subEntryFile) {
                var topmostFileName = subEntryName; ///
                topmostFileNames.push(topmostFileName);
            }
        }
        return topmostFileNames;
    }, []);
    return topmostFileNames;
}
function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
    var topmostDirectoryNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName);
        if (!subEntryNameHiddenName) {
            var subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);
            if (subEntryDirectory) {
                var topmostDirectoryName = subEntryName; ///
                topmostDirectoryNames.push(topmostDirectoryName);
            }
        }
        return topmostDirectoryNames;
    }, []);
    return topmostDirectoryNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xyXG5cclxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBGaWxlIGZyb20gXCIuLi9maWxlXCI7XHJcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi4vZmlsZXNcIjtcclxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4uL2VudHJpZXNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcclxuaW1wb3J0IFJlbGVhc2UgZnJvbSBcIi4uL3JlbGVhc2VcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVsZWFzZXMgZnJvbSBcIi4uL3JlbGVhc2VzXCI7XHJcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4uL2RpcmVjdG9yeVwiO1xyXG5cclxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xyXG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlUGF0aFwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcclxuXHJcbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcyxcclxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSwgcmVhZERpcmVjdG9yeSwgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgZmlsZSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgIGlmIChlbnRyeUZpbGUpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xyXG5cclxuICAgICAgZmlsZSA9IEZpbGUuZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcclxuICAgICAgICBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XHJcblxyXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmaWxlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaWxlcyhmaWxlcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgZmlsZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcclxuICAgIHNhdmVGaWxlKGZpbGUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRW50cmllcyh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cclxuXHJcbiAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKTtcclxuXHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVsZWFzZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAgLy8vXHJcbiAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxyXG4gICAgICAgIGVudHJpZXMgPSBsb2FkRW50cmllcyh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcyksXHJcbiAgICAgICAgcmVsZWFzZSA9IFJlbGVhc2UuZnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpO1xyXG5cclxuICByZXR1cm4gcmVsZWFzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAgLy8vXHJcbiAgICAgICAgZW50cmllcyA9IGxvYWRFbnRyaWVzKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKSxcclxuICAgICAgICBwcm9qZWN0ID0gUHJvamVjdC5mcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlbGVhc2VzKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCByZWxlYXNlcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlbGVhc2VzID0gUmVsZWFzZXMuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHRvcG1vc3RGaWxlTmFtZXMgPSB0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgIHRvcG1vc3RGaWxlTmFtZXMuZm9yRWFjaCgodG9wbW9zdEZpbGVOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbGVhc2UgPSBsb2FkUmVsZWFzZSh0b3Btb3N0RmlsZU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICBpZiAocmVsZWFzZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJlbGVhc2VzLmFkZFJlbGVhc2UocmVsZWFzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWxlYXNlcyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVsZWFzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGxldCBwcm9qZWN0cyA9IFByb2plY3RzLmZyb21Ob3RoaW5nKCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzLmZvckVhY2goKHRvcG1vc3REaXJlY3RvcnlOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsb2FkUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcyk7XHJcblxyXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHByb2plY3RzID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREaXJlY3RvcnkocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGRpcmVjdG9yeSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgZGlyZWN0b3J5ID0gRGlyZWN0b3J5LmZyb21QYXRoKHBhdGgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBkaXJlY3Rvcnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsb2FkRmlsZSxcclxuICBzYXZlRmlsZSxcclxuICBsb2FkRmlsZXMsXHJcbiAgc2F2ZUZpbGVzLFxyXG4gIGxvYWRFbnRyaWVzLFxyXG4gIGxvYWRSZWxlYXNlLFxyXG4gIGxvYWRQcm9qZWN0LFxyXG4gIGxvYWRSZWxlYXNlcyxcclxuICBsb2FkUHJvamVjdHMsXHJcbiAgbG9hZERpcmVjdG9yeVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKSB7XHJcbiAgY29uc3QgYWJzb2x1dGVEaXJlY3RvcnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCksXHJcbiAgICAgICAgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgc3ViRW50cnlOYW1lcy5mb3JFYWNoKChzdWJFbnRyeU5hbWUpID0+IHtcclxuICAgIGNvbnN0IHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcclxuXHJcbiAgICBpZiAoIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgICBkaXJlY3RvcnkgPSBsb2FkRGlyZWN0b3J5KHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoZGlyZWN0b3J5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGg7IC8vL1xyXG5cclxuICAgICAgICBpZiAobG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgIGVudHJpZXMuYWRkRGlyZWN0b3J5KGRpcmVjdG9yeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCBkaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKTsgLy8vXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGxvYWRGaWxlKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICAgIGlmIChmaWxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggPSBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoKGZpbGVQYXRoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVSZWNvZ25pc2VkRmlsZSA9IGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoOyAgLy8vXHJcblxyXG4gICAgICAgICAgaWYgKGZpbGVSZWNvZ25pc2VkRmlsZSB8fCBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmFkZEZpbGUoZmlsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvcG1vc3RGaWxlTmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCB0b3Btb3N0RmlsZU5hbWVzO1xyXG5cclxuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICB0b3Btb3N0RmlsZU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoKHRvcG1vc3RGaWxlTmFtZXMsIHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSk7XHJcblxyXG4gICAgaWYgKCFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lKSB7XHJcbiAgICAgIGNvbnN0IHN1YkVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlU3ViRW50cnlQYXRoKTtcclxuXHJcbiAgICAgIGlmIChzdWJFbnRyeUZpbGUpIHtcclxuICAgICAgICBjb25zdCB0b3Btb3N0RmlsZU5hbWUgPSBzdWJFbnRyeU5hbWU7ICAvLy9cclxuXHJcbiAgICAgICAgdG9wbW9zdEZpbGVOYW1lcy5wdXNoKHRvcG1vc3RGaWxlTmFtZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3Btb3N0RmlsZU5hbWVzO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRvcG1vc3RGaWxlTmFtZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gc3ViRW50cnlOYW1lcy5yZWR1Y2UoKHRvcG1vc3REaXJlY3RvcnlOYW1lcywgc3ViRW50cnlOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKTtcclxuXHJcbiAgICBpZiAoIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUpIHtcclxuICAgICAgY29uc3Qgc3ViRW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlU3ViRW50cnlQYXRoKTtcclxuXHJcbiAgICAgIGlmIChzdWJFbnRyeURpcmVjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXHJcblxyXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5wdXNoKHRvcG1vc3REaXJlY3RvcnlOYW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lcztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImxvYWRGaWxlIiwic2F2ZUZpbGUiLCJsb2FkRmlsZXMiLCJzYXZlRmlsZXMiLCJsb2FkRW50cmllcyIsImxvYWRSZWxlYXNlIiwibG9hZFByb2plY3QiLCJsb2FkUmVsZWFzZXMiLCJsb2FkUHJvamVjdHMiLCJsb2FkRGlyZWN0b3J5IiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJ0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwid3JpdGVGaWxlIiwiaXNFbnRyeUZpbGUiLCJyZWFkRGlyZWN0b3J5IiwiaXNFbnRyeURpcmVjdG9yeSIsInBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJmaWxlIiwiYWJzb2x1dGVQYXRoIiwiZW50cnlGaWxlIiwiY29udGVudCIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsIkZpbGUiLCJmcm9tUGF0aEFuZENvbnRlbnQiLCJlcnJvciIsImdldFBhdGgiLCJnZXRDb250ZW50IiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsIm1rZGlycCIsInN5bmMiLCJwYXRocyIsImZpbGVzIiwiRmlsZXMiLCJmcm9tTm90aGluZyIsImZvckVhY2giLCJhZGRGaWxlIiwiZm9yRWFjaEZpbGUiLCJ0b3Btb3N0RGlyZWN0b3J5TmFtZSIsImxvYWRPbmx5UmVjb2duaXNlZEZpbGVzIiwiZW50cmllcyIsIkVudHJpZXMiLCJyZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsIm5hbWUiLCJyZWxlYXNlIiwiUmVsZWFzZSIsImZyb21OYW1lQW5kRW50cmllcyIsInByb2plY3QiLCJQcm9qZWN0IiwicmVsZWFzZXMiLCJSZWxlYXNlcyIsInRvcG1vc3RGaWxlTmFtZXMiLCJ0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3RGaWxlTmFtZSIsImFkZFJlbGVhc2UiLCJwcm9qZWN0cyIsIlByb2plY3RzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFkZFByb2plY3QiLCJkaXJlY3RvcnkiLCJlbnRyeURpcmVjdG9yeSIsIkRpcmVjdG9yeSIsImZyb21QYXRoIiwiYWJzb2x1dGVEaXJlY3RvcnlQYXRoIiwic3ViRW50cnlOYW1lcyIsInN1YkVudHJ5TmFtZSIsInN1YkVudHJ5TmFtZUhpZGRlbk5hbWUiLCJpc05hbWVIaWRkZW5OYW1lIiwibG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMiLCJkaXJlY3RvcnlQYXRoIiwiYWRkRGlyZWN0b3J5IiwiZmlsZVBhdGgiLCJmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCIsImlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJmaWxlUmVjb2duaXNlZEZpbGUiLCJyZWR1Y2UiLCJhYnNvbHV0ZVN1YkVudHJ5UGF0aCIsInN1YkVudHJ5RmlsZSIsInB1c2giLCJzdWJFbnRyeURpcmVjdG9yeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0JnQkEsUUFBUTtlQUFSQTs7SUFxQkFDLFFBQVE7ZUFBUkE7O0lBV0FDLFNBQVM7ZUFBVEE7O0lBWUFDLFNBQVM7ZUFBVEE7O0lBTUFDLFdBQVc7ZUFBWEE7O0lBU0FDLFdBQVc7ZUFBWEE7O0lBU0FDLFdBQVc7ZUFBWEE7O0lBUUFDLFlBQVk7ZUFBWkE7O0lBcUJBQyxZQUFZO2VBQVpBOztJQWtCQUMsYUFBYTtlQUFiQTs7SUFpQmhCLE9BV0U7ZUFYRjs7OzJEQXhKbUI7eUJBRWdDO3lEQUVsQzswREFDQzs0REFDRTs0REFDQTs0REFDQTs2REFD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