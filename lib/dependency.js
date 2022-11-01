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
                var shortenedVersionString = shortenedVersion, string = shortenedVersionString; ///
                shortenedVersion = _shortenedVersion.default.fromString(string);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2hvcnRlbmVkVmVyc2lvbiBmcm9tIFwiLi9zaG9ydGVuZWRWZXJzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGVuZGVuY3kge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNob3J0ZW5lZFZlcnNpb24gPSBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U2hvcnRlZFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gdGhpcy5zaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvblN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc2hvcnRlbmVkVmVyc2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc2hvcnRlbmVkVmVyc2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb25TdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nOyAgLy8vXG5cbiAgICBzaG9ydGVuZWRWZXJzaW9uID0gU2hvcnRlbmVkVmVyc2lvbi5mcm9tU3RyaW5nKHN0cmluZyk7XG5cbiAgICBjb25zdCBkZXBlbmRlbmN5ID0gbmV3IERlcGVuZGVuY3kobmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24obmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlcGVuZGVuY3kiLCJuYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldE5hbWUiLCJnZXRTaG9ydGVkVmVyc2lvbiIsInRvSlNPTiIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImpzb24iLCJmcm9tSlNPTiIsInN0cmluZyIsIlNob3J0ZW5lZFZlcnNpb24iLCJmcm9tU3RyaW5nIiwiZGVwZW5kZW5jeSIsImZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUVBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLElBQUksRUFBRUMsZ0JBQWdCOzhCQURmRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7aUJBSFBGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUMseUJBQXlCLElBQUksQ0FBQ0osZ0JBQWdCLENBQUNLLFFBQVEsSUFDdkROLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxtQkFBbUJJLHdCQUNuQkUsT0FBTztvQkFDTFAsTUFBQUE7b0JBQ0FDLGtCQUFBQTtnQkFDRjtnQkFFTixPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTSxBQUFFUCxPQUFTTyxLQUFUUDtnQkFFUixJQUFJLEFBQUVDLG1CQUFxQk0sS0FBckJOO2dCQUVOLElBQU1JLHlCQUF5Qkosa0JBQ3pCUSxTQUFTSix3QkFBeUIsR0FBRztnQkFFM0NKLG1CQUFtQlMseUJBQWdCLENBQUNDLFVBQVUsQ0FBQ0Y7Z0JBRS9DLElBQU1HLGFBQWEsSUFwQ0ZiLFdBb0NpQkMsTUFBTUM7Z0JBRXhDLE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJiLElBQUksRUFBRUMsZ0JBQWdCLEVBQUU7Z0JBQ3pELElBQU1XLGFBQWEsSUExQ0ZiLFdBMENpQkMsTUFBTUM7Z0JBRXhDLE9BQU9XO1lBQ1Q7OztXQTdDbUJiIn0=