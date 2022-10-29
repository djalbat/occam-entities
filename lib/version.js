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
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIsIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSIH0gZnJvbSBcIi4vbXVsdGlwbGVyc1wiO1xuaW1wb3J0IHsgbWFqb3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBnZXRQYXRjaE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaE51bWJlcjtcbiAgfVxuXG4gIGJ1bXBNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wTWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciArPSAxO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgbGV0IG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBtYWpvck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKTtcblxuICAgIGlmICh0aGlzLm1ham9yTnVtYmVyID09PSBtYWpvck51bWJlcikge1xuICAgICAgY29uc3QgbWlub3JOdW1iZXIgPSBzaG9ydGVuZWRWZXJzaW9uLmdldE1pbm9yTnVtYmVyKCk7XG5cbiAgICAgIGlmICh0aGlzLm1pbm9yTnVtYmVyID49IG1pbm9yTnVtYmVyKSB7XG4gICAgICAgIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBhc051bWJlcigpIHtcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyICogTUFKT1JfTlVNQkVSX01VTFRJUExJRVIgKyB0aGlzLm1pbm9yTnVtYmVyICogTUlOT1JfTlVNQkVSX01VTFRJUExJRVIgKyB0aGlzLnBhdGNoTnVtYmVyICogUEFUQ0hfTlVNQkVSX01VTFRJUExJRVI7XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfS4ke3RoaXMucGF0Y2hOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSB0aGlzLm1ham9yTnVtYmVyLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gdGhpcy5taW5vck51bWJlcixcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHRoaXMucGF0Y2hOdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ham9yTnVtYmVyLFxuICAgICAgICAgICAgbWlub3JOdW1iZXIsXG4gICAgICAgICAgICBwYXRjaE51bWJlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyIH0gPSBqc29uLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb25OdW1iZXIodmVyc2lvbk51bWJlcikge1xuICAgIGNvbnN0IG51bWJlciA9IHZlcnNpb25OdW1iZXIsIC8vL1xuICAgICAgICAgIG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZlcnNpb24iLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwicGF0Y2hOdW1iZXIiLCJnZXRNYWpvck51bWJlciIsImdldE1pbm9yTnVtYmVyIiwiZ2V0UGF0Y2hOdW1iZXIiLCJidW1wTWFqb3JOdW1iZXIiLCJidW1wTWlub3JOdW1iZXIiLCJidW1wUGF0Y2hOdW1iZXIiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJhc051bWJlciIsIm51bWJlciIsIk1BSk9SX05VTUJFUl9NVUxUSVBMSUVSIiwiTUlOT1JfTlVNQkVSX01VTFRJUExJRVIiLCJQQVRDSF9OVU1CRVJfTVVMVElQTElFUiIsInRvU3RyaW5nIiwic3RyaW5nIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwidmVyc2lvbiIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJmcm9tVmVyc2lvbk51bWJlciIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzBCQVJxRTt1QkFNcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsd0JBQU47YUFBTUEsUUFDUEMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7OEJBRDlCSDtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBSSxDQUFDTixXQUFXLElBQUk7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQUksQ0FBQ04sV0FBVyxJQUFJO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUU7Z0JBQ3RDLElBQUlDLDBCQUEwQixLQUFLO2dCQUVuQyxJQUFNWCxjQUFjVSxpQkFBaUJQLGNBQWM7Z0JBRW5ELElBQUksSUFBSSxDQUFDSCxXQUFXLEtBQUtBLGFBQWE7b0JBQ3BDLElBQU1DLGNBQWNTLGlCQUFpQk4sY0FBYztvQkFFbkQsSUFBSSxJQUFJLENBQUNILFdBQVcsSUFBSUEsYUFBYTt3QkFDbkNVLDBCQUEwQixJQUFJO29CQUNoQyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVMsSUFBSSxDQUFDYixXQUFXLEdBQUdjLG1DQUF1QixHQUFHLElBQUksQ0FBQ2IsV0FBVyxHQUFHYyxtQ0FBdUIsR0FBRyxJQUFJLENBQUNiLFdBQVcsR0FBR2MsbUNBQXVCO2dCQUVuSixPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxBQUFDLEdBQXNCLE9BQXBCLElBQUksQ0FBQ2xCLFdBQVcsRUFBQyxLQUF1QixPQUFwQixJQUFJLENBQUNDLFdBQVcsRUFBQyxLQUFvQixPQUFqQixJQUFJLENBQUNDLFdBQVc7Z0JBRTFFLE9BQU9nQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTW5CLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCQyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkMsY0FBYyxJQUFJLENBQUNBLFdBQVcsRUFDOUJrQixPQUFPO29CQUNMcEIsYUFBQUE7b0JBQ0FDLGFBQUFBO29CQUNBQyxhQUFBQTtnQkFDRjtnQkFFTixPQUFPa0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQVFwQixjQUEwQ29CLEtBQTFDcEIsYUFBYUMsY0FBNkJtQixLQUE3Qm5CLGFBQWFDLGNBQWdCa0IsS0FBaEJsQixhQUM1Qm9CLFVBQVUsSUExRUN2QixRQTBFV0MsYUFBYUMsYUFBYUM7Z0JBRXRELE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBV0wsTUFBTSxFQUFFO2dCQUN4QixJQUFNbEIsY0FBY3dCLElBQUFBLDhCQUFxQixFQUFDTixTQUNwQ2pCLGNBQWN3QixJQUFBQSw4QkFBcUIsRUFBQ1AsU0FDcENoQixjQUFjd0IsSUFBQUEsOEJBQXFCLEVBQUNSLFNBQ3BDSSxVQUFVLElBbkZDdkIsUUFtRldDLGFBQWFDLGFBQWFDO2dCQUV0RCxPQUFPb0I7WUFDVDs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFO2dCQUN0QyxJQUFNZixTQUFTZSxlQUNUNUIsY0FBYzZCLElBQUFBLDhCQUFxQixFQUFDaEIsU0FDcENaLGNBQWM2QixJQUFBQSw4QkFBcUIsRUFBQ2pCLFNBQ3BDWCxjQUFjNkIsSUFBQUEsOEJBQXFCLEVBQUNsQixTQUNwQ1MsVUFBVSxJQTdGQ3ZCLFFBNkZXQyxhQUFhQyxhQUFhQztnQkFFdEQsT0FBT29CO1lBQ1Q7OztXQWhHbUJ2QiJ9