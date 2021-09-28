"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = moveProjectEntries;
var _necessary = require("necessary");
var _fileSystem = require("./utilities/fileSystem");
var _pathMaps = require("./utilities/pathMaps");
var _constants = require("./constants");
var concatenatePaths = _necessary.pathUtilities.concatenatePaths, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists, isEntryDirectory = _necessary.fileSystemUtilities.isEntryDirectory, isDirectoryEmpty = _necessary.fileSystemUtilities.isDirectoryEmpty;
function moveProjectEntries(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps, targetPaths = [];
    (0, _pathMaps).asynchronousForEach(pathMaps, function(sourcePath, targetPath, directory, next, done, index) {
        moveEntry(sourcePath, targetPath, projectsDirectoryPath, function(targetPath1) {
            targetPaths.push(targetPath1);
            next();
        });
    }, function() {
        var json1 = targetPaths; ///
        callback(json1);
    });
}
function moveEntry(sourcePath, targetPath, projectsDirectoryPath, callback) {
    if (targetPath === null) {
        callback(targetPath);
    } else {
        if (sourcePath === targetPath) {
            callback(targetPath);
        } else {
            var absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath), entryExists = checkEntryExists(absoluteSourcePath);
            if (!entryExists) {
                targetPath = null;
                callback(targetPath);
            } else {
                var entryDirectory = isEntryDirectory(absoluteSourcePath);
                entryDirectory ? moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) : moveFile(sourcePath, targetPath, projectsDirectoryPath, callback);
            }
        }
    }
}
function moveFile(sourcePath, targetPath, projectsDirectoryPath, callback) {
    var absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath), absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath);
    (0, _fileSystem).move(absoluteSourcePath, absoluteTargetPath, function(error) {
        var success = !error; ///
        targetPath = success ? targetPath : sourcePath;
        callback(targetPath);
    });
}
function moveDirectory(sourcePath, targetPath, projectsDirectoryPath, callback) {
    var absoluteSourcePath = concatenatePaths(projectsDirectoryPath, sourcePath), absoluteTargetPath = concatenatePaths(projectsDirectoryPath, targetPath), directoryEmpty = isDirectoryEmpty(absoluteSourcePath);
    if (!directoryEmpty) {
        var targetPath1 = sourcePath;
        callback(targetPath1);
    } else {
        (0, _fileSystem).move(absoluteSourcePath, absoluteTargetPath, function(error) {
            var success = !error; ///
            if (success) {
                callback(targetPath);
            } else {
                var message = error.message;
                if (message !== _constants.DEST_ALREADY_EXISTS_MESSAGE) {
                    var targetPath2 = sourcePath;
                    callback(targetPath2);
                } else {
                    (0, _fileSystem).remove(absoluteSourcePath, function(error1) {
                        var success1 = !error1; ///
                        if (!success1) {
                            targetPath = sourcePath;
                        }
                        callback(targetPath);
                    });
                }
            }
        });
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb3ZlUHJvamVjdEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhdGhVdGlsaXRpZXMsIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IG1vdmUsIHJlbW92ZSB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNGb3JFYWNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhNYXBzXCI7XG5pbXBvcnQgeyBERVNUX0FMUkVBRFlfRVhJU1RTX01FU1NBR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBjaGVja0VudHJ5RXhpc3RzLCBpc0VudHJ5RGlyZWN0b3J5LCBpc0RpcmVjdG9yeUVtcHR5IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZlUHJvamVjdEVudHJpZXMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uLFxuXHRcdCAgICB0YXJnZXRQYXRocyA9IFtdO1xuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2goXG4gICAgcGF0aE1hcHMsXG4gICAgKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIGRpcmVjdG9yeSwgbmV4dCwgZG9uZSwgaW5kZXgpID0+IHtcbiAgICAgIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsICh0YXJnZXRQYXRoKSA9PiB7XG4gICAgICAgIHRhcmdldFBhdGhzLnB1c2godGFyZ2V0UGF0aCk7XG5cbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAoKSA9PiB7XG4gICAgXHRjb25zdCBqc29uID0gdGFyZ2V0UGF0aHM7IC8vL1xuXG4gICAgICBjYWxsYmFjayhqc29uKTtcbiAgICB9XG4gICk7XG59XG5cbmZ1bmN0aW9uIG1vdmVFbnRyeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGlmICh0YXJnZXRQYXRoID09PSBudWxsKSB7XG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNvdXJjZVBhdGggPT09IHRhcmdldFBhdGgpIHtcbiAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgICAgaWYgKCFlbnRyeUV4aXN0cykge1xuICAgICAgICB0YXJnZXRQYXRoID0gbnVsbDtcblxuICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID9cbiAgICAgICAgICBtb3ZlRGlyZWN0b3J5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIDpcbiAgICAgICAgICAgIG1vdmVGaWxlKHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlRmlsZShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFic29sdXRlU291cmNlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBzb3VyY2VQYXRoKSxcbiAgICAgICAgYWJzb2x1dGVUYXJnZXRQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHRhcmdldFBhdGgpO1xuXG4gIG1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBhYnNvbHV0ZVRhcmdldFBhdGgsIChlcnJvcikgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAhZXJyb3I7IC8vL1xuICAgIFxuICAgIHRhcmdldFBhdGggPSBzdWNjZXNzID9cbiAgICAgICAgICAgICAgICAgICB0YXJnZXRQYXRoIDpcbiAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVBhdGg7XG5cbiAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVEaXJlY3Rvcnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgIGFic29sdXRlVGFyZ2V0UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0YXJnZXRQYXRoKSxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgaWYgKCFkaXJlY3RvcnlFbXB0eSkge1xuICAgIGNvbnN0IHRhcmdldFBhdGggPSBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIGFic29sdXRlVGFyZ2V0UGF0aCwgKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBzdWNjZXNzID0gIWVycm9yOyAvLy9cblxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBERVNUX0FMUkVBRFlfRVhJU1RTX01FU1NBR0UpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gc291cmNlUGF0aDtcblxuICAgICAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbW92ZShhYnNvbHV0ZVNvdXJjZVBhdGgsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICFlcnJvcjsgLy8vXG5cbiAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0YXJnZXRQYXRoID0gc291cmNlUGF0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBV1ksa0JBQWtCO0FBVFMsR0FBVyxDQUFYLFVBQVc7QUFFakMsR0FBd0IsQ0FBeEIsV0FBd0I7QUFDakIsR0FBc0IsQ0FBdEIsU0FBc0I7QUFDZCxHQUFhLENBQWIsVUFBYTtBQUV6RCxHQUFLLENBQUcsZ0JBQWdCLEdBTjJCLFVBQVcsZUFNdEQsZ0JBQWdCLEVBQ2hCLGdCQUFnQixHQVAyQixVQUFXLHFCQU90RCxnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FQUyxVQUFXLHFCQU9wQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FQVCxVQUFXLHFCQU9sQixnQkFBZ0I7U0FFcEMsa0JBQWtCLENBQUMscUJB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