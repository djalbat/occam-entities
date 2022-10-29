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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsIG1pbm9yTnVtYmVyRnJvbU51bWJlciwgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLCBtaW5vck51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogTUFKT1JfTlVNQkVSX01VTFRJUExJRVIgKyB0aGlzLm1pbm9yTnVtYmVyICogTUlOT1JfTlVNQkVSX01VTFRJUExJRVI7XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdGhpcy5tYWpvck51bWJlcixcbiAgICAgICAgICBtaW5vck51bWJlciA9IHRoaXMubWlub3JOdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ham9yTnVtYmVyLFxuICAgICAgICAgICAgbWlub3JOdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyIH0gPSBqc29uLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IG5ldyBTaG9ydGVuZWRWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlcik7XG5cbiAgICByZXR1cm4gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2hvcnRlbmVkVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJnZXRNYWpvck51bWJlciIsImdldE1pbm9yTnVtYmVyIiwiYXNOdW1iZXIiLCJudW1iZXIiLCJNQUpPUl9OVU1CRVJfTVVMVElQTElFUiIsIk1JTk9SX05VTUJFUl9NVUxUSVBMSUVSIiwidG9TdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MEJBSDRDO3VCQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsV0FBVyxFQUFFQyxXQUFXOzhCQURqQkY7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLElBQUksQ0FBQ0wsV0FBVyxHQUFHTSxtQ0FBdUIsR0FBRyxJQUFJLENBQUNMLFdBQVcsR0FBR00sbUNBQXVCO2dCQUV0RyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxBQUFDLEdBQXNCLE9BQXBCLElBQUksQ0FBQ1QsV0FBVyxFQUFDLEtBQW9CLE9BQWpCLElBQUksQ0FBQ0MsV0FBVztnQkFFdEQsT0FBT1E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1WLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCQyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QlUsT0FBTztvQkFDTFgsYUFBQUE7b0JBQ0FDLGFBQUFBO2dCQUNGO2dCQUVOLE9BQU9VO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFO2dCQUNwQixJQUFRWCxjQUE2QlcsS0FBN0JYLGFBQWFDLGNBQWdCVSxLQUFoQlYsYUFDZlksbUJBQW1CLElBdkNSZCxpQkF1QzZCQyxhQUFhQztnQkFFM0QsT0FBT1k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFdBQVdMLE1BQU0sRUFBRTtnQkFDeEIsSUFBTVQsY0FBY2UsSUFBQUEsOEJBQXFCLEVBQUNOLFNBQ3BDUixjQUFjZSxJQUFBQSw4QkFBcUIsRUFBQ1AsU0FDcENJLG1CQUFtQixJQS9DUmQsaUJBK0M2QkMsYUFBYUM7Z0JBRTNELE9BQU9ZO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWIsU0FBU2EsZUFDVGxCLGNBQWNtQixJQUFBQSw4QkFBcUIsRUFBQ2QsU0FDcENKLGNBQWNtQixJQUFBQSw4QkFBcUIsRUFBQ2YsU0FDcENRLG1CQUFtQixJQXhEUmQsaUJBd0Q2QkMsYUFBYUM7Z0JBRTNELE9BQU9ZO1lBQ1Q7OztXQTNEbUJkIn0=