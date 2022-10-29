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
var _necessary = require("necessary");
var _multiplers = require("./multiplers");
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
var second = _necessary.arrayUtilities.second;
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
                var majorNumber = majorNumberFromString(string), minorNumber = minorNumberFromString(string), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = majorNumberFromNumber(number), minorNumber = minorNumberFromNumber(number), shortenedVersion = new ShortenedVersion(majorNumber, minorNumber);
                return shortenedVersion;
            }
        }
    ]);
    return ShortenedVersion;
}();
function majorNumberFromNumber(number) {
    var majorNumber = number !== null ? Math.floor(number / _multiplers.MAJOR_NUMBER_MULTIPLIER) : 0; ///
    return majorNumber;
}
function minorNumberFromNumber(number) {
    var minorNumber = number !== null ? Math.floor(number / _multiplers.MINOR_NUMBER_MULTIPLIER) : 0; ///
    return minorNumber;
}
function majorNumberFromString(string) {
    var majorNumber = 0;
    if (string) {
        var matches = string.match(/^(\d+)\.\d+$/), secondMatch = second(matches);
        majorNumber = secondMatch; ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)$/), secondMatch = second(matches);
        minorNumber = secondMatch; ///
    }
    return minorNumber;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaG9ydGVuZWRWZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTUFKT1JfTlVNQkVSX01VTFRJUExJRVIsIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSIH0gZnJvbSBcIi4vbXVsdGlwbGVyc1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0ZW5lZFZlcnNpb24ge1xuICBjb25zdHJ1Y3RvcihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpIHtcbiAgICB0aGlzLm1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXI7XG4gICAgdGhpcy5taW5vck51bWJlciA9IG1pbm9yTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGFzTnVtYmVyKCkge1xuICAgIGNvbnN0IG51bWJlciA9IHRoaXMubWFqb3JOdW1iZXIgKiBNQUpPUl9OVU1CRVJfTVVMVElQTElFUiArIHRoaXMubWlub3JOdW1iZXIgKiBNSU5PUl9OVU1CRVJfTVVMVElQTElFUjtcblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBtYXRjaFZlcnNpb24odmVyc2lvbikge1xuICAgIGxldCB2ZXJzaW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWFqb3JOdW1iZXIgPSB2ZXJzaW9uLmdldE1ham9yTnVtYmVyKCk7XG5cbiAgICBpZiAodGhpcy5tYWpvck51bWJlciA9PT0gbWFqb3JOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbm9yTnVtYmVyID0gdmVyc2lvbi5nZXRNaW5vck51bWJlcigpO1xuXG4gICAgICBpZiAodGhpcy5taW5vck51bWJlciA+PSBtaW5vck51bWJlcikge1xuICAgICAgICB2ZXJzaW9uTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnNpb25NYXRjaGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYCR7dGhpcy5tYWpvck51bWJlcn0uJHt0aGlzLm1pbm9yTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdGhpcy5tYWpvck51bWJlcixcbiAgICAgICAgICBtaW5vck51bWJlciA9IHRoaXMubWlub3JOdW1iZXIsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ham9yTnVtYmVyLFxuICAgICAgICAgICAgbWlub3JOdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyIH0gPSBqc29uLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zdCBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgc2hvcnRlbmVkVmVyc2lvbiA9IG5ldyBTaG9ydGVuZWRWZXJzaW9uKG1ham9yTnVtYmVyLCBtaW5vck51bWJlcik7XG5cbiAgICByZXR1cm4gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVyc2lvbk51bWJlcih2ZXJzaW9uTnVtYmVyKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdmVyc2lvbk51bWJlciwgLy8vXG4gICAgICAgICAgbWFqb3JOdW1iZXIgPSBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICBtaW5vck51bWJlciA9IG1pbm9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBuZXcgU2hvcnRlbmVkVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIpO1xuXG4gICAgcmV0dXJuIHNob3J0ZW5lZFZlcnNpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtYWpvck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gTUFKT1JfTlVNQkVSX01VTFRJUExJRVIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gTUlOT1JfTlVNQkVSX01VTFRJUExJRVIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWFqb3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eKFxcZCspXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKSQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1pbm9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cbiJdLCJuYW1lcyI6WyJTaG9ydGVuZWRWZXJzaW9uIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJtYWpvck51bWJlciIsIm1pbm9yTnVtYmVyIiwiZ2V0TWFqb3JOdW1iZXIiLCJnZXRNaW5vck51bWJlciIsImFzTnVtYmVyIiwibnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsIm1hdGNoVmVyc2lvbiIsInZlcnNpb24iLCJ2ZXJzaW9uTWF0Y2hlcyIsInRvU3RyaW5nIiwic3RyaW5nIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwic2hvcnRlbmVkVmVyc2lvbiIsImZyb21TdHJpbmciLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJmcm9tVmVyc2lvbk51bWJlciIsInZlcnNpb25OdW1iZXIiLCJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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