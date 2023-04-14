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
    var file = _file.default.fromJSON(json);
    (0, _fileSystem.saveFile)(file, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZSBhcyBzYXZlRmlsZUV4IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gIHNhdmVGaWxlRXgoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0ge307ICAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsImZpbGUiLCJGaWxlIiwiZnJvbUpTT04iLCJzYXZlRmlsZUV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQOzBCQUVzQjs7Ozs7O0FBRXhCLFNBQVNBLFNBQVNDLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN0RSxJQUFNQyxPQUFPQyxhQUFJLENBQUNDLFFBQVEsQ0FBQ0o7SUFFM0JLLElBQUFBLG9CQUFVLEVBQUNILE1BQU1IO0lBRWpCQyxPQUFPLENBQUMsR0FBSSxHQUFHO0lBRWZDLFNBQVNEO0FBQ1gifQ==