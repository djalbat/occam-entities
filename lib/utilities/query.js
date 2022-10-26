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
    nodeQuery: function() {
        return nodeQuery;
    },
    nodesQuery: function() {
        return nodesQuery;
    },
    default: function() {
        return _default;
    }
});
var _occamDom = require("occam-dom");
function nodeQuery(expression) {
    var query = _occamDom.Query.fromExpression(expression);
    return function(node) {
        if (node !== null) {
            var nodes = query.execute(node);
            node = nodes.shift() || null; ///
        }
        return node;
    };
}
function nodesQuery(expression) {
    var query = _occamDom.Query.fromExpression(expression);
    return function(node) {
        var nodes = null;
        if (node !== null) {
            nodes = query.execute(node);
        }
        return nodes;
    };
}
var _default = {
    nodeQuery: nodeQuery,
    nodesQuery: nodesQuery
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZVF1ZXJ5KGV4cHJlc3Npb24pIHtcbiAgY29uc3QgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vZGUgPSBub2Rlcy5zaGlmdCgpIHx8IG51bGw7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNRdWVyeShleHByZXNzaW9uKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG5vZGVzID0gcXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZVF1ZXJ5LFxuICBub2Rlc1F1ZXJ5XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJleHByZXNzaW9uIiwicXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLFNBQVM7ZUFBVEE7O0lBY0FDLFVBQVU7ZUFBVkE7O0lBY2hCLE9BR0U7ZUFIRjs7O3dCQTlCc0I7QUFFZixTQUFTRCxVQUFVRSxVQUFVLEVBQUU7SUFDcEMsSUFBTUMsUUFBUUMsZUFBSyxDQUFDQyxjQUFjLENBQUNIO0lBRW5DLE9BQU8sU0FBU0ksSUFBSSxFQUFFO1FBQ3BCLElBQUlBLFNBQVMsSUFBSSxFQUFFO1lBQ2pCLElBQU1DLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7WUFFNUJBLE9BQU9DLE1BQU1FLEtBQUssTUFBTSxJQUFJLEVBQUUsR0FBRztRQUNuQyxDQUFDO1FBRUQsT0FBT0g7SUFDVDtBQUNGO0FBRU8sU0FBU0wsV0FBV0MsVUFBVSxFQUFFO0lBQ3JDLElBQU1DLFFBQVFDLGVBQUssQ0FBQ0MsY0FBYyxDQUFDSDtJQUVuQyxPQUFPLFNBQVNJLElBQUksRUFBRTtRQUNwQixJQUFJQyxRQUFRLElBQUk7UUFFaEIsSUFBSUQsU0FBUyxJQUFJLEVBQUU7WUFDakJDLFFBQVFKLE1BQU1LLE9BQU8sQ0FBQ0Y7UUFDeEIsQ0FBQztRQUVELE9BQU9DO0lBQ1Q7QUFDRjtJQUVBLFdBQWU7SUFDYlAsV0FBQUE7SUFDQUMsWUFBQUE7QUFDRiJ9