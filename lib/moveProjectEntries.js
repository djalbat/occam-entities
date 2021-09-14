"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = moveProjectEntries;
var _fsExtra = require("fs-extra");
var _necessary = require("necessary");
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
    (0, _fsExtra).move(absoluteSourcePath, absoluteTargetPath, function(error) {
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
        (0, _fsExtra).move(absoluteSourcePath, absoluteTargetPath, function(error) {
            var success = !error; ///
            if (success) {
                callback(targetPath);
            } else {
                var message = error.message;
                if (message !== _constants.DEST_ALREADY_EXISTS_MESSAGE) {
                    var targetPath2 = sourcePath;
                    callback(targetPath2);
                } else {
                    (0, _fsExtra).remove(absoluteSourcePath, function(error1) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb3ZlUHJvamVjdEVudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1vdmUsIHJlbW92ZSB9IGZyb20gXCJmcy1leHRyYVwiO1xuaW1wb3J0IHsgcGF0aFV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzRm9yRWFjaCB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoTWFwc1wiO1xuaW1wb3J0IHsgREVTVF9BTFJFQURZX0VYSVNUU19NRVNTQUdFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgY2hlY2tFbnRyeUV4aXN0cywgaXNFbnRyeURpcmVjdG9yeSwgaXNEaXJlY3RvcnlFbXB0eSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW92ZVByb2plY3RFbnRyaWVzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBwYXRoTWFwcyB9ID0ganNvbixcblx0XHQgICAgdGFyZ2V0UGF0aHMgPSBbXTtcblxuICBhc3luY2hyb25vdXNGb3JFYWNoKFxuICAgIHBhdGhNYXBzLFxuICAgIChzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBkaXJlY3RvcnksIG5leHQsIGRvbmUsIGluZGV4KSA9PiB7XG4gICAgICBtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCAodGFyZ2V0UGF0aCkgPT4ge1xuICAgICAgICB0YXJnZXRQYXRocy5wdXNoKHRhcmdldFBhdGgpO1xuXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgIFx0Y29uc3QganNvbiA9IHRhcmdldFBhdGhzOyAvLy9cblxuICAgICAgY2FsbGJhY2soanNvbik7XG4gICAgfVxuICApO1xufVxuXG5mdW5jdGlvbiBtb3ZlRW50cnkoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBpZiAodGFyZ2V0UGF0aCA9PT0gbnVsbCkge1xuICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzb3VyY2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGFic29sdXRlU291cmNlUGF0aCk7XG5cbiAgICAgIGlmICghZW50cnlFeGlzdHMpIHtcbiAgICAgICAgdGFyZ2V0UGF0aCA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVTb3VyY2VQYXRoKTtcblxuICAgICAgICBlbnRyeURpcmVjdG9yeSA/XG4gICAgICAgICAgbW92ZURpcmVjdG9yeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKSA6XG4gICAgICAgICAgICBtb3ZlRmlsZShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUZpbGUoc291cmNlUGF0aCwgdGFyZ2V0UGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBhYnNvbHV0ZVNvdXJjZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlUGF0aCksXG4gICAgICAgIGFic29sdXRlVGFyZ2V0UGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocHJvamVjdHNEaXJlY3RvcnlQYXRoLCB0YXJnZXRQYXRoKTtcblxuICBtb3ZlKGFic29sdXRlU291cmNlUGF0aCwgYWJzb2x1dGVUYXJnZXRQYXRoLCAoZXJyb3IpID0+IHtcbiAgICBjb25zdCBzdWNjZXNzID0gIWVycm9yOyAvLy9cbiAgICBcbiAgICB0YXJnZXRQYXRoID0gc3VjY2VzcyA/XG4gICAgICAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA6XG4gICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoO1xuXG4gICAgY2FsbGJhY2sodGFyZ2V0UGF0aCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3ZlRGlyZWN0b3J5KHNvdXJjZVBhdGgsIHRhcmdldFBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCwgY2FsbGJhY2spIHtcbiAgY29uc3QgYWJzb2x1dGVTb3VyY2VQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIHNvdXJjZVBhdGgpLFxuICAgICAgICBhYnNvbHV0ZVRhcmdldFBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgdGFyZ2V0UGF0aCksXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZVNvdXJjZVBhdGgpO1xuXG4gIGlmICghZGlyZWN0b3J5RW1wdHkpIHtcbiAgICBjb25zdCB0YXJnZXRQYXRoID0gc291cmNlUGF0aDtcblxuICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICB9IGVsc2Uge1xuICAgIG1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCBhYnNvbHV0ZVRhcmdldFBhdGgsIChlcnJvcikgPT4ge1xuICAgICAgY29uc3Qgc3VjY2VzcyA9ICFlcnJvcjsgLy8vXG5cbiAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgICBpZiAobWVzc2FnZSAhPT0gREVTVF9BTFJFQURZX0VYSVNUU19NRVNTQUdFKSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IHNvdXJjZVBhdGg7XG5cbiAgICAgICAgICBjYWxsYmFjayh0YXJnZXRQYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmUoYWJzb2x1dGVTb3VyY2VQYXRoLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAhZXJyb3I7IC8vL1xuXG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0UGF0aCA9IHNvdXJjZVBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldFBhdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQVdZLGtCQUFrQjtBQVRiLEdBQVUsQ0FBVixRQUFVO0FBQ1ksR0FBVyxDQUFYLFVBQVc7QUFFMUIsR0FBc0IsQ0FBdEIsU0FBc0I7QUFDZCxHQUFhLENBQWIsVUFBYTtBQUV6RCxHQUFLLENBQUcsZ0JBQWdCLEdBTDJCLFVBQVcsZUFLdEQsZ0JBQWdCLEVBQ2hCLGdCQUFnQixHQU4yQixVQUFXLHFCQU10RCxnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FOUyxVQUFXLHFCQU1wQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsR0FOVCxVQUFXLHFCQU1sQixnQkFBZ0I7U0FFcEMsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFF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