"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fileNameFromFilePath: function() {
        return fileNameFromFilePath;
    },
    isNameHiddenName: function() {
        return isNameHiddenName;
    }
});
var _necessary = require("necessary");
var hiddenNameRegularExpression = /^\..+/;
var bottommostNameFromPath = _necessary.pathUtilities.bottommostNameFromPath;
function isNameHiddenName(name) {
    var nameHiddenName = hiddenNameRegularExpression.test(name);
    return nameHiddenName;
}
function fileNameFromFilePath(filePath) {
    var path = filePath, bottommostName = bottommostNameFromPath(path), fileName = bottommostName; //
    return fileName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGF0aFV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgaGlkZGVuTmFtZVJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC4uKy87XG5cbmNvbnN0IHsgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9ID0gcGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmFtZUhpZGRlbk5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGlkZGVuTmFtZSA9IGhpZGRlbk5hbWVSZWd1bGFyRXhwcmVzc2lvbi50ZXN0KG5hbWUpO1xuXG4gIHJldHVybiBuYW1lSGlkZGVuTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVOYW1lRnJvbUZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICBib3R0b21tb3N0TmFtZSA9IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIGZpbGVOYW1lID0gYm90dG9tbW9zdE5hbWU7ICAvL1xuXG4gIHJldHVybiBmaWxlTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJmaWxlTmFtZUZyb21GaWxlUGF0aCIsImlzTmFtZUhpZGRlbk5hbWUiLCJoaWRkZW5OYW1lUmVndWxhckV4cHJlc3Npb24iLCJib3R0b21tb3N0TmFtZUZyb21QYXRoIiwicGF0aFV0aWxpdGllcyIsIm5hbWUiLCJuYW1lSGlkZGVuTmFtZSIsInRlc3QiLCJmaWxlUGF0aCIsInBhdGgiLCJib3R0b21tb3N0TmFtZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7Ozt5QkFOYztBQUU5QixJQUFNQyw4QkFBOEI7QUFFcEMsSUFBTSxBQUFFQyx5QkFBMkJDLHdCQUFhLENBQXhDRDtBQUVELFNBQVNGLGlCQUFpQkksSUFBSTtJQUNuQyxJQUFNQyxpQkFBaUJKLDRCQUE0QkssSUFBSSxDQUFDRjtJQUV4RCxPQUFPQztBQUNUO0FBRU8sU0FBU04scUJBQXFCUSxRQUFRO0lBQzNDLElBQU1DLE9BQU9ELFVBQ1BFLGlCQUFpQlAsdUJBQXVCTSxPQUN4Q0UsV0FBV0QsZ0JBQWlCLEVBQUU7SUFFcEMsT0FBT0M7QUFDVCJ9