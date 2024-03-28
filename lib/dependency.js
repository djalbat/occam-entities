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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Dependency = /*#__PURE__*/ function() {
    function Dependency(name, shortenedVersion) {
        _class_call_check(this, Dependency);
        this.name = name;
        this.shortenedVersion = shortenedVersion;
    }
    _create_class(Dependency, [
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
            key: "asString",
            value: function asString() {
                var string;
                if (this.shortenedVersion !== null) {
                    var shortenedVersionString = this.shortenedVersion.toString();
                    string = "".concat(this.name, "@").concat(shortenedVersionString);
                } else {
                    string = this.name; ///
                }
                return string;
            }
        }
    ], [
        {
            key: "fromName",
            value: function fromName(name) {
                var shortenedVersion = null, dependency = new Dependency(name, shortenedVersion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFNob3J0ZWRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHRoaXMuc2hvcnRlbmVkVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvblN0cmluZyA9IHRoaXMuc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9QCR7c2hvcnRlbmVkVmVyc2lvblN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb24gPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeSA9IG5ldyBEZXBlbmRlbmN5KG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZXBlbmRlbmN5IiwibmFtZSIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXROYW1lIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJhc1N0cmluZyIsInN0cmluZyIsInNob3J0ZW5lZFZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsImZyb21OYW1lIiwiZGVwZW5kZW5jeSIsImZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwyQkFBRCxBQUFMO2FBQU1BLFdBQ1BDLElBQUksRUFBRUMsZ0JBQWdCO2dDQURmRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7a0JBSFBGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBSSxJQUFJLENBQUNKLGdCQUFnQixLQUFLLE1BQU07b0JBQ2xDLElBQU1LLHlCQUF5QixJQUFJLENBQUNMLGdCQUFnQixDQUFDTSxRQUFRO29CQUU3REYsU0FBUyxBQUFDLEdBQWVDLE9BQWIsSUFBSSxDQUFDTixJQUFJLEVBQUMsS0FBMEIsT0FBdkJNO2dCQUMzQixPQUFPO29CQUNMRCxTQUFTLElBQUksQ0FBQ0wsSUFBSSxFQUFFLEdBQUc7Z0JBQ3pCO2dCQUVBLE9BQU9LO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU1IsSUFBSTtnQkFDbEIsSUFBTUMsbUJBQW1CLE1BQ25CUSxhQUFhLElBOUJGVixXQThCaUJDLE1BQU1DO2dCQUV4QyxPQUFPUTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCVixJQUFJLEVBQUVDLGdCQUFnQjtnQkFDdkQsSUFBTVEsYUFBYSxJQXBDRlYsV0FvQ2lCQyxNQUFNQztnQkFFeEMsT0FBT1E7WUFDVDs7O1dBdkNtQlYifQ==