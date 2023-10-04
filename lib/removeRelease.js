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
    var targetEntryPaths = pathMaps.forEach(function(pathMap) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1vdmVSZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXRoVXRpbGl0aWVzLCBhcnJheVV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgY2hlY2tFbnRyeUV4aXN0cywgcmVtb3ZlRW50cnk6IHJlbW92ZUVudHJ5RXggfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVJlbGVhc2UocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHBhdGhNYXBzIH0gPSBqc29uLFxuICAgICAgICBsYXN0UGF0aE1hcCA9IGxhc3QocGF0aE1hcHMpLFxuICAgICAgICBwYXRoTWFwID0gbGFzdFBhdGhNYXAsICAvLy9cbiAgICAgICAgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBjb25zdCBzb3VyY2VGaWxlUGF0aCA9IHNvdXJjZUVudHJ5UGF0aCwgLy8vXG4gICAgICAgIGFic29sdXRlU291cmNlRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwgc291cmNlRmlsZVBhdGgpLFxuICAgICAgICBzb3VyY2VGaWxlRXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhhYnNvbHV0ZVNvdXJjZUZpbGVQYXRoKTtcblxuICBpZiAoIXNvdXJjZUZpbGVFeGlzdHMpIHtcbiAgICBlcnJvciA9IGBUaGUgJyR7c291cmNlRW50cnlQYXRofScgcGFja2FnZSBkb2VzIG5vdCBleGlzdC5gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVudHJ5UGF0aCA9IGFic29sdXRlU291cmNlRmlsZVBhdGg7IC8vL1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlbW92ZUVudHJ5RXgoZW50cnlQYXRoKTtcbiAgICB9IGNhdGNoIChuYXRpdmVFcnJvcikge1xuICAgICAgZXJyb3IgPSBuYXRpdmVFcnJvcjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhcmdldEVudHJ5UGF0aHMgPSBwYXRoTWFwcy5mb3JFYWNoKChwYXRoTWFwKSA9PiB7XG4gICAgbGV0IHRhcmdldEVudHJ5UGF0aDtcblxuICAgIGlmIChlcnJvciA9PT0gbnVsbCkge1xuICAgICAgdGFyZ2V0RW50cnlQYXRoID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRFbnRyeVBhdGg7XG4gIH0pXG5cbiAganNvbiA9IHsgIC8vL1xuICAgIHRhcmdldEVudHJ5UGF0aHNcbiAgfTtcblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJyZW1vdmVSZWxlYXNlIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiY29uY2F0ZW5hdGVQYXRocyIsInBhdGhVdGlsaXRpZXMiLCJjaGVja0VudHJ5RXhpc3RzIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInJlbW92ZUVudHJ5IiwicmVtb3ZlRW50cnlFeCIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsInBhdGhNYXBzIiwibGFzdFBhdGhNYXAiLCJwYXRoTWFwIiwic291cmNlRW50cnlQYXRoIiwiZXJyb3IiLCJzb3VyY2VGaWxlUGF0aCIsImFic29sdXRlU291cmNlRmlsZVBhdGgiLCJzb3VyY2VGaWxlRXhpc3RzIiwiZW50cnlQYXRoIiwibmF0aXZlRXJyb3IiLCJ0YXJnZXRFbnRyeVBhdGhzIiwiZm9yRWFjaCIsInRhcmdldEVudHJ5UGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUF3QkE7Ozt5QkFOMkM7QUFFbkUsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxtQkFBcUJDLHdCQUFhLENBQWxDRCxrQkFDQUUsbUJBQWlEQyw4QkFBbUIsQ0FBcEVELGtCQUFrQkUsQUFBYUMsZ0JBQWtCRiw4QkFBbUIsQ0FBbERDO0FBRVgsU0FBU1AsY0FBY1MscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUN6RSxJQUFNLEFBQUVDLFdBQWFGLEtBQWJFLFVBQ0ZDLGNBQWNaLEtBQUtXLFdBQ25CRSxVQUFVRCxhQUNWLEFBQUVFLGtCQUFvQkQsUUFBcEJDO0lBRVIsSUFBSUMsUUFBUTtJQUVaLElBQU1DLGlCQUFpQkYsaUJBQ2pCRyx5QkFBeUJmLGlCQUFpQk0sdUJBQXVCUSxpQkFDakVFLG1CQUFtQmQsaUJBQWlCYTtJQUUxQyxJQUFJLENBQUNDLGtCQUFrQjtRQUNyQkgsUUFBUSxBQUFDLFFBQXVCLE9BQWhCRCxpQkFBZ0I7SUFDbEMsT0FBTztRQUNMLElBQU1LLFlBQVlGLHdCQUF3QixHQUFHO1FBRTdDLElBQUk7WUFDRlYsY0FBY1k7UUFDaEIsRUFBRSxPQUFPQyxhQUFhO1lBQ3BCTCxRQUFRSyxhQUFjLEdBQUc7UUFDM0I7SUFDRjtJQUVBLElBQU1DLG1CQUFtQlYsU0FBU1csT0FBTyxDQUFDLFNBQUNUO1FBQ3pDLElBQUlVO1FBRUosSUFBSVIsVUFBVSxNQUFNO1lBQ2xCUSxrQkFBa0I7UUFDcEIsT0FBTztZQUNMLElBQU0sQUFBRVQsa0JBQW9CRCxRQUFwQkM7WUFFUlMsa0JBQWtCVCxpQkFBa0IsR0FBRztRQUN6QztRQUVBLE9BQU9TO0lBQ1Q7SUFFQWQsT0FBTztRQUNMWSxrQkFBQUE7SUFDRjtJQUVBWCxTQUFTRDtBQUNYIn0=