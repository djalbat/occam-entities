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
var _fileSystem = require("./utilities/fileSystem");
function saveFiles(projectsDirectoryPath, json, callback) {
    var files = Files.fromJSON(json);
    (0, _fileSystem.saveFiles)(files, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNhdmVGaWxlcyBhcyBzYXZlRmlsZXNFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZUZpbGVzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgZmlsZXMgPSBGaWxlcy5mcm9tSlNPTihqc29uKTtcblxuICBzYXZlRmlsZXNFeChmaWxlcywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0ge307ICAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZXMiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJmaWxlcyIsIkZpbGVzIiwiZnJvbUpTT04iLCJzYXZlRmlsZXNFeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzswQkFGaUI7QUFFMUIsU0FBU0EsVUFBVUMscUJBQXFCLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQ3ZFLElBQU1DLFFBQVFDLE1BQU1DLFFBQVEsQ0FBQ0o7SUFFN0JLLElBQUFBLHFCQUFXLEVBQUNILE9BQU9IO0lBRW5CQyxPQUFPLENBQUMsR0FBSSxHQUFHO0lBRWZDLFNBQVNEO0FBQ1gifQ==