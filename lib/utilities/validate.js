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
    isStringShortenedVersionString: function() {
        return isStringShortenedVersionString;
    },
    isStringVersionString: function() {
        return isStringVersionString;
    }
});
function isStringVersionString(string) {
    return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string);
}
function isStringShortenedVersionString(string) {
    return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ1ZlcnNpb25TdHJpbmcoc3RyaW5nKSB7IHJldHVybiAvKD86MHwoWzEtOV1cXGQqKSlcXC4oPzowfChbMS05XVxcZCopKVxcLig/OjB8KFsxLTldXFxkKikpLy50ZXN0KHN0cmluZyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nU2hvcnRlbmVkVmVyc2lvblN0cmluZyhzdHJpbmcpIHsgcmV0dXJuIC8oPzowfChbMS05XVxcZCopKVxcLig/OjB8KFsxLTldXFxkKikpLy50ZXN0KHN0cmluZyk7IH1cbiJdLCJuYW1lcyI6WyJpc1N0cmluZ1Nob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJpc1N0cmluZ1ZlcnNpb25TdHJpbmciLCJzdHJpbmciLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLDhCQUE4QjtlQUE5QkE7O0lBRkFDLHFCQUFxQjtlQUFyQkE7OztBQUFULFNBQVNBLHNCQUFzQkMsTUFBTTtJQUFJLE9BQU8sdURBQXVEQyxJQUFJLENBQUNEO0FBQVM7QUFFckgsU0FBU0YsK0JBQStCRSxNQUFNO0lBQUksT0FBTyxxQ0FBcUNDLElBQUksQ0FBQ0Q7QUFBUyJ9