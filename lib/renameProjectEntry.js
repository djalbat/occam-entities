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
        var entryMissing = sourceEntryPath === null, entryUnmoved = sourceEntryPath === targetEntryPath, sourceEntryPaths = [], targetEntryPaths = [];
        pathMaps.forEach(function(pathMap) {
            var _$sourceEntryPath, _$targetEntryPath;
            if (false) {
            ///
            } else if (entryMissing) {
                _$sourceEntryPath = null;
                _$targetEntryPath = pathMap.targetEntryPath;
            } else if (entryUnmoved) {
                _$sourceEntryPath = pathMap.sourceEntryPath;
                _$targetEntryPath = _$sourceEntryPath; ///
            } else {
                var ref;
                ref = pathMap, _$sourceEntryPath = ref.sourceEntryPath, _$targetEntryPath = ref.targetEntryPath, ref;
            }
            sourceEntryPaths.push(_$sourceEntryPath);
            targetEntryPaths.push(_$targetEntryPath);
        });
        var _$json = {
            sourceEntryPaths: sourceEntryPaths,
            targetEntryPaths: targetEntryPaths
        };
        callback(_$json);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5hbWVQcm9qZWN0RW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtb3ZlRW50cnlPcGVyYXRpb24gfSBmcm9tIFwiLi9tb3ZlUHJvamVjdEVudHJpZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuYW1lUHJvamVjdEVudHJ5KHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBwYXRoTWFwcyB9ID0ganNvbixcbiAgICAgICAgbGFzdFBhdGhNYXAgPSBsYXN0KHBhdGhNYXBzKSxcbiAgICAgICAgcGF0aE1hcCA9IGxhc3RQYXRoTWFwLCAgLy8vXG4gICAgICAgIHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXA7XG5cbiAgbW92ZUVudHJ5T3BlcmF0aW9uKHNvdXJjZUVudHJ5UGF0aCwgdGFyZ2V0RW50cnlQYXRoLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIChzb3VyY2VFbnRyeVBhdGgsIHRhcmdldEVudHJ5UGF0aCkgPT4ge1xuICAgIGNvbnN0IGVudHJ5TWlzc2luZyA9IChzb3VyY2VFbnRyeVBhdGggPT09IG51bGwpLFxuICAgICAgICAgIGVudHJ5VW5tb3ZlZCA9IChzb3VyY2VFbnRyeVBhdGggPT09IHRhcmdldEVudHJ5UGF0aCksXG4gICAgICAgICAgc291cmNlRW50cnlQYXRocyA9IFtdLFxuICAgICAgICAgIHRhcmdldEVudHJ5UGF0aHMgPSBbXTtcblxuICAgIHBhdGhNYXBzLmZvckVhY2goKHBhdGhNYXApID0+IHtcbiAgICAgIGxldCBzb3VyY2VFbnRyeVBhdGgsXG4gICAgICAgICAgdGFyZ2V0RW50cnlQYXRoO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGVudHJ5TWlzc2luZykge1xuICAgICAgICBzb3VyY2VFbnRyeVBhdGggPSBudWxsO1xuXG4gICAgICAgICh7IHRhcmdldEVudHJ5UGF0aCB9ID0gcGF0aE1hcCk7XG4gICAgICB9IGVsc2UgaWYgKGVudHJ5VW5tb3ZlZCkge1xuICAgICAgICAoeyBzb3VyY2VFbnRyeVBhdGggfSA9IHBhdGhNYXApO1xuXG4gICAgICAgIHRhcmdldEVudHJ5UGF0aCA9IHNvdXJjZUVudHJ5UGF0aDsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGggfSA9IHBhdGhNYXApO1xuICAgICAgfVxuXG4gICAgICBzb3VyY2VFbnRyeVBhdGhzLnB1c2goc291cmNlRW50cnlQYXRoKTtcbiAgICAgIHRhcmdldEVudHJ5UGF0aHMucHVzaCh0YXJnZXRFbnRyeVBhdGgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHNvdXJjZUVudHJ5UGF0aHMsXG4gICAgICB0YXJnZXRFbnRyeVBhdGhzXG4gICAgfTtcblxuICAgIGNhbGxiYWNrKGpzb24pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZW5hbWVQcm9qZWN0RW50cnkiLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJwYXRoTWFwcyIsImxhc3RQYXRoTWFwIiwicGF0aE1hcCIsInNvdXJjZUVudHJ5UGF0aCIsInRhcmdldEVudHJ5UGF0aCIsIm1vdmVFbnRyeU9wZXJhdGlvbiIsImVudHJ5TWlzc2luZyIsImVudHJ5VW5tb3ZlZCIsInNvdXJjZUVudHJ5UGF0aHMiLCJ0YXJnZXRFbnRyeVBhdGhzIiwiZm9yRWFjaCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBd0JBOzs7eUJBTk87a0NBRUk7QUFFbkMsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxTQUFTRCxtQkFBbUJHLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUNoRixJQUFNLEFBQUVDLFdBQWFGLEtBQWJFLFVBQ0ZDLGNBQWNOLEtBQUtLLFdBQ25CRSxVQUFVRCxhQUNSRSxrQkFBcUNELFFBQXJDQyxpQkFBaUJDLGtCQUFvQkYsUUFBcEJFO0lBRXpCQyxJQUFBQSxzQ0FBa0IsRUFBQ0YsaUJBQWlCQyxpQkFBaUJQLHVCQUF1QixTQUFDTSxpQkFBaUJDLGlCQUFvQjtRQUNoSCxJQUFNRSxlQUFnQkgsb0JBQW9CLElBQUksRUFDeENJLGVBQWdCSixvQkFBb0JDLGlCQUNwQ0ksbUJBQW1CLEVBQUUsRUFDckJDLG1CQUFtQixFQUFFO1FBRTNCVCxTQUFTVSxPQUFPLENBQUMsU0FBQ1IsU0FBWTtZQUM1QixJQUFJQyxtQkFDQUM7WUFFSixJQUFJLEtBQUssRUFBRTtZQUNULEdBQUc7WUFDTCxPQUFPLElBQUlFLGNBQWM7Z0JBQ3ZCSCxvQkFBa0IsSUFBSTtnQkFFbkJDLG9CQUFvQkYsUUFBcEJFO1lBQ0wsT0FBTyxJQUFJRyxjQUFjO2dCQUNwQkosb0JBQW9CRCxRQUFwQkM7Z0JBRUhDLG9CQUFrQkQsbUJBQWtCLEdBQUc7WUFDekMsT0FBTzs7c0JBQ21DRCxTQUFyQ0Msd0JBQUFBLGlCQUFpQkMsd0JBQUFBO1lBQ3RCLENBQUM7WUFFREksaUJBQWlCRyxJQUFJLENBQUNSO1lBQ3RCTSxpQkFBaUJFLElBQUksQ0FBQ1A7UUFDeEI7UUFFQSxJQUFNTixTQUFPO1lBQ1hVLGtCQUFBQTtZQUNBQyxrQkFBQUE7UUFDRjtRQUVBVixTQUFTRDtJQUNYO0FBQ0YifQ==