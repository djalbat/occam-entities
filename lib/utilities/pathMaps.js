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
    asynchronousForEach: function() {
        return asynchronousForEach;
    },
    default: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var forEach = _necessary.asynchronousUtilities.forEach;
function asynchronousForEach(pathMaps, operation, done) {
    forEach(pathMaps, function(pathMap, next, done, context, index) {
        var sourceEntryPath = pathMap.sourceEntryPath, targetEntryPath = pathMap.targetEntryPath, entryDirectory = pathMap.entryDirectory;
        operation(sourceEntryPath, targetEntryPath, entryDirectory, next, done, index);
    }, done);
}
var _default = {
    asynchronousForEach: asynchronousForEach
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGF0aE1hcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY2hyb25vdXNGb3JFYWNoKHBhdGhNYXBzLCBvcGVyYXRpb24sIGRvbmUpIHtcbiAgZm9yRWFjaChcbiAgICBwYXRoTWFwcyxcbiAgICAocGF0aE1hcCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIGVudHJ5RGlyZWN0b3J5IH0gPSBwYXRoTWFwO1xuXG4gICAgICBvcGVyYXRpb24oc291cmNlRW50cnlQYXRoLCB0YXJnZXRFbnRyeVBhdGgsIGVudHJ5RGlyZWN0b3J5LCBuZXh0LCBkb25lLCBpbmRleCk7XG4gICAgfSxcbiAgICBkb25lXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXN5bmNocm9ub3VzRm9yRWFjaFxufTtcbiJdLCJuYW1lcyI6WyJhc3luY2hyb25vdXNGb3JFYWNoIiwiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsInBhdGhNYXBzIiwib3BlcmF0aW9uIiwiZG9uZSIsInBhdGhNYXAiLCJuZXh0IiwiY29udGV4dCIsImluZGV4Iiwic291cmNlRW50cnlQYXRoIiwidGFyZ2V0RW50cnlQYXRoIiwiZW50cnlEaXJlY3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsbUJBQW1CO2VBQW5CQTs7SUFZaEIsT0FFRTtlQUZGOzs7eUJBaEJzQztBQUV0QyxJQUFNLEFBQUVDLFVBQVlDLGdDQUFxQixDQUFqQ0Q7QUFFRCxTQUFTRCxvQkFBb0JHLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUU7SUFDN0RKLFFBQ0VFLFVBQ0EsU0FBQ0csU0FBU0MsTUFBTUYsTUFBTUcsU0FBU0MsT0FBVTtRQUN2QyxJQUFRQyxrQkFBcURKLFFBQXJESSxpQkFBaUJDLGtCQUFvQ0wsUUFBcENLLGlCQUFpQkMsaUJBQW1CTixRQUFuQk07UUFFMUNSLFVBQVVNLGlCQUFpQkMsaUJBQWlCQyxnQkFBZ0JMLE1BQU1GLE1BQU1JO0lBQzFFLEdBQ0FKO0FBRUo7SUFFQSxXQUFlO0lBQ2JMLHFCQUFBQTtBQUNGIn0=