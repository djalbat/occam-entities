"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return saveFiles;
    }
});
var _files = /*#__PURE__*/ _interop_require_default(require("./files"));
var _fileSystem = require("./utilities/fileSystem");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function saveFiles(projectsDirectoryPath, json, callback) {
    var files = _files.default.fromJSON(json);
    (0, _fileSystem.saveFiles)(files, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlcyBmcm9tIFwiLi9maWxlc1wiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZXMgYXMgc2F2ZUZpbGVzRXggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmVGaWxlcyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbUpTT04oanNvbik7XG5cbiAgc2F2ZUZpbGVzRXgoZmlsZXMsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAganNvbiA9IHt9OyAgLy8vXG5cbiAgY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsic2F2ZUZpbGVzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZXMiLCJGaWxlcyIsImZyb21KU09OIiwic2F2ZUZpbGVzRXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NERBSk47MEJBRXVCOzs7Ozs7QUFFMUIsU0FBU0EsVUFBVUMscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUNyRSxJQUFNQyxRQUFRQyxjQUFLLENBQUNDLFFBQVEsQ0FBQ0o7SUFFN0JLLElBQUFBLHFCQUFXLEVBQUNILE9BQU9IO0lBRW5CQyxPQUFPLENBQUMsR0FBSSxHQUFHO0lBRWZDLFNBQVNEO0FBQ1gifQ==