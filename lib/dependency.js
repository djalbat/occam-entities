"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependency;
    }
});
var _shortenedVersion = /*#__PURE__*/ _interopRequireDefault(require("./shortenedVersion"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Dependency = /*#__PURE__*/ function() {
    function Dependency(name, shortenedVersion) {
        _classCallCheck(this, Dependency);
        this.name = name;
        this.shortenedVersion = shortenedVersion;
    }
    _createClass(Dependency, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getShortedVersion",
            value: function getShortedVersion() {
                return this.shortenedVersion;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var shortenedVersionJSON = this.shortenedVersion.toJSON(), name = this.name, shortenedVersion = shortenedVersionJSON, json = {
                    name: name,
                    shortenedVersion: shortenedVersion
                };
                return json;
            }
        },
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name;
                var shortenedVersion = json.shortenedVersion;
                var shortenedVersionJSON = shortenedVersion; ///
                json = shortenedVersionJSON; ///
                shortenedVersion = _shortenedVersion.default.fromJSON(json);
                var dependency = new Dependency(name, shortenedVersion);
                return dependency;
            }
        }
    ], [
        {
            key: "fromNameAndShortenedVersion",
            value: function fromNameAndShortenedVersion(name, shortenedVersion) {
                var dependency = new Dependency(name, shortenedVersion);
                return dependency;
            }
        }
    ]);
    return Dependency;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2hvcnRlbmVkVmVyc2lvbiBmcm9tIFwiLi9zaG9ydGVuZWRWZXJzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGVuZGVuY3kge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNob3J0ZW5lZFZlcnNpb24gPSBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U2hvcnRlZFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uSlNPTiA9IHRoaXMuc2hvcnRlbmVkVmVyc2lvbi50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBzaG9ydGVuZWRWZXJzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBzaG9ydGVuZWRWZXJzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvbkpTT04gPSBzaG9ydGVuZWRWZXJzaW9uOyAvLy9cblxuICAgIGpzb24gPSBzaG9ydGVuZWRWZXJzaW9uSlNPTjsgIC8vL1xuXG4gICAgc2hvcnRlbmVkVmVyc2lvbiA9IFNob3J0ZW5lZFZlcnNpb24uZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCBkZXBlbmRlbmN5ID0gbmV3IERlcGVuZGVuY3kobmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24obmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlcGVuZGVuY3kiLCJuYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldE5hbWUiLCJnZXRTaG9ydGVkVmVyc2lvbiIsInRvSlNPTiIsInNob3J0ZW5lZFZlcnNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwiU2hvcnRlbmVkVmVyc2lvbiIsImRlcGVuZGVuY3kiLCJmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FFQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxJQUFJLEVBQUVDLGdCQUFnQjs4QkFEZkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7O2lCQUhQRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLHVCQUF1QixJQUFJLENBQUNKLGdCQUFnQixDQUFDRyxNQUFNLElBQ25ESixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsbUJBQW1CSSxzQkFDbkJDLE9BQU87b0JBQ0xOLE1BQUFBO29CQUNBQyxrQkFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ2IsSUFBTSxBQUFFTixPQUFTTSxLQUFUTjtnQkFFUixJQUFJLEFBQUVDLG1CQUFxQkssS0FBckJMO2dCQUVOLElBQU1JLHVCQUF1Qkosa0JBQWtCLEdBQUc7Z0JBRWxESyxPQUFPRCxzQkFBdUIsR0FBRztnQkFFakNKLG1CQUFtQk8seUJBQWdCLENBQUNELFFBQVEsQ0FBQ0Q7Z0JBRTdDLElBQU1HLGFBQWEsSUFyQ0ZWLFdBcUNpQkMsTUFBTUM7Z0JBRXhDLE9BQU9RO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCVixJQUFJLEVBQUVDLGdCQUFnQixFQUFFO2dCQUN6RCxJQUFNUSxhQUFhLElBM0NGVixXQTJDaUJDLE1BQU1DO2dCQUV4QyxPQUFPUTtZQUNUOzs7V0E5Q21CViJ9