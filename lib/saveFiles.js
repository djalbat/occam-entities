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
var _occamOpenCli = require("occam-open-cli");
var saveFilesEx = _occamOpenCli.fileSystemUtilities.saveFiles;
function saveFiles(projectsDirectoryPath, json, callback) {
    var files = _occamOpenCli.Files.fromJSON(json);
    saveFilesEx(files, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZpbGVzLCBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLW9wZW4tY2xpXCI7XG5cbmNvbnN0IHsgc2F2ZUZpbGVzOiBzYXZlRmlsZXNFeCB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZUZpbGVzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tSlNPTihqc29uKTtcblxuICBzYXZlRmlsZXNFeChmaWxlcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0ge307ICAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZXMiLCJzYXZlRmlsZXNFeCIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJmaWxlcyIsIkZpbGVzIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7NEJBSm1CO0FBRTNDLElBQVFBLEFBQVdDLGNBQWdCQyxpQ0FBbUIsQ0FBOUNGO0FBRU8sU0FBU0EsVUFBVUcscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQ3ZFLElBQU1DLFFBQVFDLG1CQUFLLENBQUNDLFFBQVEsQ0FBQ0o7SUFFN0JILFlBQVlLLE9BQU9IO0lBRW5CQyxPQUFPLENBQUMsR0FBSSxHQUFHO0lBRWZDLFNBQVNEO0FBQ1gifQ==