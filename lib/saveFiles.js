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
    var files = _files.default.fromJSON(json), successes = (0, _fileSystem.saveFiles)(files, projectsDirectoryPath);
    json = successes;
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlcyBmcm9tIFwiLi9maWxlc1wiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZXMgYXMgc2F2ZUZpbGVzRXggfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmVGaWxlcyhwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGVzID0gRmlsZXMuZnJvbUpTT04oanNvbiksXG4gICAgICAgIHN1Y2Nlc3NlcyA9IHNhdmVGaWxlc0V4KGZpbGVzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGpzb24gPSBzdWNjZXNzZXM7XG5cbiAgY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsic2F2ZUZpbGVzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZXMiLCJGaWxlcyIsImZyb21KU09OIiwic3VjY2Vzc2VzIiwic2F2ZUZpbGVzRXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NERBSk47MEJBRXVCOzs7Ozs7QUFFMUIsU0FBU0EsVUFBVUMscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUTtJQUNyRSxJQUFNQyxRQUFRQyxjQUFLLENBQUNDLFFBQVEsQ0FBQ0osT0FDdkJLLFlBQVlDLElBQUFBLHFCQUFXLEVBQUNKLE9BQU9IO0lBRXJDQyxPQUFPSztJQUVQSixTQUFTRDtBQUNYIn0=