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
var ShortenedVersion = /*#__PURE__*/ function() {
    function ShortenedVersion(majorNumber, minorNumber) {
        _class_call_check(this, ShortenedVersion);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
    }
    _create_class(ShortenedVersion, [
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
        },
        {
            key: "getLeastMatchingVersionNumber",
            value: function getLeastMatchingVersionNumber() {
                var versionNumber = this.toVersionNumber(), leastMatchingVersionNumber = versionNumber; ///
                return leastMatchingVersionNumber;
            }
        },
        {
            key: "getGreatestMatchingVersionNumber",
            value: function getGreatestMatchingVersionNumber() {
                var majorNumber = this.majorNumber + 1, minorNumber = 0, shortenedVersion = ShortenedVersion.fromMajorNumberAndMinorNumber(majorNumber, minorNumber), shortenedVersionNumber = shortenedVersion.toVersionNumber(), greatestMatchingVersionNumber = shortenedVersionNumber - 1;
                return greatestMatchingVersionNumber;
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
        },
        {
            key: "fromMajorNumberAndMinorNumber",
            value: function fromMajorNumberAndMinorNumber(majorNumber, minorNumber) {
                var shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        }
    ]);
    return ShortenedVersion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsIG1pbm9yTnVtYmVyRnJvbU51bWJlciwgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLCBtaW5vck51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVuZWRWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IG1ham9yTnVtYmVyO1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSBtaW5vck51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b1ZlcnNpb25OdW1iZXIoKSB7XG4gICAgY29uc3QgdmVyc2lvbk51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgZ2V0TGVhc3RNYXRjaGluZ1ZlcnNpb25OdW1iZXIoKSB7XG4gICAgY29uc3QgdmVyc2lvbk51bWJlciA9IHRoaXMudG9WZXJzaW9uTnVtYmVyKCksXG4gICAgICAgICAgbGVhc3RNYXRjaGluZ1ZlcnNpb25OdW1iZXIgPSB2ZXJzaW9uTnVtYmVyOyAvLy9cblxuICAgIHJldHVybiBsZWFzdE1hdGNoaW5nVmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIGdldEdyZWF0ZXN0TWF0Y2hpbmdWZXJzaW9uTnVtYmVyKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdGhpcy5tYWpvck51bWJlciArIDEsXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSAwLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBTaG9ydGVuZWRWZXJzaW9uLmZyb21NYWpvck51bWJlckFuZE1pbm9yTnVtYmVyKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciksXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbk51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24udG9WZXJzaW9uTnVtYmVyKCksXG4gICAgICAgICAgZ3JlYXRlc3RNYXRjaGluZ1ZlcnNpb25OdW1iZXIgPSBzaG9ydGVuZWRWZXJzaW9uTnVtYmVyIC0gMTtcblxuICAgIHJldHVybiBncmVhdGVzdE1hdGNoaW5nVmVyc2lvbk51bWJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IG5ldyBTaG9ydGVuZWRWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlcik7XG5cbiAgICByZXR1cm4gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFqb3JOdW1iZXJBbmRNaW5vck51bWJlcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpIHtcbiAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uID0gbmV3IFNob3J0ZW5lZFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyKTtcblxuICAgIHJldHVybiBzaG9ydGVuZWRWZXJzaW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2hvcnRlbmVkVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJnZXRNYWpvck51bWJlciIsImdldE1pbm9yTnVtYmVyIiwidG9TdHJpbmciLCJzdHJpbmciLCJ0b1ZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsImdldExlYXN0TWF0Y2hpbmdWZXJzaW9uTnVtYmVyIiwibGVhc3RNYXRjaGluZ1ZlcnNpb25OdW1iZXIiLCJnZXRHcmVhdGVzdE1hdGNoaW5nVmVyc2lvbk51bWJlciIsInNob3J0ZW5lZFZlcnNpb24iLCJmcm9tTWFqb3JOdW1iZXJBbmRNaW5vck51bWJlciIsInNob3J0ZW5lZFZlcnNpb25OdW1iZXIiLCJncmVhdGVzdE1hdGNoaW5nVmVyc2lvbk51bWJlciIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJmcm9tVmVyc2lvbk51bWJlciIsIm51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7MEJBSDRDO3VCQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUYsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsV0FBVyxFQUFFQyxXQUFXO2dDQURqQkY7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsQUFBQyxHQUFzQixPQUFwQixJQUFJLENBQUNMLFdBQVcsRUFBQyxLQUFvQixPQUFqQixJQUFJLENBQUNDLFdBQVc7Z0JBRXRELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ1AsV0FBVyxHQUFHUSxtQ0FBdUIsR0FBRyxJQUFJLENBQUNQLFdBQVcsR0FBR1EsbUNBQXVCO2dCQUU3RyxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILGdCQUFnQixJQUFJLENBQUNELGVBQWUsSUFDcENLLDZCQUE2QkosZUFBZSxHQUFHO2dCQUVyRCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEdBQUcsR0FDakNDLGNBQWMsR0FDZFksbUJBQW1CZCxBQXBDUkEsaUJBb0N5QmUsNkJBQTZCLENBQUNkLGFBQWFDLGNBQy9FYyx5QkFBeUJGLGlCQUFpQlAsZUFBZSxJQUN6RFUsZ0NBQWdDRCx5QkFBeUI7Z0JBRS9ELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV1osTUFBTTtnQkFDdEIsSUFBTUwsY0FBY2tCLElBQUFBLDhCQUFxQixFQUFDYixTQUNwQ0osY0FBY2tCLElBQUFBLDhCQUFxQixFQUFDZCxTQUNwQ1EsbUJBQW1CLElBOUNSZCxpQkE4QzZCQyxhQUFhQztnQkFFM0QsT0FBT1k7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQmIsYUFBYTtnQkFDcEMsSUFBTWMsU0FBU2QsZUFDVFAsY0FBY3NCLElBQUFBLDhCQUFxQixFQUFDRCxTQUNwQ3BCLGNBQWNzQixJQUFBQSw4QkFBcUIsRUFBQ0YsU0FDcENSLG1CQUFtQixJQXZEUmQsaUJBdUQ2QkMsYUFBYUM7Z0JBRTNELE9BQU9ZO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJkLFdBQVcsRUFBRUMsV0FBVztnQkFDM0QsSUFBTVksbUJBQW1CLElBN0RSZCxpQkE2RDZCQyxhQUFhQztnQkFFM0QsT0FBT1k7WUFDVDs7O1dBaEVtQmQifQ==