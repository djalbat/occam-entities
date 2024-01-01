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
var Version = /*#__PURE__*/ function() {
    function Version(majorNumber, minorNumber, patchNumber) {
        _class_call_check(this, Version);
        this.majorNumber = majorNumber;
        this.minorNumber = minorNumber;
        this.patchNumber = patchNumber;
    }
    _create_class(Version, [
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
            key: "resetMajorNumber",
            value: function resetMajorNumber() {
                this.majorNumber = 0;
            }
        },
        {
            key: "resetMinorNumber",
            value: function resetMinorNumber() {
                this.minorNumber = 0;
            }
        },
        {
            key: "resetPatchNumber",
            value: function resetPatchNumber() {
                this.patchNumber = 0;
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
            key: "toString",
            value: function toString() {
                var string = "".concat(this.majorNumber, ".").concat(this.minorNumber, ".").concat(this.patchNumber);
                return string;
            }
        },
        {
            key: "toVersionNumber",
            value: function toVersionNumber() {
                var versionNumber = this.majorNumber * _multiplers.MAJOR_NUMBER_MULTIPLIER + this.minorNumber * _multiplers.MINOR_NUMBER_MULTIPLIER + this.patchNumber * _multiplers.PATCH_NUMBER_MULTIPLIER;
                return versionNumber;
            }
        }
    ], [
        {
            key: "fromString",
            value: function fromString(string) {
                var majorNumber = (0, _version.majorNumberFromString)(string), minorNumber = (0, _version.minorNumberFromString)(string), patchNumber = (0, _version.patchNumberFromString)(string), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var majorNumber = 0, minorNumber = 0, patchNumber = 0, version = new Version(majorNumber, minorNumber, patchNumber);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiwgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIsIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSIH0gZnJvbSBcIi4vbXVsdGlwbGVyc1wiO1xuaW1wb3J0IHsgbWFqb3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tTnVtYmVyLFxuICAgICAgICAgbWFqb3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgbWlub3JOdW1iZXJGcm9tU3RyaW5nLFxuICAgICAgICAgcGF0Y2hOdW1iZXJGcm9tU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVyc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlcjtcbiAgfVxuXG4gIGdldE1ham9yTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm1ham9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWlub3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlub3JOdW1iZXI7XG4gIH1cblxuICBnZXRQYXRjaE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRjaE51bWJlcjtcbiAgfVxuXG4gIGJ1bXBNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wTWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciArPSAxO1xuICB9XG5cbiAgYnVtcFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIHJlc2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgdGhpcy5tYWpvck51bWJlciA9IDA7XG4gIH1cblxuICByZXNldE1pbm9yTnVtYmVyKCkge1xuICAgIHRoaXMubWlub3JOdW1iZXIgPSAwO1xuICB9XG5cbiAgcmVzZXRQYXRjaE51bWJlcigpIHtcbiAgICB0aGlzLnBhdGNoTnVtYmVyID0gMDtcbiAgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7XG4gICAgbGV0IG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gZmFsc2U7XG5cbiAgICBpZiAoc2hvcnRlbmVkVmVyc2lvbiA9PT0gbnVsbCkge1xuICAgICAgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYWpvck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKTtcblxuICAgICAgaWYgKHRoaXMubWFqb3JOdW1iZXIgPT09IG1ham9yTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1pbm9yTnVtYmVyID0gc2hvcnRlbmVkVmVyc2lvbi5nZXRNaW5vck51bWJlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLm1pbm9yTnVtYmVyID49IG1pbm9yTnVtYmVyKSB7XG4gICAgICAgICAgbWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfS4ke3RoaXMucGF0Y2hOdW1iZXJ9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b1ZlcnNpb25OdW1iZXIoKSB7XG4gICAgY29uc3QgdmVyc2lvbk51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMucGF0Y2hOdW1iZXIgKiBQQVRDSF9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiB2ZXJzaW9uTnVtYmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSAwLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gMCxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IDAsXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnNpb24odmVyc2lvbikge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdmVyc2lvbi5nZXRNYWpvck51bWJlcigpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gdmVyc2lvbi5nZXRNaW5vck51bWJlcigpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gdmVyc2lvbi5nZXRQYXRjaE51bWJlcigpO1xuXG4gICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpOyAvLy9cblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwicGF0Y2hOdW1iZXIiLCJnZXRNYWpvck51bWJlciIsImdldE1pbm9yTnVtYmVyIiwiZ2V0UGF0Y2hOdW1iZXIiLCJidW1wTWFqb3JOdW1iZXIiLCJidW1wTWlub3JOdW1iZXIiLCJidW1wUGF0Y2hOdW1iZXIiLCJyZXNldE1ham9yTnVtYmVyIiwicmVzZXRNaW5vck51bWJlciIsInJlc2V0UGF0Y2hOdW1iZXIiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJ0b1N0cmluZyIsInN0cmluZyIsInRvVmVyc2lvbk51bWJlciIsInZlcnNpb25OdW1iZXIiLCJNQUpPUl9OVU1CRVJfTVVMVElQTElFUiIsIk1JTk9SX05VTUJFUl9NVUxUSVBMSUVSIiwiUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIiLCJmcm9tU3RyaW5nIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwidmVyc2lvbiIsImZyb21Ob3RoaW5nIiwiZnJvbVZlcnNpb24iLCJmcm9tVmVyc2lvbk51bWJlciIsIm51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MEJBUnFFO3VCQU1wRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx3QkFBRCxBQUFMO2FBQU1BLFFBQ1BDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxXQUFXO2dDQUQ5Qkg7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFdBQVcsR0FBRztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFdBQVcsR0FBRztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNULFdBQVcsR0FBRztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFJRCxxQkFBcUIsTUFBTTtvQkFDN0JDLDBCQUEwQjtnQkFDNUIsT0FBTztvQkFDTCxJQUFNZCxjQUFjYSxpQkFBaUJWLGNBQWM7b0JBRW5ELElBQUksSUFBSSxDQUFDSCxXQUFXLEtBQUtBLGFBQWE7d0JBQ3BDLElBQU1DLGNBQWNZLGlCQUFpQlQsY0FBYzt3QkFFbkQsSUFBSSxJQUFJLENBQUNILFdBQVcsSUFBSUEsYUFBYTs0QkFDbkNhLDBCQUEwQjt3QkFDNUI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLEFBQUMsR0FBc0IsT0FBcEIsSUFBSSxDQUFDaEIsV0FBVyxFQUFDLEtBQXVCLE9BQXBCLElBQUksQ0FBQ0MsV0FBVyxFQUFDLEtBQW9CLE9BQWpCLElBQUksQ0FBQ0MsV0FBVztnQkFFMUUsT0FBT2M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDbEIsV0FBVyxHQUFHbUIsbUNBQXVCLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxHQUFHbUIsbUNBQXVCLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxHQUFHbUIsbUNBQXVCO2dCQUUxSixPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLFdBQVdOLE1BQU07Z0JBQ3RCLElBQU1oQixjQUFjdUIsSUFBQUEsOEJBQXFCLEVBQUNQLFNBQ3BDZixjQUFjdUIsSUFBQUEsOEJBQXFCLEVBQUNSLFNBQ3BDZCxjQUFjdUIsSUFBQUEsOEJBQXFCLEVBQUNULFNBQ3BDVSxVQUFVLElBL0VDM0IsUUErRVdDLGFBQWFDLGFBQWFDO2dCQUV0RCxPQUFPd0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0zQixjQUFjLEdBQ2RDLGNBQWMsR0FDZEMsY0FBYyxHQUNkd0IsVUFBVSxJQXhGQzNCLFFBd0ZXQyxhQUFhQyxhQUFhQztnQkFFdEQsT0FBT3dCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZRixPQUFPO2dCQUN4QixJQUFNMUIsY0FBYzBCLFFBQVF2QixjQUFjLElBQ3BDRixjQUFjeUIsUUFBUXRCLGNBQWMsSUFDcENGLGNBQWN3QixRQUFRckIsY0FBYztnQkFFMUNxQixVQUFVLElBbEdPM0IsUUFrR0tDLGFBQWFDLGFBQWFDLGNBQWMsR0FBRztnQkFFakUsT0FBT3dCO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JYLGFBQWE7Z0JBQ3BDLElBQU1ZLFNBQVNaLGVBQ1RsQixjQUFjK0IsSUFBQUEsOEJBQXFCLEVBQUNELFNBQ3BDN0IsY0FBYytCLElBQUFBLDhCQUFxQixFQUFDRixTQUNwQzVCLGNBQWMrQixJQUFBQSw4QkFBcUIsRUFBQ0gsU0FDcENKLFVBQVUsSUE1R0MzQixRQTRHV0MsYUFBYUMsYUFBYUM7Z0JBRXRELE9BQU93QjtZQUNUOzs7V0EvR21CM0IifQ==