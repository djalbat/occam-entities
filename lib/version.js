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
                        this.resetMajorNumber();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9WRVJTSU9OX0NIQU5HRSwgTUlOT1JfVkVSU0lPTl9DSEFOR0UsIFBBVENIX1ZFUlNJT05fQ0hBTkdFIH0gZnJvbSBcIi4vdmVyc2lvbkNoYW5nZXNcIjtcbmltcG9ydCB7IE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSLCBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiwgUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi9tdWx0aXBsZXJzXCI7XG5pbXBvcnQgeyBtYWpvck51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBtaW5vck51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBwYXRjaE51bWJlckZyb21OdW1iZXIsXG4gICAgICAgICBtYWpvck51bWJlckZyb21TdHJpbmcsXG4gICAgICAgICBtaW5vck51bWJlckZyb21TdHJpbmcsXG4gICAgICAgICBwYXRjaE51bWJlckZyb21TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcE1ham9yTnVtYmVyKCkge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIGJ1bXBNaW5vck51bWJlcigpIHtcbiAgICB0aGlzLm1pbm9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxO1xuICB9XG5cbiAgcmVzZXRNYWpvck51bWJlcigpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gMDtcbiAgfVxuXG4gIHJlc2V0TWlub3JOdW1iZXIoKSB7XG4gICAgdGhpcy5taW5vck51bWJlciA9IDA7XG4gIH1cblxuICByZXNldFBhdGNoTnVtYmVyKCkge1xuICAgIHRoaXMucGF0Y2hOdW1iZXIgPSAwO1xuICB9XG5cbiAgY2hhbmdlKHZlcnNpb25DaGFuZ2UpIHtcbiAgICBzd2l0Y2ggKHZlcnNpb25DaGFuZ2UpIHtcbiAgICAgIGNhc2UgTUFKT1JfVkVSU0lPTl9DSEFOR0U6XG4gICAgICAgIHRoaXMuYnVtcE1ham9yTnVtYmVyKCk7XG4gICAgICAgIHRoaXMucmVzZXRNaW5vck51bWJlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNSU5PUl9WRVJTSU9OX0NIQU5HRTpcbiAgICAgICAgdGhpcy5idW1wTWlub3JOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5yZXNldE1ham9yTnVtYmVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFBBVENIX1ZFUlNJT05fQ0hBTkdFOlxuICAgICAgICB0aGlzLmJ1bXBQYXRjaE51bWJlcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIGxldCBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbiA9IGZhbHNlO1xuXG4gICAgaWYgKHNob3J0ZW5lZFZlcnNpb24gPT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWFqb3JOdW1iZXIgPSBzaG9ydGVuZWRWZXJzaW9uLmdldE1ham9yTnVtYmVyKCk7XG5cbiAgICAgIGlmICh0aGlzLm1ham9yTnVtYmVyID09PSBtYWpvck51bWJlcikge1xuICAgICAgICBjb25zdCBtaW5vck51bWJlciA9IHNob3J0ZW5lZFZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5taW5vck51bWJlciA+PSBtaW5vck51bWJlcikge1xuICAgICAgICAgIG1hdGNoZXNTaG9ydGVuZWRWZXJzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMucGF0Y2hOdW1iZXIgKiBQQVRDSF9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHt0aGlzLm1ham9yTnVtYmVyfS4ke3RoaXMubWlub3JOdW1iZXJ9LiR7dGhpcy5wYXRjaE51bWJlcn1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uKHZlcnNpb24pIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IHZlcnNpb24uZ2V0TWFqb3JOdW1iZXIoKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IHZlcnNpb24uZ2V0TWlub3JOdW1iZXIoKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHZlcnNpb24uZ2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTsgLy8vXG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHBhdGNoTnVtYmVyID0gcGF0Y2hOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgdmVyc2lvbiA9IG5ldyBWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlciwgcGF0Y2hOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVyc2lvbiIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsInJlc2V0TWFqb3JOdW1iZXIiLCJyZXNldE1pbm9yTnVtYmVyIiwicmVzZXRQYXRjaE51bWJlciIsImNoYW5nZSIsInZlcnNpb25DaGFuZ2UiLCJNQUpPUl9WRVJTSU9OX0NIQU5HRSIsIk1JTk9SX1ZFUlNJT05fQ0hBTkdFIiwiUEFUQ0hfVkVSU0lPTl9DSEFOR0UiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwibWF0Y2hlc1Nob3J0ZW5lZFZlcnNpb24iLCJhc051bWJlciIsIm51bWJlciIsIk1BSk9SX05VTUJFUl9NVUxUSVBMSUVSIiwiTUlOT1JfTlVNQkVSX01VTFRJUExJRVIiLCJQQVRDSF9OVU1CRVJfTVVMVElQTElFUiIsInRvU3RyaW5nIiwic3RyaW5nIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsInZlcnNpb24iLCJmcm9tVmVyc2lvbiIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7OEJBVDREOzBCQUNTO3VCQU1wRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx3QkFBTjthQUFNQSxRQUNQQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsV0FBVzs4QkFEOUJIO1FBRWpCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFJLENBQUNOLFdBQVcsSUFBSTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQUksQ0FBQ04sV0FBVyxJQUFJO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBSSxDQUFDTixXQUFXLElBQUk7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixJQUFJLENBQUNULFdBQVcsR0FBRztZQUNyQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLElBQUksQ0FBQ1QsV0FBVyxHQUFHO1lBQ3JCOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsSUFBSSxDQUFDVCxXQUFXLEdBQUc7WUFDckI7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsYUFBYSxFQUFFO2dCQUNwQixPQUFRQTtvQkFDTixLQUFLQyxvQ0FBb0I7d0JBQ3ZCLElBQUksQ0FBQ1IsZUFBZTt3QkFDcEIsSUFBSSxDQUFDSSxnQkFBZ0I7d0JBQ3JCLElBQUksQ0FBQ0MsZ0JBQWdCO3dCQUVyQixLQUFNO29CQUVSLEtBQUtJLG9DQUFvQjt3QkFDdkIsSUFBSSxDQUFDUixlQUFlO3dCQUNwQixJQUFJLENBQUNFLGdCQUFnQjt3QkFDckIsS0FBTTtvQkFFUixLQUFLTyxvQ0FBb0I7d0JBQ3ZCLElBQUksQ0FBQ1IsZUFBZTt3QkFDcEIsS0FBTTtnQkFDVjtZQUNGOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUU7Z0JBQ3RDLElBQUlDLDBCQUEwQixLQUFLO2dCQUVuQyxJQUFJRCxxQkFBcUIsSUFBSSxFQUFFO29CQUM3QkMsMEJBQTBCLElBQUk7Z0JBQ2hDLE9BQU87b0JBQ0wsSUFBTW5CLGNBQWNrQixpQkFBaUJmLGNBQWM7b0JBRW5ELElBQUksSUFBSSxDQUFDSCxXQUFXLEtBQUtBLGFBQWE7d0JBQ3BDLElBQU1DLGNBQWNpQixpQkFBaUJkLGNBQWM7d0JBRW5ELElBQUksSUFBSSxDQUFDSCxXQUFXLElBQUlBLGFBQWE7NEJBQ25Da0IsMEJBQTBCLElBQUk7d0JBQ2hDLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLElBQUksQ0FBQ3JCLFdBQVcsR0FBR3NCLG1DQUF1QixHQUFHLElBQUksQ0FBQ3JCLFdBQVcsR0FBR3NCLG1DQUF1QixHQUFHLElBQUksQ0FBQ3JCLFdBQVcsR0FBR3NCLG1DQUF1QjtnQkFFbkosT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVMsQUFBQyxHQUFzQixPQUFwQixJQUFJLENBQUMxQixXQUFXLEVBQUMsS0FBdUIsT0FBcEIsSUFBSSxDQUFDQyxXQUFXLEVBQUMsS0FBb0IsT0FBakIsSUFBSSxDQUFDQyxXQUFXO2dCQUUxRSxPQUFPd0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXRCxNQUFNLEVBQUU7Z0JBQ3hCLElBQU0xQixjQUFjNEIsSUFBQUEsOEJBQXFCLEVBQUNGLFNBQ3BDekIsY0FBYzRCLElBQUFBLDhCQUFxQixFQUFDSCxTQUNwQ3hCLGNBQWM0QixJQUFBQSw4QkFBcUIsRUFBQ0osU0FDcENLLFVBQVUsSUFuR0NoQyxRQW1HV0MsYUFBYUMsYUFBYUM7Z0JBRXRELE9BQU82QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUQsT0FBTyxFQUFFO2dCQUMxQixJQUFNL0IsY0FBYytCLFFBQVE1QixjQUFjLElBQ3BDRixjQUFjOEIsUUFBUTNCLGNBQWMsSUFDcENGLGNBQWM2QixRQUFRMUIsY0FBYztnQkFFMUMwQixVQUFVLElBN0dPaEMsUUE2R0tDLGFBQWFDLGFBQWFDLGNBQWMsR0FBRztnQkFFakUsT0FBTzZCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRTtnQkFDdEMsSUFBTWIsU0FBU2EsZUFDVGxDLGNBQWNtQyxJQUFBQSw4QkFBcUIsRUFBQ2QsU0FDcENwQixjQUFjbUMsSUFBQUEsOEJBQXFCLEVBQUNmLFNBQ3BDbkIsY0FBY21DLElBQUFBLDhCQUFxQixFQUFDaEIsU0FDcENVLFVBQVUsSUF2SENoQyxRQXVIV0MsYUFBYUMsYUFBYUM7Z0JBRXRELE9BQU82QjtZQUNUOzs7V0ExSG1CaEMifQ==