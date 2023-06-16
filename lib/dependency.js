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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFNob3J0ZWRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHNob3J0ZW5lZFZlcnNpb24gPSBudWxsLFxuICAgICAgICAgIGRlcGVuZGVuY3kgPSBuZXcgRGVwZW5kZW5jeShuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jeSA9IG5ldyBEZXBlbmRlbmN5KG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVwZW5kZW5jeSIsIm5hbWUiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0TmFtZSIsImdldFNob3J0ZWRWZXJzaW9uIiwiZnJvbU5hbWUiLCJkZXBlbmRlbmN5IiwiZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLElBQUksRUFBRUMsZ0JBQWdCO2dDQURmRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7a0JBSFBGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0osSUFBSTtnQkFDbEIsSUFBTUMsbUJBQW1CLE1BQ25CSSxhQUFhLElBaEJGTixXQWdCaUJDLE1BQU1DO2dCQUV4QyxPQUFPSTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCTixJQUFJLEVBQUVDLGdCQUFnQjtnQkFDdkQsSUFBTUksYUFBYSxJQXRCRk4sV0FzQmlCQyxNQUFNQztnQkFFeEMsT0FBT0k7WUFDVDs7O1dBekJtQk4ifQ==