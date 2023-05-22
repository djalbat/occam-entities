"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loadRelease;
    }
});
var _fileSystem = require("./utilities/fileSystem");
function loadRelease(projectsDirectoryPath, json, callback) {
    var releaseName = json.releaseName, release = (0, _fileSystem.loadRelease)(releaseName, projectsDirectoryPath);
    json = release !== null ? release.toJSON() : null;
    return callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkUmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9hZFJlbGVhc2UgYXMgbG9hZFJlbGVhc2VFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFJlbGVhc2UocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IHJlbGVhc2VOYW1lIH0gPSBqc29uLFxuICAgICAgICByZWxlYXNlID0gbG9hZFJlbGVhc2VFeChyZWxlYXNlTmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKHJlbGVhc2UgIT09IG51bGwpID8gIC8vL1xuICAgICAgICAgICAgcmVsZWFzZS50b0pTT04oKTpcbiAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsibG9hZFJlbGVhc2UiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJyZWxlYXNlTmFtZSIsInJlbGVhc2UiLCJsb2FkUmVsZWFzZUV4IiwidG9KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBCQUZxQjtBQUU5QixTQUFTQSxZQUFZQyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3ZFLElBQU0sQUFBRUMsY0FBZ0JGLEtBQWhCRSxhQUNGQyxVQUFVQyxJQUFBQSx5QkFBY0YsYUFBYUg7SUFFM0NDLE9BQU8sQUFBQ0csWUFBWSxPQUNWQSxRQUFRRSxXQUNOO0lBRVosT0FBT0osU0FBU0Q7QUFDbEIifQ==