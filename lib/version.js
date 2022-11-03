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
var _versionChanges = require("./versionChanges");
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
            key: "change",
            value: function change(versionChange) {
                switch(versionChange){
                    case _versionChanges.MAJOR_VERSION_CHANGE:
                        this.bumpMajorNumber();
                        this.resetMinorNumber();
                        this.resetPatchNumber();
                        break;
                    case _versionChanges.MINOR_VERSION_CHANGE:
                        this.bumpMinorNumber();
                        this.resetPatchNumber();
                        break;
                    case _versionChanges.PATCH_VERSION_CHANGE:
                        this.bumpPatchNumber();
                        break;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9WRVJTSU9OX0NIQU5HRSwgTUlOT1JfVkVSU0lPTl9DSEFOR0UsIFBBVENIX1ZFUlNJT05fQ0hBTkdFIH0gZnJvbSBcIi4vdmVyc2lvbkNoYW5nZXNcIjtcbmltcG9ydCB7IE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSLCBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiwgUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBtaW5vck51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBwYXRjaE51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBtYWpvck51bWJlckZyb21TdHJpbmcsXG4gICAgICAgICBtaW5vck51bWJlckZyb21TdHJpbmcsXG4gICAgICAgICBwYXRjaE51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcE1ham9yTnVtYmVyKCkge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIGJ1bXBNaW5vck51bWJlcigpIHtcbiAgICB0aGlzLm1pbm9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxO1xuICB9XG5cbiAgcmVzZXRNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gMDtcbiAgfVxuXG4gIHJlc2V0TWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciA9IDA7XG4gIH1cblxuICByZXNldFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSAwO1xuICB9XG5cbiAgY2hhbmdlKHZlcnNpb25DaGFuZ2UpIHtcbiAgICBzd2l0Y2ggKHZlcnNpb25DaGFuZ2UpIHtcbiAgICAgIGNhc2UgTUFKT1JfVkVSU0lPTl9DSEFOR0U6XG4gICAgICAgIHRoaXMuYnVtcE1ham9yTnVtYmVyKCk7XG4gICAgICAgIHRoaXMucmVzZXRNaW5vck51bWJlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNSU5PUl9WRVJTSU9OX0NIQU5HRTpcbiAgICAgICAgdGhpcy5idW1wTWlub3JOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldFBhdGNoTnVtYmVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFBBVENIX1ZFUlNJT05fQ0hBTkdFOlxuICAgICAgICB0aGlzLmJ1bXBQYXRjaE51bWJlcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGxldCBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiA9IGZhbHNlO1xuXG4gICAgaWYgKHNob3J0ZW5lZFZlcnNpb24gPT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWFqb3JOdW1iZXIgPSBzaG9ydGVuZWRWZXJzaW9uLmdldE1ham9yTnVtYmVyKCk7XG5cbiAgICAgIGlmICh0aGlzLm1ham9yTnVtYmVyID09PSBtYWpvck51bWJlcikge1xuICAgICAgICBjb25zdCBtaW5vck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5taW5vck51bWJlciA+PSBtaW5vck51bWJlcikge1xuICAgICAgICAgIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMucGF0Y2hOdW1iZXIgKiBQQVRDSF9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gMCxcbiAgICAgICAgICBtaW5vck51bWJlciA9IDAsXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSAwLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uKHZlcnNpb24pIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IHZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHZlcnNpb24uZ2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTsgLy8vXG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsInJlc2V0TWFqb3JOdW1iZXIiLCJyZXNldE1pbm9yTnVtYmVyIiwicmVzZXRQYXRjaE51bWJlciIsImNoYW5nZSIsInZlcnNpb25DaGFuZ2UiLCJNQUpPUl9WRVJTSU9OX0NIQU5HRSIsIk1JTk9SX1ZFUlNJT05fQ0hBTkdFIiwiUEFUQ0hfVkVSU0lPTl9DSEFOR0UiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJhc051bWJlciIsIm51bWJlciIsIk1BSk9SX05VTUJFUl9NVUxUSVBMSUVSIiwiTUlOT1JfTlVNQkVSX01VTFRJUExJRVIiLCJQQVRDSF9OVU1CRVJfTVVMVElQTElFUiIsInRvU3RyaW5nIiwic3RyaW5nIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsInZlcnNpb24iLCJmcm9tTm90aGluZyIsImZyb21WZXJzaW9uIiwiZnJvbVZlcnNpb25OdW1iZXIiLCJ2ZXJzaW9uTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs4QkFUNEQ7MEJBQ1M7dUJBTXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFBLEFBQU1BLHdCQUFOO2FBQU1BLFFBQ1BDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxXQUFXOzhCQUQ5Qkg7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2lCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQUksQ0FBQ04sV0FBVyxJQUFJO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBSSxDQUFDTixXQUFXLElBQUk7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLElBQUksQ0FBQ1QsV0FBVyxHQUFHO1lBQ3JCOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsSUFBSSxDQUFDVCxXQUFXLEdBQUc7WUFDckI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixJQUFJLENBQUNULFdBQVcsR0FBRztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUU7Z0JBQ3BCLE9BQVFBO29CQUNOLEtBQUtDLG9DQUFvQjt3QkFDdkIsSUFBSSxDQUFDUixlQUFlO3dCQUNwQixJQUFJLENBQUNJLGdCQUFnQjt3QkFDckIsSUFBSSxDQUFDQyxnQkFBZ0I7d0JBRXJCLEtBQU07b0JBRVIsS0FBS0ksb0NBQW9CO3dCQUN2QixJQUFJLENBQUNSLGVBQWU7d0JBQ3BCLElBQUksQ0FBQ0ksZ0JBQWdCO3dCQUNyQixLQUFNO29CQUVSLEtBQUtLLG9DQUFvQjt3QkFDdkIsSUFBSSxDQUFDUixlQUFlO3dCQUNwQixLQUFNO2dCQUNWO1lBQ0Y7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRTtnQkFDdEMsSUFBSUMsMEJBQTBCLEtBQUs7Z0JBRW5DLElBQUlELHFCQUFxQixJQUFJLEVBQUU7b0JBQzdCQywwQkFBMEIsSUFBSTtnQkFDaEMsT0FBTztvQkFDTCxJQUFNbkIsY0FBY2tCLGlCQUFpQmYsY0FBYztvQkFFbkQsSUFBSSxJQUFJLENBQUNILFdBQVcsS0FBS0EsYUFBYTt3QkFDcEMsSUFBTUMsY0FBY2lCLGlCQUFpQmQsY0FBYzt3QkFFbkQsSUFBSSxJQUFJLENBQUNILFdBQVcsSUFBSUEsYUFBYTs0QkFDbkNrQiwwQkFBMEIsSUFBSTt3QkFDaEMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVMsSUFBSSxDQUFDckIsV0FBVyxHQUFHc0IsbUNBQXVCLEdBQUcsSUFBSSxDQUFDckIsV0FBVyxHQUFHc0IsbUNBQXVCLEdBQUcsSUFBSSxDQUFDckIsV0FBVyxHQUFHc0IsbUNBQXVCO2dCQUVuSixPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBUyxBQUFDLEdBQXNCLE9BQXBCLElBQUksQ0FBQzFCLFdBQVcsRUFBQyxLQUF1QixPQUFwQixJQUFJLENBQUNDLFdBQVcsRUFBQyxLQUFvQixPQUFqQixJQUFJLENBQUNDLFdBQVc7Z0JBRTFFLE9BQU93QjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFdBQVdELE1BQU0sRUFBRTtnQkFDeEIsSUFBTTFCLGNBQWM0QixJQUFBQSw4QkFBcUIsRUFBQ0YsU0FDcEN6QixjQUFjNEIsSUFBQUEsOEJBQXFCLEVBQUNILFNBQ3BDeEIsY0FBYzRCLElBQUFBLDhCQUFxQixFQUFDSixTQUNwQ0ssVUFBVSxJQW5HQ2hDLFFBbUdXQyxhQUFhQyxhQUFhQztnQkFFdEQsT0FBTzZCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNaEMsY0FBYyxHQUNkQyxjQUFjLEdBQ2RDLGNBQWMsR0FDZDZCLFVBQVUsSUE1R0NoQyxRQTRHV0MsYUFBYUMsYUFBYUM7Z0JBRXRELE9BQU82QjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUYsT0FBTyxFQUFFO2dCQUMxQixJQUFNL0IsY0FBYytCLFFBQVE1QixjQUFjLElBQ3BDRixjQUFjOEIsUUFBUTNCLGNBQWMsSUFDcENGLGNBQWM2QixRQUFRMUIsY0FBYztnQkFFMUMwQixVQUFVLElBdEhPaEMsUUFzSEtDLGFBQWFDLGFBQWFDLGNBQWMsR0FBRztnQkFFakUsT0FBTzZCO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWQsU0FBU2MsZUFDVG5DLGNBQWNvQyxJQUFBQSw4QkFBcUIsRUFBQ2YsU0FDcENwQixjQUFjb0MsSUFBQUEsOEJBQXFCLEVBQUNoQixTQUNwQ25CLGNBQWNvQyxJQUFBQSw4QkFBcUIsRUFBQ2pCLFNBQ3BDVSxVQUFVLElBaElDaEMsUUFnSVdDLGFBQWFDLGFBQWFDO2dCQUV0RCxPQUFPNkI7WUFDVDs7O1dBbkltQmhDIn0=