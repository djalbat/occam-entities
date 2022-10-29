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
            key: "matchVersion",
            value: function matchVersion(version) {
                return this.shortenedVersion.matchVersion(version);
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
        }
    ], [
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
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2hvcnRlbmVkVmVyc2lvbiBmcm9tIFwiLi9zaG9ydGVuZWRWZXJzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGVuZGVuY3kge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNob3J0ZW5lZFZlcnNpb24gPSBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U2hvcnRlZFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIG1hdGNoVmVyc2lvbih2ZXJzaW9uKSB7IHJldHVybiB0aGlzLnNob3J0ZW5lZFZlcnNpb24ubWF0Y2hWZXJzaW9uKHZlcnNpb24pOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb25KU09OID0gdGhpcy5zaG9ydGVuZWRWZXJzaW9uLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IHNob3J0ZW5lZFZlcnNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBzaG9ydGVuZWRWZXJzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvbkpTT04gPSBzaG9ydGVuZWRWZXJzaW9uOyAvLy9cblxuICAgIGpzb24gPSBzaG9ydGVuZWRWZXJzaW9uSlNPTjsgIC8vL1xuXG4gICAgc2hvcnRlbmVkVmVyc2lvbiA9IFNob3J0ZW5lZFZlcnNpb24uZnJvbUpTT04oanNvbik7XG5cbiAgICBjb25zdCBkZXBlbmRlbmN5ID0gbmV3IERlcGVuZGVuY3kobmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24obmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlcGVuZGVuY3kiLCJuYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldE5hbWUiLCJnZXRTaG9ydGVkVmVyc2lvbiIsIm1hdGNoVmVyc2lvbiIsInZlcnNpb24iLCJ0b0pTT04iLCJzaG9ydGVuZWRWZXJzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIlNob3J0ZW5lZFZlcnNpb24iLCJkZXBlbmRlbmN5IiwiZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxRUFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxnQkFBZ0I7OEJBRGZGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztpQkFIUEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsT0FBTyxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQ0csWUFBWSxDQUFDQztZQUFVOzs7WUFFNUVDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLHVCQUF1QixJQUFJLENBQUNOLGdCQUFnQixDQUFDSyxNQUFNLElBQ25ETixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsbUJBQW1CTSxzQkFDbkJDLE9BQU87b0JBQ0xSLE1BQUFBO29CQUNBQyxrQkFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQU0sQUFBRVIsT0FBU1EsS0FBVFI7Z0JBRVIsSUFBSSxBQUFFQyxtQkFBcUJPLEtBQXJCUDtnQkFFTixJQUFNTSx1QkFBdUJOLGtCQUFrQixHQUFHO2dCQUVsRE8sT0FBT0Qsc0JBQXVCLEdBQUc7Z0JBRWpDTixtQkFBbUJTLHlCQUFnQixDQUFDRCxRQUFRLENBQUNEO2dCQUU3QyxJQUFNRyxhQUFhLElBdkNGWixXQXVDaUJDLE1BQU1DO2dCQUV4QyxPQUFPVTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCWixJQUFJLEVBQUVDLGdCQUFnQixFQUFFO2dCQUN6RCxJQUFNVSxhQUFhLElBN0NGWixXQTZDaUJDLE1BQU1DO2dCQUV4QyxPQUFPVTtZQUNUOzs7V0FoRG1CWiJ9