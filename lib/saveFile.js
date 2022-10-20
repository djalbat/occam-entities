"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return saveFile;
    }
});
var _fileSystem = require("./utilities/fileSystem");
function saveFile(projectsDirectoryPath, json, callback) {
    var file = File.fromJSON(json);
    (0, _fileSystem.saveFile)(file, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2F2ZUZpbGUgYXMgc2F2ZUZpbGVFeCB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZUZpbGUocHJvamVjdHNEaXJlY3RvcnlQYXRoLCBqc29uLCBjYWxsYmFjaykge1xuICBjb25zdCBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKTtcblxuICBzYXZlRmlsZUV4KGZpbGUsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAganNvbiA9IHt9OyAgLy8vXG5cbiAgY2FsbGJhY2soanNvbik7XG59XG4iXSwibmFtZXMiOlsic2F2ZUZpbGUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJqc29uIiwiY2FsbGJhY2siLCJmaWxlIiwiRmlsZSIsImZyb21KU09OIiwic2F2ZUZpbGVFeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7OzswQkFGZTtBQUV4QixTQUFTQSxTQUFTQyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDdEUsSUFBTUMsT0FBT0MsS0FBS0MsUUFBUSxDQUFDSjtJQUUzQkssSUFBQUEsb0JBQVUsRUFBQ0gsTUFBTUg7SUFFakJDLE9BQU8sQ0FBQyxHQUFJLEdBQUc7SUFFZkMsU0FBU0Q7QUFDWCJ9