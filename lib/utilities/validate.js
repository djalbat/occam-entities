"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isStringShortenedVersionString () {
        return isStringShortenedVersionString;
    },
    get isStringVersionString () {
        return isStringVersionString;
    }
});
function isStringVersionString(string) {
    return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string);
}
function isStringShortenedVersionString(string) {
    return /(?:0|([1-9]\d*))\.(?:0|([1-9]\d*))/.test(string);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ1ZlcnNpb25TdHJpbmcoc3RyaW5nKSB7IHJldHVybiAvKD86MHwoWzEtOV1cXGQqKSlcXC4oPzowfChbMS05XVxcZCopKVxcLig/OjB8KFsxLTldXFxkKikpLy50ZXN0KHN0cmluZyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nU2hvcnRlbmVkVmVyc2lvblN0cmluZyhzdHJpbmcpIHsgcmV0dXJuIC8oPzowfChbMS05XVxcZCopKVxcLig/OjB8KFsxLTldXFxkKikpLy50ZXN0KHN0cmluZyk7IH1cbiJdLCJuYW1lcyI6WyJpc1N0cmluZ1Nob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJpc1N0cmluZ1ZlcnNpb25TdHJpbmciLCJzdHJpbmciLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQUZBQztlQUFBQTs7O0FBQVQsU0FBU0Esc0JBQXNCQyxNQUFNO0lBQUksT0FBTyx1REFBdURDLElBQUksQ0FBQ0Q7QUFBUztBQUVySCxTQUFTRiwrQkFBK0JFLE1BQU07SUFBSSxPQUFPLHFDQUFxQ0MsSUFBSSxDQUFDRDtBQUFTIn0=