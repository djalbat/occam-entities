"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return removeRelease;
    }
});
var _necessary = require("necessary");
var last = _necessary.arrayUtilities.last, concatenatePaths = _necessary.pathUtilities.concatenatePaths, checkEntryExists = _necessary.fileSystemUtilities.checkEntryExists, removeEntryEx = _necessary.fileSystemUtilities.removeEntry;
function removeRelease(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps, lastPathMap = last(pathMaps), pathMap = lastPathMap, sourceEntryPath = pathMap.sourceEntryPath;
    var error = null;
    var sourceFilePath = sourceEntryPath, absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath), sourceFileExists = checkEntryExists(absoluteSourceFilePath);
    if (!sourceFileExists) {
        error = "The '".concat(sourceEntryPath, "' package does not exist.");
    } else {
        var entryPath = absoluteSourceFilePath; ///
        try {
            removeEntryEx(entryPath);
        } catch (nativeError) {
            error = nativeError; ///
        }
    }
    var targetEntryPaths = pathMaps.map(function(pathMap) {
        var targetEntryPath;
        if (error === null) {
            targetEntryPath = null;
        } else {
            var sourceEntryPath = pathMap.sourceEntryPath;
            targetEntryPath = sourceEntryPath; ///
        }
        return targetEntryPath;
    });
    json = {
        targetEntryPaths: targetEntryPaths
    };
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVSZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgY2hlY2tFbnRyeUV4aXN0cywgcmVtb3ZlRW50cnk6IHJlbW92ZUVudHJ5RXggfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVJlbGVhc2UocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uLFxuICAgICAgICBsYXN0UGF0aE1hcCA9IGxhc3QocGF0aE1hcHMpLFxuICAgICAgICBwYXRoTWFwID0gbGFzdFBhdGhNYXAsICAvLy9cbiAgICAgICAgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aCwgLy8vXG4gICAgICAgIGFic29sdXRlU291cmNlRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlRmlsZVBhdGgpLFxuICAgICAgICBzb3VyY2VGaWxlRXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhhYnNvbHV0ZVNvdXJjZUZpbGVQYXRoKTtcblxuICBpZiAoIXNvdXJjZUZpbGVFeGlzdHMpIHtcbiAgICBlcnJvciA9IGBUaGUgJyR7c291cmNlRW50cnlQYXRofScgcGFja2FnZSBkb2VzIG5vdCBleGlzdC5gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVudHJ5UGF0aCA9IGFic29sdXRlU291cmNlRmlsZVBhdGg7IC8vL1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbW92ZUVudHJ5RXgoZW50cnlQYXRoKTtcbiAgICB9IGNhdGNoIChuYXRpdmVFcnJvcikge1xuICAgICAgZXJyb3IgPSBuYXRpdmVFcnJvcjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhcmdldEVudHJ5UGF0aHMgPSBwYXRoTWFwcy5tYXAoKHBhdGhNYXApID0+IHtcbiAgICBsZXQgdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgaWYgKGVycm9yID09PSBudWxsKSB7XG4gICAgICB0YXJnZXRFbnRyeVBhdGggPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHNvdXJjZUVudHJ5UGF0aCB9ID0gcGF0aE1hcDtcblxuICAgICAgdGFyZ2V0RW50cnlQYXRoID0gc291cmNlRW50cnlQYXRoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldEVudHJ5UGF0aDtcbiAgfSlcblxuICBqc29uID0geyAgLy8vXG4gICAgdGFyZ2V0RW50cnlQYXRoc1xuICB9O1xuXG4gIGNhbGxiYWNrKGpzb24pO1xufVxuIl0sIm5hbWVzIjpbInJlbW92ZVJlbGVhc2UiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJjb25jYXRlbmF0ZVBhdGhzIiwicGF0aFV0aWxpdGllcyIsImNoZWNrRW50cnlFeGlzdHMiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVtb3ZlRW50cnkiLCJyZW1vdmVFbnRyeUV4IiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwicGF0aE1hcHMiLCJsYXN0UGF0aE1hcCIsInBhdGhNYXAiLCJzb3VyY2VFbnRyeVBhdGgiLCJlcnJvciIsInNvdXJjZUZpbGVQYXRoIiwiYWJzb2x1dGVTb3VyY2VGaWxlUGF0aCIsInNvdXJjZUZpbGVFeGlzdHMiLCJlbnRyeVBhdGgiLCJuYXRpdmVFcnJvciIsInRhcmdldEVudHJ5UGF0aHMiLCJtYXAiLCJ0YXJnZXRFbnRyeVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7eUJBTjJDO0FBRW5FLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsbUJBQXFCQyx3QkFBYSxDQUFsQ0Qsa0JBQ0FFLG1CQUFpREMsOEJBQW1CLENBQXBFRCxrQkFBa0JFLEFBQWFDLGdCQUFrQkYsOEJBQW1CLENBQWxEQztBQUVYLFNBQVNQLGNBQWNTLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDekUsSUFBTSxBQUFFQyxXQUFhRixLQUFiRSxVQUNGQyxjQUFjWixLQUFLVyxXQUNuQkUsVUFBVUQsYUFDVixBQUFFRSxrQkFBb0JELFFBQXBCQztJQUVSLElBQUlDLFFBQVE7SUFFWixJQUFNQyxpQkFBaUJGLGlCQUNqQkcseUJBQXlCZixpQkFBaUJNLHVCQUF1QlEsaUJBQ2pFRSxtQkFBbUJkLGlCQUFpQmE7SUFFMUMsSUFBSSxDQUFDQyxrQkFBa0I7UUFDckJILFFBQVEsQUFBQyxRQUF1QixPQUFoQkQsaUJBQWdCO0lBQ2xDLE9BQU87UUFDTCxJQUFNSyxZQUFZRix3QkFBd0IsR0FBRztRQUU3QyxJQUFJO1lBQ0ZWLGNBQWNZO1FBQ2hCLEVBQUUsT0FBT0MsYUFBYTtZQUNwQkwsUUFBUUssYUFBYyxHQUFHO1FBQzNCO0lBQ0Y7SUFFQSxJQUFNQyxtQkFBbUJWLFNBQVNXLEdBQUcsQ0FBQyxTQUFDVDtRQUNyQyxJQUFJVTtRQUVKLElBQUlSLFVBQVUsTUFBTTtZQUNsQlEsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTCxJQUFNLEFBQUVULGtCQUFvQkQsUUFBcEJDO1lBRVJTLGtCQUFrQlQsaUJBQWtCLEdBQUc7UUFDekM7UUFFQSxPQUFPUztJQUNUO0lBRUFkLE9BQU87UUFDTFksa0JBQUFBO0lBQ0Y7SUFFQVgsU0FBU0Q7QUFDWCJ9