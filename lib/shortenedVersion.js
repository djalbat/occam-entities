"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ShortenedVersion;
    }
});
var _multiplers = require("./multiplers");
var _version = require("./utilities/version");
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
var ShortenedVersion = /*#__PURE__*/ function() {
    function ShortenedVersion(majorNumber, minorNumber) {
        _classCallCheck(this, ShortenedVersion);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
    }
    _createClass(ShortenedVersion, [
        {
            key: "getMajorNumber",
            value: function getMajorNumber() {
                return this.majorNumber;
            }
        },
        {
            key: "getMinorNumber",
            value: function getMinorNumber() {
                return this.minorNumber;
            }
        },
        {
            key: "toString",
            value: function toString() {
                var string = "".concat(this.majorNumber, ".").concat(this.minorNumber);
                return string;
            }
        },
        {
            key: "toVersionNumber",
            value: function toVersionNumber() {
                var versionNumber = this.majorNumber * _multiplers.MAJOR_NUMBER_MULTIPLIER + this.minorNumber * _multiplers.MINOR_NUMBER_MULTIPLIER;
                return versionNumber;
            }
        }
    ], [
        {
            key: "fromString",
            value: function fromString(string) {
                var majorNumber = (0, _version.majorNumberFromString)(string), minorNumber = (0, _version.minorNumberFromString)(string), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = (0, _version.majorNumberFromNumber)(number), minorNumber = (0, _version.minorNumberFromNumber)(number), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        }
    ]);
    return ShortenedVersion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsIG1pbm9yTnVtYmVyRnJvbU51bWJlciwgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLCBtaW5vck51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b1ZlcnNpb25OdW1iZXIoKSB7XG4gICAgY29uc3QgdmVyc2lvbk51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNob3J0ZW5lZFZlcnNpb24iLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwiZ2V0TWFqb3JOdW1iZXIiLCJnZXRNaW5vck51bWJlciIsInRvU3RyaW5nIiwic3RyaW5nIiwidG9WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIk1BSk9SX05VTUJFUl9NVUxUSVBMSUVSIiwiTUlOT1JfTlVNQkVSX01VTFRJUExJRVIiLCJmcm9tU3RyaW5nIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwic2hvcnRlbmVkVmVyc2lvbiIsImZyb21WZXJzaW9uTnVtYmVyIiwibnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzswQkFINEM7dUJBQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixJQUFBLEFBQU1BLGlDQUFOO2FBQU1BLGlCQUNQQyxXQUFXLEVBQUVDLFdBQVc7OEJBRGpCRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVMsQUFBQyxHQUFzQixPQUFwQixJQUFJLENBQUNMLFdBQVcsRUFBQyxLQUFvQixPQUFqQixJQUFJLENBQUNDLFdBQVc7Z0JBRXRELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDUCxXQUFXLEdBQUdRLG1DQUF1QixHQUFHLElBQUksQ0FBQ1AsV0FBVyxHQUFHUSxtQ0FBdUI7Z0JBRTdHLE9BQU9GO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0wsTUFBTSxFQUFFO2dCQUN4QixJQUFNTCxjQUFjVyxJQUFBQSw4QkFBcUIsRUFBQ04sU0FDcENKLGNBQWNXLElBQUFBLDhCQUFxQixFQUFDUCxTQUNwQ1EsbUJBQW1CLElBN0JSZCxpQkE2QjZCQyxhQUFhQztnQkFFM0QsT0FBT1k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQlAsYUFBYSxFQUFFO2dCQUN0QyxJQUFNUSxTQUFTUixlQUNUUCxjQUFjZ0IsSUFBQUEsOEJBQXFCLEVBQUNELFNBQ3BDZCxjQUFjZ0IsSUFBQUEsOEJBQXFCLEVBQUNGLFNBQ3BDRixtQkFBbUIsSUF0Q1JkLGlCQXNDNkJDLGFBQWFDO2dCQUUzRCxPQUFPWTtZQUNUOzs7V0F6Q21CZCJ9