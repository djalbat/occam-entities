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
                if (shortenedVersion === null) {
                    matchesShortenedVersion = true;
                } else {
                    var majorNumber = shortenedVersion.getMajorNumber();
                    if (this.majorNumber === majorNumber) {
                        var minorNumber = shortenedVersion.getMinorNumber();
                        if (this.minorNumber >= minorNumber) {
                            matchesShortenedVersion = true;
                        }
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
            key: "fromVersion",
            value: function fromVersion(version) {
                var majorNumber = version.getMajorNumber(), minorNumber = version.getMinorNumber(), patchNumber = version.getPatchNumber();
                version = new Version(majorNumber, minorNumber, patchNumber); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIsIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSIH0gZnJvbSBcIi4vbXVsdGlwbGVyc1wiO1xuaW1wb3J0IHsgbWFqb3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBnZXRQYXRjaE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaE51bWJlcjtcbiAgfVxuXG4gIGJ1bXBNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wTWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciArPSAxO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgbGV0IG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gZmFsc2U7XG5cbiAgICBpZiAoc2hvcnRlbmVkVmVyc2lvbiA9PT0gbnVsbCkge1xuICAgICAgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYWpvck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKTtcblxuICAgICAgaWYgKHRoaXMubWFqb3JOdW1iZXIgPT09IG1ham9yTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1pbm9yTnVtYmVyID0gc2hvcnRlbmVkVmVyc2lvbi5nZXRNaW5vck51bWJlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLm1pbm9yTnVtYmVyID49IG1pbm9yTnVtYmVyKSB7XG4gICAgICAgICAgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgYXNOdW1iZXIoKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5tYWpvck51bWJlciAqIE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSICsgdGhpcy5taW5vck51bWJlciAqIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSICsgdGhpcy5wYXRjaE51bWJlciAqIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubWFqb3JOdW1iZXJ9LiR7dGhpcy5taW5vck51bWJlcn0uJHt0aGlzLnBhdGNoTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdGhpcy5tYWpvck51bWJlcixcbiAgICAgICAgICBtaW5vck51bWJlciA9IHRoaXMubWlub3JOdW1iZXIsXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSB0aGlzLnBhdGNoTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYWpvck51bWJlcixcbiAgICAgICAgICAgIG1pbm9yTnVtYmVyLFxuICAgICAgICAgICAgcGF0Y2hOdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlciB9ID0ganNvbixcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uKHZlcnNpb24pIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IHZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHZlcnNpb24uZ2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTsgLy8vXG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiIsImFzTnVtYmVyIiwibnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsIlBBVENIX05VTUJFUl9NVUxUSVBMSUVSIiwidG9TdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2ZXJzaW9uIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsImZyb21WZXJzaW9uIiwiZnJvbVZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzswQkFScUU7dUJBTXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxXQUFXOzhCQUQ5Qkg7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2lCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQUksQ0FBQ04sV0FBVyxJQUFJO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBSSxDQUFDTixXQUFXLElBQUk7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNo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