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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkRmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxvYWRGaWxlcyBhcyBsb2FkRmlsZXNFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZpbGVzKHByb2plY3RzRGlyZWN0b3J5UGF0aCwganNvbiwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBmaWxlUGF0aHMgfSA9IGpzb24sXG4gICAgICAgIHBhdGhzID0gZmlsZVBhdGhzLCAvLy9cbiAgICAgICAgZmlsZXMgPSBsb2FkRmlsZXNFeChwYXRocywgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0gKGZpbGVzICE9PSBudWxsKSA/IC8vL1xuICAgICAgICAgICBmaWxlcy50b0pTT04oKSA6XG4gICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsibG9hZEZpbGVzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZVBhdGhzIiwicGF0aHMiLCJmaWxlcyIsImxvYWRGaWxlc0V4IiwidG9KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzBCQUZpQjtBQUUxQixTQUFTQSxVQUFVQyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDdkUsSUFBTSxBQUFFQyxZQUFjRixLQUFkRSxXQUNGQyxRQUFRRCxXQUNSRSxRQUFRQyxJQUFBQSxxQkFBVyxFQUFDRixPQUFPSjtJQUVqQ0MsT0FBTyxBQUFDSSxVQUFVLElBQUksR0FDYkEsTUFBTUUsTUFBTSxLQUNWLElBQUk7SUFFZixPQUFPTCxTQUFTRDtBQUNsQiJ9