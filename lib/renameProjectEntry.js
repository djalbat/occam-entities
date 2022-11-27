"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return renameProjectEntry;
    }
});
var _necessary = require("necessary");
var _moveProjectEntries = require("./moveProjectEntries");
var last = _necessary.arrayUtilities.last;
function renameProjectEntry(projectsDirectoryPath, json, callback) {
    var pathMaps = json.pathMaps, lastPathMap = last(pathMaps), pathMap = lastPathMap, sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath;
    (0, _moveProjectEntries.moveEntryOperation)(sourceEntryPath, targetEntryPath, projectsDirectoryPath, function(sourceEntryPath, targetEntryPath) {
        var sourceEntryPaths = pathMaps.map(function(pathMap) {
            if (sourceEntryPath !== null) {
                sourceEntryPath = pathMap.sourceEntryPath;
            }
            return sourceEntryPath;
        }), targetEntryPaths = pathMaps.map(function(pathMap) {
            if (targetEntryPath !== null) {
                targetEntryPath = pathMap.targetEntryPath;
            }
            return targetEntryPath;
        }), _$json = {
            sourceEntryPaths: sourceEntryPaths,
            targetEntryPaths: targetEntryPaths
        };
        callback(_$json);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5hbWVQcm9qZWN0RW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtb3ZlRW50cnlPcGVyYXRpb24gfSBmcm9tIFwiLi9tb3ZlUHJvamVjdEVudHJpZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuYW1lUHJvamVjdEVudHJ5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBwYXRoTWFwcyB9ID0ganNvbixcbiAgICAgICAgbGFzdFBhdGhNYXAgPSBsYXN0KHBhdGhNYXBzKSxcbiAgICAgICAgcGF0aE1hcCA9IGxhc3RQYXRoTWFwLCAgLy8vXG4gICAgICAgIHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgbW92ZUVudHJ5T3BlcmF0aW9uKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkgPT4ge1xuICAgIGNvbnN0IHNvdXJjZUVudHJ5UGF0aHMgPSBwYXRoTWFwcy5tYXAoKHBhdGhNYXApID0+IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2VFbnRyeVBhdGggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgKHsgc291cmNlRW50cnlQYXRoIH0gPSBwYXRoTWFwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUVudHJ5UGF0aDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YXJnZXRFbnRyeVBhdGhzID0gcGF0aE1hcHMubWFwKChwYXRoTWFwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RW50cnlQYXRoICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICh7IHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRFbnRyeVBhdGg7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHNvdXJjZUVudHJ5UGF0aHMsXG4gICAgICAgICAgICB0YXJnZXRFbnRyeVBhdGhzXG4gICAgICAgICAgfTtcblxuICAgIGNhbGxiYWNrKGpzb24pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZW5hbWVQcm9qZWN0RW50cnkiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJwYXRoTWFwcyIsImxhc3RQYXRoTWFwIiwicGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm1vdmVFbnRyeU9wZXJhdGlvbiIsInNvdXJjZUVudHJ5UGF0aHMiLCJtYXAiLCJ0YXJnZXRFbnRyeVBhdGhzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O3lCQU5PO2tDQUVJO0FBRW5DLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sU0FBU0QsbUJBQW1CRyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDaEYsSUFBTSxBQUFFQyxXQUFhRixLQUFiRSxVQUNGQyxjQUFjTixLQUFLSyxXQUNuQkUsVUFBVUQsYUFDUkUsa0JBQXFDRCxRQUFyQ0MsaUJBQWlCQyxrQkFBb0JGLFFBQXBCRTtJQUV6QkMsSUFBQUEsc0NBQWtCLEVBQUNGLGlCQUFpQkMsaUJBQWlCUCx1QkFBdUIsU0FBQ00saUJBQWlCQyxpQkFBb0I7UUFDaEgsSUFBTUUsbUJBQW1CTixTQUFTTyxHQUFHLENBQUMsU0FBQ0wsU0FBWTtZQUMzQyxJQUFJQyxvQkFBb0IsSUFBSSxFQUFFO2dCQUN6QkEsa0JBQW9CRCxRQUFwQkM7WUFDTCxDQUFDO1lBRUQsT0FBT0E7UUFDVCxJQUNBSyxtQkFBbUJSLFNBQVNPLEdBQUcsQ0FBQyxTQUFDTCxTQUFZO1lBQzNDLElBQUlFLG9CQUFvQixJQUFJLEVBQUU7Z0JBQ3pCQSxrQkFBb0JGLFFBQXBCRTtZQUNMLENBQUM7WUFFRCxPQUFPQTtRQUNULElBQ0FOLFNBQU87WUFDTFEsa0JBQUFBO1lBQ0FFLGtCQUFBQTtRQUNGO1FBRU5ULFNBQVNEO0lBQ1g7QUFDRiJ9