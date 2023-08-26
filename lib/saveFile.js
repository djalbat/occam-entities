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
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
var _fileSystem = require("./utilities/fileSystem");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function saveFile(projectsDirectoryPath, json, callback) {
    var file = _file.default.fromJSON(json), success = (0, _fileSystem.saveFile)(file, projectsDirectoryPath);
    json = success;
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZSBhcyBzYXZlRmlsZUV4IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICBzdWNjZXNzID0gc2F2ZUZpbGVFeChmaWxlLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGpzb24gPSBzdWNjZXNzO1xuXG4gIGNhbGxiYWNrKGpzb24pO1xufVxuIl0sIm5hbWVzIjpbInNhdmVGaWxlIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZSIsIkZpbGUiLCJmcm9tSlNPTiIsInN1Y2Nlc3MiLCJzYXZlRmlsZUV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQOzBCQUVzQjs7Ozs7O0FBRXhCLFNBQVNBLFNBQVNDLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVE7SUFDcEUsSUFBTUMsT0FBT0MsYUFBSSxDQUFDQyxRQUFRLENBQUNKLE9BQ3JCSyxVQUFVQyxJQUFBQSxvQkFBVSxFQUFDSixNQUFNSDtJQUVqQ0MsT0FBT0s7SUFFUEosU0FBU0Q7QUFDWCJ9