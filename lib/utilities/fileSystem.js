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
    }
});
var _mkdirp = /*#__PURE__*/ _interopRequireDefault(require("mkdirp"));
var _occamGrammars = require("occam-grammars");
var _necessary = require("necessary");
var _file = /*#__PURE__*/ _interopRequireDefault(require("../file"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("../files"));
var _entries = /*#__PURE__*/ _interopRequireDefault(require("../entries"));
var _project = /*#__PURE__*/ _interopRequireDefault(require("../project"));
var _projects = /*#__PURE__*/ _interopRequireDefault(require("../projects"));
var _releases = /*#__PURE__*/ _interopRequireDefault(require("../releases"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("../directory"));
var _constants = require("../constants");
var _name = require("../utilities/name");
var _filePath = require("../utilities/filePath");
var _content = require("../utilities/content");
var _files1 = require("../utilities/files");
var _metaJSON = require("./metaJSON");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, topmostDirectoryPathFromPath = _necessary.pathUtilities.topmostDirectoryPathFromPath, readFile = _necessary.fileSystemUtilities.readFile, writeFile = _necessary.fileSystemUtilities.writeFile, isEntryFile = _necessary.fileSystemUtilities.isEntryFile, readDirectory = _necessary.fileSystemUtilities.readDirectory, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory;
var metaJSONLexer = _occamGrammars.MetaJSONLexer.fromNothing(), metaJSONParser = _occamGrammars.MetaJSONParser.fromNothing();
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
function loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var entries = _entries.default.fromNothing(), relativeDirectoryPath = topmostDirectoryName; ///
    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
    return entries;
}
function loadRelease(topmostDirectoryName) {
    var projectsDirectoryPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _constants.PERIOD;
    var release = null;
    var name = topmostDirectoryName, loadOnlyRecognisedFiles = true, doNotLoadHiddenFilesAndDirectories = true, entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), files = entries.getFiles(), readmeFile = (0, _files1.readmeFileFromFiles)(files), metaJSONFile = (0, _files1.metaJSONFileFromFiles)(files);
    if (readmeFile !== null && metaJSONFile !== null) {
        var metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile);
        if (metaJSONNode !== null) {
            var node = metaJSONNode, version = (0, _metaJSON.versionFromNode)(node), repository = (0, _metaJSON.repositoryFromNode)(node), dependencies = (0, _metaJSON.dependenciesFromNode)(node);
            release = Release.fromNameEntriesVersionRepositoryAndDependencies(name, entries, version, repository, dependencies);
        }
    }
    return release;
}
function loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var name = topmostDirectoryName, entries = loadEntries(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories), files = entries.getFiles(), metaJSONFile = (0, _files1.metaJSONFileFromFiles)(files);
    var repository = null, dependencies = [];
    if (metaJSONFile !== null) {
        var metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile), node = metaJSONNode;
        repository = (0, _metaJSON.repositoryFromNode)(node);
        dependencies = (0, _metaJSON.dependenciesFromNode)(node);
    }
    var project = _project.default.fromNameEntriesRepositoryAndDependencies(name, entries, repository, dependencies);
    return project;
}
function loadReleases(projectsDirectoryPath) {
    var releases;
    try {
        var releases1 = _releases.default.fromNothing(), topmostFileNames = topmostFileNamesFromProjectsDirectoryPath(projectsDirectoryPath);
        topmostFileNames.forEach(function(topmostFileName) {
            var release = loadRelease(topmostFileName, projectsDirectoryPath);
            releases1.addRelease(release);
        });
    } catch (error) {
        releases = null;
    }
    return releases;
}
function loadProjects(projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var projects;
    try {
        var projects1 = _projects.default.fromNothing(), topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);
        topmostDirectoryNames.forEach(function(topmostDirectoryName) {
            var project = loadProject(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories);
            projects1.addProject(project);
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
function metaJSONNodeFromMetaJSONFile(metaJSONFile) {
    var content = metaJSONFile.getContent(), tokens = metaJSONLexer.tokenise(content), node = metaJSONParser.parse(tokens), metaJSONNode = node; ///
    return metaJSONNode;
}
function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    var absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath), subEntryNames = readDirectory(absoluteDirectoryPath);
    subEntryNames.forEach(function(subEntryName) {
        var subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories, loadUnrecognisedFilesAndDirectories = !loadOnlyRecognisedFiles;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
            var path = concatenatePaths(relativeDirectoryPath, subEntryName), directory = loadDirectory(path, projectsDirectoryPath);
            if (directory !== null) {
                var directoryPath = path; ///
                if (loadUnrecognisedFilesAndDirectories) {
                    entries.addDirectory(directory);
                }
                entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories); ///
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
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName;
        if (subEntryNameNotHiddenName) {
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
function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    var topmostDirectoryNames;
    var subEntryNames = readDirectory(projectsDirectoryPath);
    topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames, subEntryName) {
        var absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName), subEntryNameHiddenName = (0, _name.isNameHiddenName)(subEntryName), subEntryNameNotHiddenName = !subEntryNameHiddenName, loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;
        if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBta2RpcnAgZnJvbSBcIm1rZGlycFwiO1xyXG5cclxuaW1wb3J0IHsgTWV0YUpTT05MZXhlciwgTWV0YUpTT05QYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcclxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcclxuXHJcbmltcG9ydCBGaWxlIGZyb20gXCIuLi9maWxlXCI7XHJcbmltcG9ydCBGaWxlcyBmcm9tIFwiLi4vZmlsZXNcIjtcclxuaW1wb3J0IEVudHJpZXMgZnJvbSBcIi4uL2VudHJpZXNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL3Byb2plY3RcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgUmVsZWFzZXMgZnJvbSBcIi4uL3JlbGVhc2VzXCI7XHJcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSBcIi4uL2RpcmVjdG9yeVwiO1xyXG5cclxuaW1wb3J0IHsgUEVSSU9EIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpc05hbWVIaWRkZW5OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XHJcbmltcG9ydCB7IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xyXG5pbXBvcnQgeyBtZXRhSlNPTkZpbGVGcm9tRmlsZXMsIHJlYWRtZUZpbGVGcm9tRmlsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVzXCI7XHJcbmltcG9ydCB7IHZlcnNpb25Gcm9tTm9kZSwgcmVwb3NpdG9yeUZyb21Ob2RlLCBkZXBlbmRlbmNpZXNGcm9tTm9kZSB9IGZyb20gXCIuL21ldGFKU09OXCI7XHJcblxyXG5jb25zdCB7IGNvbmNhdGVuYXRlUGF0aHMsIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGggfSA9IHBhdGhVdGlsaXRpZXMsXHJcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgaXNFbnRyeUZpbGUsIHJlYWREaXJlY3RvcnksIGlzRW50cnlEaXJlY3RvcnkgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XHJcblxyXG5jb25zdCBtZXRhSlNPTkxleGVyID0gTWV0YUpTT05MZXhlci5mcm9tTm90aGluZygpLFxyXG4gICAgICBtZXRhSlNPTlBhcnNlciA9IE1ldGFKU09OUGFyc2VyLmZyb21Ob3RoaW5nKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGUocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IGZpbGUgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxyXG4gICAgICAgICAgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICBpZiAoZW50cnlGaWxlKSB7XHJcbiAgICAgIGxldCBjb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVQYXRoKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cclxuXHJcbiAgICAgIGZpbGUgPSBGaWxlLmZyb21QYXRoQW5kQ29udGVudChwYXRoLCBjb250ZW50KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmlsZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGaWxlKGZpbGUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGNvbnN0IHBhdGggPSBmaWxlLmdldFBhdGgoKSxcclxuICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXHJcbiAgICAgICAgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxyXG4gICAgICAgIHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGggPSB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKGFic29sdXRlUGF0aCk7XHJcblxyXG4gIG1rZGlycC5zeW5jKHRvcG1vc3RBYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xyXG5cclxuICB3cml0ZUZpbGUoYWJzb2x1dGVQYXRoLCBjb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlcyhwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tTm90aGluZygpO1xyXG5cclxuICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gbG9hZEZpbGUocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZmlsZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRmlsZXMoZmlsZXMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGZpbGVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XHJcbiAgICBzYXZlRmlsZShmaWxlLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEVudHJpZXModG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxyXG4gICAgICAgIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXHJcblxyXG4gIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIHJlbGF0aXZlRGlyZWN0b3J5UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcyk7XHJcblxyXG4gIHJldHVybiBlbnRyaWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlbGVhc2UodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCA9IFBFUklPRCkge1xyXG4gIGxldCByZWxlYXNlID0gbnVsbDtcclxuXHJcbiAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLCAgLy8vXHJcbiAgICAgICAgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMgPSB0cnVlLFxyXG4gICAgICAgIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMgPSB0cnVlLFxyXG4gICAgICAgIGVudHJpZXMgPSBsb2FkRW50cmllcyh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXHJcbiAgICAgICAgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXHJcbiAgICAgICAgcmVhZG1lRmlsZSA9IHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpLFxyXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XHJcblxyXG4gIGlmICgocmVhZG1lRmlsZSAhPT0gbnVsbCkgJiYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkpIHtcclxuICAgIGNvbnN0IG1ldGFKU09OTm9kZSA9IG1ldGFKU09OTm9kZUZyb21NZXRhSlNPTkZpbGUobWV0YUpTT05GaWxlKTtcclxuXHJcbiAgICBpZiAobWV0YUpTT05Ob2RlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBtZXRhSlNPTk5vZGUsICAvLy9cclxuICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb25Gcm9tTm9kZShub2RlKSxcclxuICAgICAgICAgICAgcmVwb3NpdG9yeSA9IHJlcG9zaXRvcnlGcm9tTm9kZShub2RlKSxcclxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbU5vZGUobm9kZSk7XHJcblxyXG4gICAgICByZWxlYXNlID0gUmVsZWFzZS5mcm9tTmFtZUVudHJpZXNWZXJzaW9uUmVwb3NpdG9yeUFuZERlcGVuZGVuY2llcyhuYW1lLCBlbnRyaWVzLCB2ZXJzaW9uLCByZXBvc2l0b3J5LCBkZXBlbmRlbmNpZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlbGVhc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gIGNvbnN0IG5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZSwgIC8vL1xyXG4gICAgICAgIGVudHJpZXMgPSBsb2FkRW50cmllcyh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBsb2FkT25seVJlY29nbmlzZWRGaWxlcywgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyksXHJcbiAgICAgICAgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCksXHJcbiAgICAgICAgbWV0YUpTT05GaWxlID0gbWV0YUpTT05GaWxlRnJvbUZpbGVzKGZpbGVzKTtcclxuXHJcbiAgbGV0IHJlcG9zaXRvcnkgPSBudWxsLFxyXG4gICAgICBkZXBlbmRlbmNpZXMgPSBbXTtcclxuXHJcbiAgaWYgKG1ldGFKU09ORmlsZSAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgbWV0YUpTT05Ob2RlID0gbWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZShtZXRhSlNPTkZpbGUpLFxyXG4gICAgICAgICAgbm9kZSA9IG1ldGFKU09OTm9kZTtcclxuXHJcbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUZyb21Ob2RlKG5vZGUpO1xyXG4gICAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzRnJvbU5vZGUobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tTmFtZUVudHJpZXNSZXBvc2l0b3J5QW5kRGVwZW5kZW5jaWVzKG5hbWUsIGVudHJpZXMsIHJlcG9zaXRvcnksIGRlcGVuZGVuY2llcyk7XHJcblxyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlbGVhc2VzKHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCByZWxlYXNlcztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlbGVhc2VzID0gUmVsZWFzZXMuZnJvbU5vdGhpbmcoKSxcclxuICAgICAgICAgIHRvcG1vc3RGaWxlTmFtZXMgPSB0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xyXG5cclxuICAgIHRvcG1vc3RGaWxlTmFtZXMuZm9yRWFjaCgodG9wbW9zdEZpbGVOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbGVhc2UgPSBsb2FkUmVsZWFzZSh0b3Btb3N0RmlsZU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gICAgICByZWxlYXNlcy5hZGRSZWxlYXNlKHJlbGVhc2UpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlbGVhc2VzID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiByZWxlYXNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGxvYWRPbmx5UmVjb2duaXNlZEZpbGVzLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgbGV0IHByb2plY3RzO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0cy5mcm9tTm90aGluZygpLFxyXG4gICAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVzID0gdG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aChwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xyXG5cclxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lcy5mb3JFYWNoKCh0b3Btb3N0RGlyZWN0b3J5TmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gbG9hZFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpO1xyXG5cclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBwcm9qZWN0cyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGlyZWN0b3J5KHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCkge1xyXG4gIGxldCBkaXJlY3RvcnkgPSBudWxsO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWJzb2x1dGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHBhdGgpLFxyXG4gICAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XHJcblxyXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XHJcbiAgICAgIGRpcmVjdG9yeSA9IERpcmVjdG9yeS5mcm9tUGF0aChwYXRoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlyZWN0b3J5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXRhSlNPTk5vZGVGcm9tTWV0YUpTT05GaWxlKG1ldGFKU09ORmlsZSkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBtZXRhSlNPTkZpbGUuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgIHRva2VucyA9IG1ldGFKU09OTGV4ZXIudG9rZW5pc2UoY29udGVudCksXHJcbiAgICAgICAgbm9kZSA9IG1ldGFKU09OUGFyc2VyLnBhcnNlKHRva2VucyksXHJcbiAgICAgICAgbWV0YUpTT05Ob2RlID0gbm9kZTsgIC8vL1xyXG5cclxuICByZXR1cm4gbWV0YUpTT05Ob2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRyaWVzRnJvbVJlbGF0aXZlRGlyZWN0b3J5UGF0aChlbnRyaWVzLCByZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpIHtcclxuICBjb25zdCBhYnNvbHV0ZURpcmVjdG9yeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVEaXJlY3RvcnlQYXRoKSxcclxuICAgICAgICBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xyXG5cclxuICBzdWJFbnRyeU5hbWVzLmZvckVhY2goKHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZSxcclxuICAgICAgICAgIGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzID0gIWRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMsXHJcbiAgICAgICAgICBsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3RvcmllcyA9ICFsb2FkT25seVJlY29nbmlzZWRGaWxlcztcclxuXHJcbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSB8fCBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVQYXRocyhyZWxhdGl2ZURpcmVjdG9yeVBhdGgsIHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICAgIGRpcmVjdG9yeSA9IGxvYWREaXJlY3RvcnkocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgICAgIGlmIChkaXJlY3RvcnkgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gcGF0aDsgLy8vXHJcblxyXG4gICAgICAgIGlmIChsb2FkVW5yZWNvZ25pc2VkRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gICAgICAgICAgZW50cmllcy5hZGREaXJlY3RvcnkoZGlyZWN0b3J5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoKGVudHJpZXMsIGRpcmVjdG9yeVBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgbG9hZE9ubHlSZWNvZ25pc2VkRmlsZXMsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpOyAvLy9cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gbG9hZEZpbGUocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbGUgIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aFJlY29nbmlzZWRGaWxlUGF0aCA9IGlzRmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgoZmlsZVBhdGgpLFxyXG4gICAgICAgICAgICAgICAgZmlsZVJlY29nbmlzZWRGaWxlID0gZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGg7ICAvLy9cclxuXHJcbiAgICAgICAgICBpZiAoZmlsZVJlY29nbmlzZWRGaWxlIHx8IGxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuYWRkRmlsZShmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9wbW9zdEZpbGVOYW1lc0Zyb21Qcm9qZWN0c0RpcmVjdG9yeVBhdGgocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XHJcbiAgbGV0IHRvcG1vc3RGaWxlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHRvcG1vc3RGaWxlTmFtZXMgPSBzdWJFbnRyeU5hbWVzLnJlZHVjZSgodG9wbW9zdEZpbGVOYW1lcywgc3ViRW50cnlOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBhYnNvbHV0ZVN1YkVudHJ5UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzdWJFbnRyeU5hbWUpLFxyXG4gICAgICAgICAgc3ViRW50cnlOYW1lSGlkZGVuTmFtZSA9IGlzTmFtZUhpZGRlbk5hbWUoc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUgPSAhc3ViRW50cnlOYW1lSGlkZGVuTmFtZTtcclxuXHJcbiAgICBpZiAoc3ViRW50cnlOYW1lTm90SGlkZGVuTmFtZSkge1xyXG4gICAgICBjb25zdCBzdWJFbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoc3ViRW50cnlGaWxlKSB7XHJcbiAgICAgICAgY29uc3QgdG9wbW9zdEZpbGVOYW1lID0gc3ViRW50cnlOYW1lOyAgLy8vXHJcblxyXG4gICAgICAgIHRvcG1vc3RGaWxlTmFtZXMucHVzaCh0b3Btb3N0RmlsZU5hbWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9wbW9zdEZpbGVOYW1lcztcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiB0b3Btb3N0RmlsZU5hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZXNGcm9tUHJvamVjdHNEaXJlY3RvcnlQYXRoKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgZG9Ob3RMb2FkSGlkZGVuRmlsZXNBbmREaXJlY3Rvcmllcykge1xyXG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XHJcblxyXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lcyA9IHN1YkVudHJ5TmFtZXMucmVkdWNlKCh0b3Btb3N0RGlyZWN0b3J5TmFtZXMsIHN1YkVudHJ5TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgYWJzb2x1dGVTdWJFbnRyeVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc3ViRW50cnlOYW1lKSxcclxuICAgICAgICAgIHN1YkVudHJ5TmFtZUhpZGRlbk5hbWUgPSBpc05hbWVIaWRkZW5OYW1lKHN1YkVudHJ5TmFtZSksXHJcbiAgICAgICAgICBzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lID0gIXN1YkVudHJ5TmFtZUhpZGRlbk5hbWUsXHJcbiAgICAgICAgICBsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyA9ICFkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzO1xyXG5cclxuICAgIGlmIChzdWJFbnRyeU5hbWVOb3RIaWRkZW5OYW1lIHx8IGxvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XHJcbiAgICAgIGNvbnN0IHN1YkVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVN1YkVudHJ5UGF0aCk7XHJcblxyXG4gICAgICBpZiAoc3ViRW50cnlEaXJlY3RvcnkpIHtcclxuICAgICAgICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHN1YkVudHJ5TmFtZTsgIC8vL1xyXG5cclxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZXMucHVzaCh0b3Btb3N0RGlyZWN0b3J5TmFtZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZXM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJsb2FkRmlsZSIsInNhdmVGaWxlIiwibG9hZEZpbGVzIiwic2F2ZUZpbGVzIiwibG9hZEVudHJpZXMiLCJsb2FkUmVsZWFzZSIsImxvYWRQcm9qZWN0IiwibG9hZFJlbGVhc2VzIiwibG9hZFByb2plY3RzIiwibG9hZERpcmVjdG9yeSIsImNvbmNhdGVuYXRlUGF0aHMiLCJwYXRoVXRpbGl0aWVzIiwidG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsIndyaXRlRmlsZSIsImlzRW50cnlGaWxlIiwicmVhZERpcmVjdG9yeSIsImlzRW50cnlEaXJlY3RvcnkiLCJtZXRhSlNPTkxleGVyIiwiTWV0YUpTT05MZXhlciIsImZyb21Ob3RoaW5nIiwibWV0YUpTT05QYXJzZXIiLCJNZXRhSlNPTlBhcnNlciIsInBhdGgiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJmaWxlIiwiYWJzb2x1dGVQYXRoIiwiZW50cnlGaWxlIiwiY29udGVudCIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsIkZpbGUiLCJmcm9tUGF0aEFuZENvbnRlbnQiLCJlcnJvciIsImdldFBhdGgiLCJnZXRDb250ZW50IiwidG9wbW9zdEFic29sdXRlRGlyZWN0b3J5UGF0aCIsIm1rZGlycCIsInN5bmMiLCJwYXRocyIsImZpbGVzIiwiRmlsZXMiLCJmb3JFYWNoIiwiYWRkRmlsZSIsImZvckVhY2hGaWxlIiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJsb2FkT25seVJlY29nbmlzZWRGaWxlcyIsImRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMiLCJlbnRyaWVzIiwiRW50cmllcyIsInJlbGF0aXZlRGlyZWN0b3J5UGF0aCIsImVudHJpZXNGcm9tUmVsYXRpdmVEaXJlY3RvcnlQYXRoIiwiUEVSSU9EIiwicmVsZWFzZSIsIm5hbWUiLCJnZXRGaWxlcyIsInJlYWRtZUZpbGUiLCJyZWFkbWVGaWxlRnJvbUZpbGVzIiwibWV0YUpTT05GaWxlIiwibWV0YUpTT05GaWxlRnJvbUZpbGVzIiwibWV0YUpTT05Ob2RlIiwibWV0YUpTT05Ob2RlRnJvbU1ldGFKU09ORmlsZSIsIm5vZGUiLCJ2ZXJzaW9uIiwidmVyc2lvbkZyb21Ob2RlIiwicmVwb3NpdG9yeSIsInJlcG9zaXRvcnlGcm9tTm9kZSIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llc0Zyb21Ob2RlIiwiUmVsZWFzZSIsImZyb21OYW1lRW50cmllc1ZlcnNpb25SZXBvc2l0b3J5QW5kRGVwZW5kZW5jaWVzIiwicHJvamVjdCIsIlByb2plY3QiLCJmcm9tTmFtZUVudHJpZXNSZXBvc2l0b3J5QW5kRGVwZW5kZW5jaWVzIiwicmVsZWFzZXMiLCJSZWxlYXNlcyIsInRvcG1vc3RGaWxlTmFtZXMiLCJ0b3Btb3N0RmlsZU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsInRvcG1vc3RGaWxlTmFtZSIsImFkZFJlbGVhc2UiLCJwcm9qZWN0cyIsIlByb2plY3RzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzIiwidG9wbW9zdERpcmVjdG9yeU5hbWVzRnJvbVByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFkZFByb2plY3QiLCJkaXJlY3RvcnkiLCJlbnRyeURpcmVjdG9yeSIsIkRpcmVjdG9yeSIsImZyb21QYXRoIiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZSIsImFic29sdXRlRGlyZWN0b3J5UGF0aCIsInN1YkVudHJ5TmFtZXMiLCJzdWJFbnRyeU5hbWUiLCJzdWJFbnRyeU5hbWVIaWRkZW5OYW1lIiwiaXNOYW1lSGlkZGVuTmFtZSIsInN1YkVudHJ5TmFtZU5vdEhpZGRlbk5hbWUiLCJsb2FkSGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImxvYWRVbnJlY29nbmlzZWRGaWxlc0FuZERpcmVjdG9yaWVzIiwiZGlyZWN0b3J5UGF0aCIsImFkZERpcmVjdG9yeSIsImZpbGVQYXRoIiwiZmlsZVBhdGhSZWNvZ25pc2VkRmlsZVBhdGgiLCJpc0ZpbGVQYXRoUmVjb2duaXNlZEZpbGVQYXRoIiwiZmlsZVJlY29nbmlzZWRGaWxlIiwicmVkdWNlIiwiYWJzb2x1dGVTdWJFbnRyeVBhdGgiLCJzdWJFbnRyeUZpbGUiLCJwdXNoIiwic3ViRW50cnlEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTRCZ0JBLFFBQVE7ZUFBUkE7O0lBcUJBQyxRQUFRO2VB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