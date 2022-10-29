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
            key: "asNumber",
            value: function asNumber() {
                var number = this.majorNumber * _multiplers.MAJOR_NUMBER_MULTIPLIER + this.minorNumber * _multiplers.MINOR_NUMBER_MULTIPLIER;
                return number;
            }
        },
        {
            key: "matchVersion",
            value: function matchVersion(version) {
                var versionMatches = false;
                var majorNumber = version.getMajorNumber();
                if (this.majorNumber === majorNumber) {
                    var minorNumber = version.getMinorNumber();
                    if (this.minorNumber >= minorNumber) {
                        versionMatches = true;
                    }
                }
                return versionMatches;
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
            key: "toJSON",
            value: function toJSON() {
                var majorNumber = this.majorNumber, minorNumber = this.minorNumber, json = {
                    majorNumber: majorNumber,
                    minorNumber: minorNumber
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var majorNumber = json.majorNumber, minorNumber = json.minorNumber, shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsIG1pbm9yTnVtYmVyRnJvbU51bWJlciwgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLCBtaW5vck51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogTUFKT1JfTlVNQkVSX01VTFRJUExJRVIgKyB0aGlzLm1pbm9yTnVtYmVyICogTUlOT1JfTlVNQkVSX01VTFRJUExJRVI7XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgbWF0Y2hWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBsZXQgdmVyc2lvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdmVyc2lvbi5nZXRNYWpvck51bWJlcigpO1xuXG4gICAgaWYgKHRoaXMubWFqb3JOdW1iZXIgPT09IG1ham9yTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5vck51bWJlciA9IHZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKTtcblxuICAgICAgaWYgKHRoaXMubWlub3JOdW1iZXIgPj0gbWlub3JOdW1iZXIpIHtcbiAgICAgICAgdmVyc2lvbk1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJzaW9uTWF0Y2hlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubWFqb3JOdW1iZXJ9LiR7dGhpcy5taW5vck51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIsXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSB0aGlzLm1pbm9yTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYWpvck51bWJlcixcbiAgICAgICAgICAgIG1pbm9yTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG1ham9yTnVtYmVyLCBtaW5vck51bWJlciB9ID0ganNvbixcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNob3J0ZW5lZFZlcnNpb24iLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwiZ2V0TWFqb3JOdW1iZXIiLCJnZXRNaW5vck51bWJlciIsImFzTnVtYmVyIiwibnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsIm1hdGNoVmVyc2lvbiIsInZlcnNpb24iLCJ2ZXJzaW9uTWF0Y2hlcyIsInRvU3RyaW5nIiwic3RyaW5nIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic2hvcnRlbmVkVmVyc2lvbiIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJmcm9tVmVyc2lvbk51bWJlciIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzBCQUg0Qzt1QkFDMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLElBQUEsQUFBTUEsaUNBQU47YUFBTUEsaUJBQ1BDLFdBQVcsRUFBRUMsV0FBVzs4QkFEakJGO1FBRWpCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2lCQUhGRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxJQUFJLENBQUNMLFdBQVcsR0FBR00sbUNBQXVCLEdBQUcsSUFBSSxDQUFDTCxXQUFXLEdBQUdNLG1DQUF1QjtnQkFFdEcsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxPQUFPLEVBQUU7Z0JBQ3BCLElBQUlDLGlCQUFpQixLQUFLO2dCQUUxQixJQUFNVixjQUFjUyxRQUFRUCxjQUFjO2dCQUUxQyxJQUFJLElBQUksQ0FBQ0YsV0FBVyxLQUFLQSxhQUFhO29CQUNwQyxJQUFNQyxjQUFjUSxRQUFRTixjQUFjO29CQUUxQyxJQUFJLElBQUksQ0FBQ0YsV0FBVyxJQUFJQSxhQUFhO3dCQUNuQ1MsaUJBQWlCLElBQUk7b0JBQ3ZCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxBQUFDLEdBQXNCLE9BQXBCLElBQUksQ0FBQ1osV0FBVyxFQUFDLEtBQW9CLE9BQWpCLElBQUksQ0FBQ0MsV0FBVztnQkFFdEQsT0FBT1c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1iLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCQyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QmEsT0FBTztvQkFDTGQsYUFBQUE7b0JBQ0FDLGFBQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFO2dCQUNwQixJQUFRZCxjQUE2QmMsS0FBN0JkLGFBQWFDLGNBQWdCYSxLQUFoQmIsYUFDZmUsbUJBQW1CLElBdkRSakIsaUJBdUQ2QkMsYUFBYUM7Z0JBRTNELE9BQU9lO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXTCxNQUFNLEVBQUU7Z0JBQ3hCLElBQU1aLGNBQWNrQixJQUFBQSw4QkFBcUIsRUFBQ04sU0FDcENYLGNBQWNrQixJQUFBQSw4QkFBcUIsRUFBQ1AsU0FDcENJLG1CQUFtQixJQS9EUmpCLGlCQStENkJDLGFBQWFDO2dCQUUzRCxPQUFPZTtZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUU7Z0JBQ3RDLElBQU1oQixTQUFTZ0IsZUFDVHJCLGNBQWNzQixJQUFBQSw4QkFBcUIsRUFBQ2pCLFNBQ3BDSixjQUFjc0IsSUFBQUEsOEJBQXFCLEVBQUNsQixTQUNwQ1csbUJBQW1CLElBeEVSakIsaUJBd0U2QkMsYUFBYUM7Z0JBRTNELE9BQU9lO1lBQ1Q7OztXQTNFbUJqQiJ9