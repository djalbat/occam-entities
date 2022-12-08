"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return loadFiles;
    }
});
var _fileSystem = require("./utilities/fileSystem");
function loadFiles(projectsDirectoryPath, json, callback) {
    var filePaths = json.filePaths, paths = filePaths, files = (0, _fileSystem.loadFiles)(paths, projectsDirectoryPath);
    json = files !== null ? files.toJSON() : null;
    return callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvYWRGaWxlcyBhcyBsb2FkRmlsZXNFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZpbGVzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBmaWxlUGF0aHMgfSA9IGpzb24sXG4gICAgICAgIHBhdGhzID0gZmlsZVBhdGhzLCAvLy9cbiAgICAgICAgZmlsZXMgPSBsb2FkRmlsZXNFeChwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKGZpbGVzICE9PSBudWxsKSA/IC8vL1xuICAgICAgICAgICAgZmlsZXMudG9KU09OKCkgOlxuICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJsb2FkRmlsZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJmaWxlUGF0aHMiLCJwYXRocyIsImZpbGVzIiwibG9hZEZpbGVzRXgiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7MEJBRmlCO0FBRTFCLFNBQVNBLFVBQVVDLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN2RSxJQUFNLEFBQUVDLFlBQWNGLEtBQWRFLFdBQ0ZDLFFBQVFELFdBQ1JFLFFBQVFDLElBQUFBLHFCQUFXLEVBQUNGLE9BQU9KO0lBRWpDQyxPQUFPLEFBQUNJLFVBQVUsSUFBSSxHQUNaQSxNQUFNRSxNQUFNLEtBQ1YsSUFBSTtJQUVoQixPQUFPTCxTQUFTRDtBQUNsQiJ9