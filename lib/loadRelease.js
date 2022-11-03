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
    var filePath = json.filePath, path = filePath, file = (0, _fileSystem.loadRelease)(path, projectsDirectoryPath);
    json = file !== null ? file.toJSON() : null;
    return callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkUmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbG9hZFJlbGVhc2UgYXMgbG9hZFJlbGVhc2VFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFJlbGVhc2UocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCB7IGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgZmlsZSA9IGxvYWRSZWxlYXNlRXgocGF0aCwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKGZpbGUgIT09IG51bGwpID8gIC8vL1xuICAgICAgICAgICBmaWxlLnRvSlNPTigpOlxuICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKGpzb24pO1xufVxuIl0sIm5hbWVzIjpbImxvYWRSZWxlYXNlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZVBhdGgiLCJwYXRoIiwiZmlsZSIsImxvYWRSZWxlYXNlRXgiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MEJBRnFCO0FBRTlCLFNBQVNBLFlBQVlDLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN6RSxJQUFNLEFBQUVDLFdBQWFGLEtBQWJFLFVBQ0ZDLE9BQU9ELFVBQ1BFLE9BQU9DLElBQUFBLHVCQUFhLEVBQUNGLE1BQU1KO0lBRWpDQyxPQUFPLEFBQUNJLFNBQVMsSUFBSSxHQUNaQSxLQUFLRSxNQUFNLEtBQ1QsSUFBSTtJQUVmLE9BQU9MLFNBQVNEO0FBQ2xCIn0=