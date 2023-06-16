"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loadReleases;
    }
});
var _fileSystem = require("./utilities/fileSystem");
function loadReleases(projectsDirectoryPath, json, callback) {
    var releases = (0, _fileSystem.loadReleases)(projectsDirectoryPath);
    json = releases !== null ? releases.toJSON() : null;
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkUmVsZWFzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvYWRSZWxlYXNlcyBhcyBsb2FkUmVsZWFzZXNFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRSZWxlYXNlcyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJlbGVhc2VzID0gbG9hZFJlbGVhc2VzRXgocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKHJlbGVhc2VzICE9PSBudWxsKSA/ICAvLy9cbiAgICAgICAgICAgIHJlbGVhc2VzLnRvSlNPTigpOlxuICAgICAgICAgICAgICBudWxsO1xuXG4gIGNhbGxiYWNrKGpzb24pO1xufVxuIl0sIm5hbWVzIjpbImxvYWRSZWxlYXNlcyIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsInJlbGVhc2VzIiwibG9hZFJlbGVhc2VzRXgiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MEJBRnVCO0FBRWhDLFNBQVNBLGFBQWFDLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDeEUsSUFBTUMsV0FBV0MsSUFBQUEsd0JBQWMsRUFBQ0o7SUFFaENDLE9BQU8sQUFBQ0UsYUFBYSxPQUNYQSxTQUFTRSxNQUFNLEtBQ2I7SUFFWkgsU0FBU0Q7QUFDWCJ9