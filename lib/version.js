"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Version;
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
var Version = /*#__PURE__*/ function() {
    function Version(majorNumber, minorNumber, patchNumber) {
        _classCallCheck(this, Version);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
        this.patchNumber = patchNumber;
    }
    _createClass(Version, [
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
            key: "getPatchNumber",
            value: function getPatchNumber() {
                return this.patchNumber;
            }
        },
        {
            key: "bumpMajorNumber",
            value: function bumpMajorNumber() {
                this.majorNumber += 1;
            }
        },
        {
            key: "bumpMinorNumber",
            value: function bumpMinorNumber() {
                this.minorNumber += 1;
            }
        },
        {
            key: "bumpPatchNumber",
            value: function bumpPatchNumber() {
                this.patchNumber += 1;
            }
        },
        {
            key: "matchesShortenedVersion",
            value: function matchesShortenedVersion(shortenedVersion) {
                var matchesShortenedVersion = false;
                var majorNumber = shortenedVersion.getMajorNumber();
                if (this.majorNumber === majorNumber) {
                    var minorNumber = shortenedVersion.getMinorNumber();
                    if (this.minorNumber >= minorNumber) {
                        matchesShortenedVersion = true;
                    }
                }
                return matchesShortenedVersion;
            }
        },
        {
            key: "asNumber",
            value: function asNumber() {
                var number = this.majorNumber * _multiplers.MAJOR_NUMBER_MULTIPLIER + this.minorNumber * _multiplers.MINOR_NUMBER_MULTIPLIER + this.patchNumber * _multiplers.PATCH_NUMBER_MULTIPLIER;
                return number;
            }
        },
        {
            key: "toString",
            value: function toString() {
                var string = "".concat(this.majorNumber, ".").concat(this.minorNumber, ".").concat(this.patchNumber);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var majorNumber = this.majorNumber, minorNumber = this.minorNumber, patchNumber = this.patchNumber, json = {
                    majorNumber: majorNumber,
                    minorNumber: minorNumber,
                    patchNumber: patchNumber
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var majorNumber = json.majorNumber, minorNumber = json.minorNumber, patchNumber = json.patchNumber, version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
        {
            key: "fromString",
            value: function fromString(string) {
                var majorNumber = (0, _version.majorNumberFromString)(string), minorNumber = (0, _version.minorNumberFromString)(string), patchNumber = (0, _version.patchNumberFromString)(string), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = (0, _version.majorNumberFromNumber)(number), minorNumber = (0, _version.minorNumberFromNumber)(number), patchNumber = (0, _version.patchNumberFromNumber)(number), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        }
    ]);
    return Version;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIsIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSIH0gZnJvbSBcIi4vbXVsdGlwbGVyc1wiO1xuaW1wb3J0IHsgbWFqb3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBnZXRQYXRjaE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaE51bWJlcjtcbiAgfVxuXG4gIGJ1bXBNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wTWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciArPSAxO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICBsZXQgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gc2hvcnRlbmVkVmVyc2lvbi5nZXRNYWpvck51bWJlcigpO1xuXG4gICAgaWYgKHRoaXMubWFqb3JOdW1iZXIgPT09IG1ham9yTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5vck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKTtcblxuICAgICAgaWYgKHRoaXMubWlub3JOdW1iZXIgPj0gbWlub3JOdW1iZXIpIHtcbiAgICAgICAgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMucGF0Y2hOdW1iZXIgKiBQQVRDSF9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIsXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSB0aGlzLm1pbm9yTnVtYmVyLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gdGhpcy5wYXRjaE51bWJlcixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWFqb3JOdW1iZXIsXG4gICAgICAgICAgICBtaW5vck51bWJlcixcbiAgICAgICAgICAgIHBhdGNoTnVtYmVyXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIgfSA9IGpzb24sXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsIm1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsImFzTnVtYmVyIiwibnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsIlBBVENIX05VTUJFUl9NVUxUSVBMSUVSIiwidG9TdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2ZXJzaW9uIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MEJBUnFFO3VCQU1wRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsV0FBVzs4QkFEOUJIO1FBRWpCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQUksQ0FBQ04sV0FBVyxJQUFJO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBSSxDQUFDTixXQUFXLElBQUk7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxnQkFBZ0IsRUFBRTtnQkFDeEMsSUFBSUQsMEJBQTBCLEtBQUs7Z0JBRW5DLElBQU1ULGNBQWNVLGlCQUFpQlAsY0FBYztnQkFFbkQsSUFBSSxJQUFJLENBQUNILFdBQVcsS0FBS0EsYUFBYTtvQkFDcEMsSUFBTUMsY0FBY1MsaUJBQWlCTixjQUFjO29CQUVuRCxJQUFJLElBQUksQ0FBQ0gsV0FBVyxJQUFJQSxhQUFhO3dCQUNuQ1EsMEJBQTBCLElBQUk7b0JBQ2hDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxJQUFJLENBQUNaLFdBQVcsR0FBR2EsbUNBQXVCLEdBQUcsSUFBSSxDQUFDWixXQUFXLEdBQUdhLG1DQUF1QixHQUFHLElBQUksQ0FBQ1osV0FBVyxHQUFHYSxtQ0FBdUI7Z0JBRW5KLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLEFBQUMsR0FBc0IsT0FBcEIsSUFBSSxDQUFDakIsV0FBVyxFQUFDLEtBQXVCLE9BQXBCLElBQUksQ0FBQ0MsV0FBVyxFQUFDLEtBQW9CLE9BQWpCLElBQUksQ0FBQ0MsV0FBVztnQkFFMUUsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1sQixjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkMsY0FBYyxJQUFJLENBQUNBLFdBQVcsRUFDOUJDLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCaUIsT0FBTztvQkFDTG5CLGFBQUFBO29CQUNBQyxhQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFO2dCQUNwQixJQUFRbkIsY0FBMENtQixLQUExQ25CLGFBQWFDLGNBQTZCa0IsS0FBN0JsQixhQUFhQyxjQUFnQmlCLEtBQWhCakIsYUFDNUJtQixVQUFVLElBMUVDdEIsUUEwRVdDLGFBQWFDLGFBQWFDO2dCQUV0RCxPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFdBQVdMLE1BQU0sRUFBRTtnQkFDeEIsSUFBTWpCLGNBQWN1QixJQUFBQSw4QkFBcUIsRUFBQ04sU0FDcENoQixjQUFjdUIsSUFBQUEsOEJBQXFCLEVBQUNQLFNBQ3BDZixjQUFjdUIsSUFBQUEsOEJBQXFCLEVBQUNSLFNBQ3BDSSxVQUFVLElBbkZDdEIsUUFtRldDLGFBQWFDLGFBQWFDO2dCQUV0RCxPQUFPbUI7WUFDVDs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFO2dCQUN0QyxJQUFNZixTQUFTZSxlQUNUM0IsY0FBYzRCLElBQUFBLDhCQUFxQixFQUFDaEIsU0FDcENYLGNBQWM0QixJQUFBQSw4QkFBcUIsRUFBQ2pCLFNBQ3BDVixjQUFjNEIsSUFBQUEsOEJBQXFCLEVBQUNsQixTQUNwQ1MsVUFBVSxJQTdGQ3RCLFFBNkZXQyxhQUFhQyxhQUFhQztnQkFFdEQsT0FBT21CO1lBQ1Q7OztXQWhHbUJ0QiJ9