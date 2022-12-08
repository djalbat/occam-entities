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
function loadRelease(topmostFileName, projectsDirectoryPath) {
    var release = null;
    try {
        var name = topmostFileName, absolutePath = concatenatePaths(projectsDirectoryPath, name), entryFile = isEntryFile(absolutePath);
        if (entryFile) {
            var content = readFile(absolutePath), json = JSON.parse(content), entries = _entries.default.fromJSON(json);
            release = _release.default.fromNameAndEntries(name, entries);
        }
    } catch (error) {
    ///
    }
    return release;
}
function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var project = null;
    try {
        var name = topmostDirectoryName, entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);
        project = _project.default.fromNameAndEntries(name, entries);
    } catch (error) {
    ///
    }
    return project;
}
function loadReleases(projectsDirectoryPath) {
    var releases = _releases.default.fromNothing(), topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath);
    topmostFileNames.forEach(function(topmostFileName) {
        var release = loadRelease(topmostFileName, projectsDirectoryPath);
        if (release !== null) {
            releases.addRelease(release);
        }
    });
    return releases;
}
function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles) {
    var projects = _projects.default.fromNothing(), topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);
    topmostDirectoryNames.forEach(function(topmostDirectoryName) {
        var project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles);
        if (project !== null) {
            projects.addProject(project);
        }
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xyXG5cclxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBGaWxlIGZyb20gXCIuLi9maWxlXCI7XHJcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi4vZmlsZXNcIjtcclxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4uL2VudHJpZXNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcclxuaW1wb3J0IFJlbGVhc2UgZnJvbSBcIi4uL3JlbGVhc2VcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVsZWFzZXMgZnJvbSBcIi4uL3JlbGVhc2VzXCI7XHJcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4uL2RpcmVjdG9yeVwiO1xyXG5cclxuaW1wb3J0IHsgaXNOYW1lSGlkZGVuTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xyXG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlUGF0aFwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcclxuXHJcbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocywgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcyxcclxuICAgICAgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBpc0VudHJ5RmlsZSwgcmVhZERpcmVjdG9yeSwgaXNFbnRyeURpcmVjdG9yeSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgZmlsZSA9IG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgICBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgIGlmIChlbnRyeUZpbGUpIHtcclxuICAgICAgbGV0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xyXG5cclxuICAgICAgZmlsZSA9IEZpbGUuZnJvbVBhdGhBbmRDb250ZW50KHBhdGgsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUZpbGUoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgcGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxyXG4gICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcclxuICAgICAgICBhYnNvbHV0ZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcGF0aCksXHJcbiAgICAgICAgdG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgbWtkaXJwLnN5bmModG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHdyaXRlRmlsZShhYnNvbHV0ZVBhdGgsIGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBjb25zdCBmaWxlcyA9IEZpbGVzLmZyb21Ob3RoaW5nKCk7XHJcblxyXG4gIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmaWxlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaWxlcyhmaWxlcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgZmlsZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcclxuICAgIHNhdmVGaWxlKGZpbGUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRW50cmllcyh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksXHJcbiAgICAgICAgcmVsYXRpdmVEaXJlY3RvcnlQYXRoID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cclxuXHJcbiAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgcmVsYXRpdmVEaXJlY3RvcnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKTtcclxuXHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVsZWFzZSh0b3Btb3N0RmlsZU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCByZWxlYXNlID0gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RmlsZU5hbWUsIC8vL1xyXG4gICAgICAgICAgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIG5hbWUpLFxyXG4gICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlGaWxlKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVBhdGgpLFxyXG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShjb250ZW50KSxcclxuICAgICAgICAgICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7XHJcblxyXG4gICAgICByZWxlYXNlID0gUmVsZWFzZS5mcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlbGVhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGxldCBwcm9qZWN0ID0gbnVsbDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZSwgIC8vL1xyXG4gICAgICAgICAgZW50cmllcyA9IGxvYWRFbnRyaWVzKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKTtcclxuXHJcbiAgICBwcm9qZWN0ID0gUHJvamVjdC5mcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVsZWFzZXMocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgcmVsZWFzZXMgPSBSZWxlYXNlcy5mcm9tTm90aGluZygpLFxyXG4gICAgICAgIHRvcG1vc3RGaWxlTmFtZXMgPSB0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICB0b3Btb3N0RmlsZU5hbWVzLmZvckVhY2goKHRvcG1vc3RGaWxlTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcmVsZWFzZSA9IGxvYWRSZWxlYXNlKHRvcG1vc3RGaWxlTmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgICBpZiAocmVsZWFzZSAhPT0gbnVsbCkge1xyXG4gICAgICByZWxlYXNlcy5hZGRSZWxlYXNlKHJlbGVhc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmVsZWFzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGNvbnN0IHByb2plY3RzID0gUHJvamVjdHMuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKCh0b3Btb3N0RGlyZWN0b3J5TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGxvYWRQcm9qZWN0KHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzKTtcclxuXHJcbiAgICBpZiAocHJvamVjdCAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGlyZWN0b3J5KHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCBkaXJlY3RvcnkgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxyXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XHJcblxyXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XHJcbiAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlyZWN0b3J5O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbG9hZEZpbGUsXHJcbiAgc2F2ZUZpbGUsXHJcbiAgbG9hZEZpbGVzLFxyXG4gIHNhdmVGaWxlcyxcclxuICBsb2FkRW50cmllcyxcclxuICBsb2FkUmVsZWFzZSxcclxuICBsb2FkUHJvamVjdCxcclxuICBsb2FkUmVsZWFzZXMsXHJcbiAgbG9hZFByb2plY3RzLFxyXG4gIGxvYWREaXJlY3RvcnlcclxufTtcclxuXHJcbmZ1bmN0aW9uIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcykge1xyXG4gIGNvbnN0IGFic29sdXRlRGlyZWN0b3J5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgpLFxyXG4gICAgICAgIHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHN1YkVudHJ5TmFtZXMuZm9yRWFjaCgoc3ViRW50cnlOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMgPSAhbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXM7XHJcblxyXG4gICAgaWYgKCFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgICAgZGlyZWN0b3J5ID0gbG9hZERpcmVjdG9yeShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgaWYgKGRpcmVjdG9yeSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoOyAvLy9cclxuXHJcbiAgICAgICAgaWYgKGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgICAgICAgICBlbnRyaWVzLmFkZERpcmVjdG9yeShkaXJlY3RvcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgoZW50cmllcywgZGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcyk7IC8vL1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBsb2FkRmlsZShwYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgICAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoID0gaXNGaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aChmaWxlUGF0aCksXHJcbiAgICAgICAgICAgICAgICBmaWxlUmVjb2duaXNlZEZpbGUgPSBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aDsgIC8vL1xyXG5cclxuICAgICAgICAgIGlmIChmaWxlUmVjb2duaXNlZEZpbGUgfHwgbG9hZFVucmVjb2duaXNlZEZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICAgICAgICAgICAgZW50cmllcy5hZGRGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcclxuICBsZXQgdG9wbW9zdEZpbGVOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgdG9wbW9zdEZpbGVOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKCh0b3Btb3N0RmlsZU5hbWVzLCBzdWJFbnRyeU5hbWUpID0+IHtcclxuICAgIGNvbnN0IGFic29sdXRlU3ViRW50cnlQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBzdWJFbnRyeU5hbWVIaWRkZW5OYW1lID0gaXNOYW1lSGlkZGVuTmFtZShzdWJFbnRyeU5hbWUpO1xyXG5cclxuICAgIGlmICghc3ViRW50cnlOYW1lSGlkZGVuTmFtZSkge1xyXG4gICAgICBjb25zdCBzdWJFbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoc3ViRW50cnlGaWxlKSB7XHJcbiAgICAgICAgY29uc3QgdG9wbW9zdEZpbGVOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXHJcblxyXG4gICAgICAgIHRvcG1vc3RGaWxlTmFtZXMucHVzaCh0b3Btb3N0RmlsZU5hbWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9wbW9zdEZpbGVOYW1lcztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0b3Btb3N0RmlsZU5hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKCh0b3Btb3N0RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSk7XHJcblxyXG4gICAgaWYgKCFzdWJFbnRyeU5hbWVIaWRkZW5OYW1lKSB7XHJcbiAgICAgIGNvbnN0IHN1YkVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xyXG5cclxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMucHVzaCh0b3Btb3N0RGlyZWN0b3J5TmFtZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJsb2FkRmlsZSIsInNhdmVGaWxlIiwibG9hZEZpbGVzIiwic2F2ZUZpbGVzIiwibG9hZEVudHJpZXMiLCJsb2FkUmVsZWFzZSIsImxvYWRQcm9qZWN0IiwibG9hZFJlbGVhc2VzIiwibG9hZFByb2plY3RzIiwibG9hZERpcmVjdG9yeSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwidG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVhZERpcmVjdG9yeSIsImlzRW50cnlEaXJlY3RvcnkiLCJwYXRoIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwiZmlsZSIsImFic29sdXRlUGF0aCIsImVudHJ5RmlsZSIsImNvbnRlbnQiLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJGaWxlIiwiZnJvbVBhdGhBbmRDb250ZW50IiwiZXJyb3IiLCJnZXRQYXRoIiwiZ2V0Q29udGVudCIsInRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgiLCJta2RpcnAiLCJzeW5jIiwicGF0aHMiLCJmaWxlcyIsIkZpbGVzIiwiZnJvbU5vdGhpbmciLCJmb3JFYWNoIiwiYWRkRmlsZSIsImZvckVhY2hGaWxlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImVudHJpZXMiLCJFbnRyaWVzIiwicmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiZW50cmllc0Zyb21SZWxhdGl2ZURpcmVjdG9yeVBhdGgiLCJ0b3Btb3N0RmlsZU5hbWUiLCJyZWxlYXNlIiwibmFtZSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJmcm9tSlNPTiIsIlJlbGVhc2UiLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJwcm9qZWN0IiwiUHJvamVjdCIsInJlbGVhc2VzIiwiUmVsZWFzZXMiLCJ0b3Btb3N0RmlsZU5hbWVzIiwidG9wbW9zdEZpbGVOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhZGRSZWxlYXNlIiwicHJvamVjdHMiLCJQcm9qZWN0cyIsInRvcG1vc3REaXJlY3RvcnlOYW1lcyIsInRvcG1vc3REaXJlY3RvcnlOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJhZGRQcm9qZWN0IiwiZGlyZWN0b3J5IiwiZW50cnlEaXJlY3RvcnkiLCJEaXJlY3RvcnkiLCJmcm9tUGF0aCIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwiaXNOYW1lSGlkZGVuTmFtZSIsImxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZGlyZWN0b3J5UGF0aCIsImFkZERpcmVjdG9yeSIsImZpbGVQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZVJlY29nbmlzZWRGaWxlIiwicmVkdWNlIiwiYWJzb2x1dGVTdWJFbnRyeVBhdGgiLCJzdWJFbnRyeUZpbGUiLCJwdXNoIiwic3ViRW50cnlEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNCZ0JBLFFBQVE7ZUFBUkE7O0lBcUJBQyxRQUFRO2VBQVJBOztJQVdB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