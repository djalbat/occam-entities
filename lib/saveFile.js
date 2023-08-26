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
    json = success; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5pbXBvcnQgeyBzYXZlRmlsZSBhcyBzYXZlRmlsZUV4IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pLFxuICAgICAgICBzdWNjZXNzID0gc2F2ZUZpbGVFeChmaWxlLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpO1xuXG4gIGpzb24gPSBzdWNjZXNzOyAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImpzb24iLCJjYWxsYmFjayIsImZpbGUiLCJGaWxlIiwiZnJvbUpTT04iLCJzdWNjZXNzIiwic2F2ZUZpbGVFeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKUDswQkFFc0I7Ozs7OztBQUV4QixTQUFTQSxTQUFTQyxxQkFBcUIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQ3BFLElBQU1DLE9BQU9DLGFBQUksQ0FBQ0MsUUFBUSxDQUFDSixPQUNyQkssVUFBVUMsSUFBQUEsb0JBQVUsRUFBQ0osTUFBTUg7SUFFakNDLE9BQU9LLFNBQVMsR0FBRztJQUVuQkosU0FBU0Q7QUFDWCJ9