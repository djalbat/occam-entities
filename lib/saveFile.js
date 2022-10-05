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
var _occamOpenCli = require("occam-open-cli");
var saveFileEx = _occamOpenCli.fileSystemUtilities.saveFile;
function saveFile(projectsDirectoryPath, json, callback) {
    var file = _occamOpenCli.File.fromJSON(json);
    saveFileEx(file, projectsDirectoryPath);
    json = {}; ///
    callback(json);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zYXZlRmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZSwgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1vcGVuLWNsaVwiO1xuXG5jb25zdCB7IHNhdmVGaWxlOiBzYXZlRmlsZUV4IH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlRmlsZShwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGpzb24sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gIHNhdmVGaWxlRXgoZmlsZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcblxuICBqc29uID0ge307ICAvLy9cblxuICBjYWxsYmFjayhqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJzYXZlRmlsZSIsInNhdmVGaWxlRXgiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwianNvbiIsImNhbGxiYWNrIiwiZmlsZSIsIkZpbGUiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7Ozs0QkFKa0I7QUFFMUMsSUFBUUEsQUFBVUMsYUFBZUMsaUNBQW1CLENBQTVDRjtBQUVPLFNBQVNBLFNBQVNHLHFCQUFxQixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtJQUN0RSxJQUFNQyxPQUFPQyxrQkFBSSxDQUFDQyxRQUFRLENBQUNKO0lBRTNCSCxXQUFXSyxNQUFNSDtJQUVqQkMsT0FBTyxDQUFDLEdBQUksR0FBRztJQUVmQyxTQUFTRDtBQUNYIn0=