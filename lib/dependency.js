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
                var shortenedVersionString = this.shortenedVersion.toString(), name = this.name, shortenedVersion = shortenedVersionString, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2hvcnRlbmVkVmVyc2lvbiBmcm9tIFwiLi9zaG9ydGVuZWRWZXJzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGVuZGVuY3kge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNob3J0ZW5lZFZlcnNpb24gPSBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U2hvcnRlZFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gdGhpcy5zaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvblN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc2hvcnRlbmVkVmVyc2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb25KU09OID0gc2hvcnRlbmVkVmVyc2lvbjsgLy8vXG5cbiAgICBqc29uID0gc2hvcnRlbmVkVmVyc2lvbkpTT047ICAvLy9cblxuICAgIHNob3J0ZW5lZFZlcnNpb24gPSBTaG9ydGVuZWRWZXJzaW9uLmZyb21KU09OKGpzb24pO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jeSA9IG5ldyBEZXBlbmRlbmN5KG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uKG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5ID0gbmV3IERlcGVuZGVuY3kobmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZXBlbmRlbmN5IiwibmFtZSIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXROYW1lIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJ0b0pTT04iLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJzaG9ydGVuZWRWZXJzaW9uSlNPTiIsIlNob3J0ZW5lZFZlcnNpb24iLCJkZXBlbmRlbmN5IiwiZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxRUFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsSUFBSSxFQUFFQyxnQkFBZ0I7OEJBRGZGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztpQkFIUEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyx5QkFBeUIsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQ0ssUUFBUSxJQUN2RE4sT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLG1CQUFtQkksd0JBQ25CRSxPQUFPO29CQUNMUCxNQUFBQTtvQkFDQUMsa0JBQUFBO2dCQUNGO2dCQUVOLE9BQU9NO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFO2dCQUNwQixJQUFNLEFBQUVQLE9BQVNPLEtBQVRQO2dCQUVSLElBQUksQUFBRUMsbUJBQXFCTSxLQUFyQk47Z0JBRU4sSUFBTVEsdUJBQXVCUixrQkFBa0IsR0FBRztnQkFFbERNLE9BQU9FLHNCQUF1QixHQUFHO2dCQUVqQ1IsbUJBQW1CUyx5QkFBZ0IsQ0FBQ0YsUUFBUSxDQUFDRDtnQkFFN0MsSUFBTUksYUFBYSxJQXJDRlosV0FxQ2lCQyxNQUFNQztnQkFFeEMsT0FBT1U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QlosSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRTtnQkFDekQsSUFBTVUsYUFBYSxJQTNDRlosV0EyQ2lCQyxNQUFNQztnQkFFeEMsT0FBT1U7WUFDVDs7O1dBOUNtQloifQ==