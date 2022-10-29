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
                var majorNumber = majorNumberFromString(string), minorNumber = minorNumberFromString(string), patchNumber = patchNumberFromString(string), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        },
        {
            key: "fromVersionNumber",
            value: function fromVersionNumber(versionNumber) {
                var number = versionNumber, majorNumber = majorNumberFromNumber(number), minorNumber = minorNumberFromNumber(number), patchNumber = patchNumberFromNumber(number), version = new Version(majorNumber, minorNumber, patchNumber);
                return version;
            }
        }
    ]);
    return Version;
}();
function majorNumberFromNumber(number) {
    var majorNumber = number !== null ? Math.floor(number / _multiplers.MAJOR_NUMBER_MULTIPLIER) : 0; ///
    return majorNumber;
}
function minorNumberFromNumber(number) {
    var minorNumber = number !== null ? Math.floor(number / _multiplers.MINOR_NUMBER_MULTIPLIER) : 0; ///
    return minorNumber;
}
function patchNumberFromNumber(number) {
    var patchNumber = number !== null ? Math.floor(number / _multiplers.PATCH_NUMBER_MULTIPLIER) : 0; ///
    return patchNumber;
}
function majorNumberFromString(string) {
    var majorNumber = 0;
    if (string) {
        var matches = string.match(/^(\d+)\.\d+\.\d+$/), secondMatch = second(matches);
        majorNumber = secondMatch; ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)\.\d+$/), secondMatch = second(matches);
        minorNumber = secondMatch; ///
    }
    return minorNumber;
}
function patchNumberFromString(string) {
    var patchNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.\d+\.(\d+)$/), secondMatch = second(matches);
        patchNumber = secondMatch; ///
    }
    return patchNumber;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgTUFKT1JfTlVNQkVSX01VTFRJUExJRVIsIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSLCBQQVRDSF9OVU1CRVJfTVVMVElQTElFUiB9IGZyb20gXCIuL211bHRpcGxlcnNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uIHtcbiAgY29uc3RydWN0b3IobWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcikge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgPSBtYWpvck51bWJlcjtcbiAgICB0aGlzLm1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXI7XG4gICAgdGhpcy5wYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyO1xuICB9XG5cbiAgZ2V0TWFqb3JOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFqb3JOdW1iZXI7XG4gIH1cblxuICBnZXRNaW5vck51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5vck51bWJlcjtcbiAgfVxuXG4gIGdldFBhdGNoTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLnBhdGNoTnVtYmVyO1xuICB9XG5cbiAgYnVtcE1ham9yTnVtYmVyKCkge1xuICAgIHRoaXMubWFqb3JOdW1iZXIgKz0gMTtcbiAgfVxuXG4gIGJ1bXBNaW5vck51bWJlcigpIHtcbiAgICB0aGlzLm1pbm9yTnVtYmVyICs9IDE7XG4gIH1cblxuICBidW1wUGF0Y2hOdW1iZXIoKSB7XG4gICAgdGhpcy5wYXRjaE51bWJlciArPSAxO1xuICB9XG5cbiAgYXNOdW1iZXIoKSB7XG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5tYWpvck51bWJlciAqIE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSICsgdGhpcy5taW5vck51bWJlciAqIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSICsgdGhpcy5wYXRjaE51bWJlciAqIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAke3RoaXMubWFqb3JOdW1iZXJ9LiR7dGhpcy5taW5vck51bWJlcn0uJHt0aGlzLnBhdGNoTnVtYmVyfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gdGhpcy5tYWpvck51bWJlcixcbiAgICAgICAgICBtaW5vck51bWJlciA9IHRoaXMubWlub3JOdW1iZXIsXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSB0aGlzLnBhdGNoTnVtYmVyLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYWpvck51bWJlcixcbiAgICAgICAgICAgIG1pbm9yTnVtYmVyLFxuICAgICAgICAgICAgcGF0Y2hOdW1iZXJcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlciB9ID0ganNvbixcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZykge1xuICAgIGNvbnN0IG1ham9yTnVtYmVyID0gbWFqb3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZyksXG4gICAgICAgICAgbWlub3JOdW1iZXIgPSBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICBwYXRjaE51bWJlciA9IHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpLFxuICAgICAgICAgIHZlcnNpb24gPSBuZXcgVmVyc2lvbihtYWpvck51bWJlciwgbWlub3JOdW1iZXIsIHBhdGNoTnVtYmVyKTtcblxuICAgIHJldHVybiB2ZXJzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJzaW9uTnVtYmVyKHZlcnNpb25OdW1iZXIpIHtcbiAgICBjb25zdCBudW1iZXIgPSB2ZXJzaW9uTnVtYmVyLCAvLy9cbiAgICAgICAgICBtYWpvck51bWJlciA9IG1ham9yTnVtYmVyRnJvbU51bWJlcihudW1iZXIpLFxuICAgICAgICAgIG1pbm9yTnVtYmVyID0gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlciksXG4gICAgICAgICAgcGF0Y2hOdW1iZXIgPSBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSxcbiAgICAgICAgICB2ZXJzaW9uID0gbmV3IFZlcnNpb24obWFqb3JOdW1iZXIsIG1pbm9yTnVtYmVyLCBwYXRjaE51bWJlcik7XG5cbiAgICByZXR1cm4gdmVyc2lvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtaW5vck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1pbm9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBNSU5PUl9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1pbm9yTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHBhdGNoTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBQQVRDSF9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtYWpvck51bWJlcjtcbn1cblxuZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGNoTnVtYmVyO1xufVxuIl0sIm5hbWVzIjpbIlZlcnNpb24iLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIm1ham9yTnVtYmVyIiwibWlub3JOdW1iZXIiLCJwYXRjaE51bWJlciIsImdldE1ham9yTnVtYmVyIiwiZ2V0TWlub3JOdW1iZXIiLCJnZXRQYXRjaE51bWJlciIsImJ1bXBNYWpvck51bWJlciIsImJ1bXBNaW5vck51bWJlciIsImJ1bXBQYXRjaE51bWJlciIsImFzTnVtYmVyIiwibnVtYmVyIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsIlBBVENIX05VTUJFUl9NVUxUSVBMSUVSIiwidG9TdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ2ZXJzaW9uIiwiZnJvbVN0cmluZyIsIm1ham9yTnVtYmVyRnJvbVN0cmluZyIsIm1pbm9yTnVtYmVyRnJvbVN0cmluZyIsInBhdGNoTnVtYmVyRnJvbVN0cmluZyIsImZyb21WZXJzaW9uTnVtYmVyIiwidmVyc2lvbk51bWJlciIsIm1ham9yTnVtYmVyRnJvbU51bWJlciIsIm1pbm9yTnVtYmVyRnJvbU51bWJlciIsInBhdGNoTnVtYmVyRnJvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTswQkFFMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx3QkFtRmxCLEFBbkZZO2FBQU1BLFFBQ1BHLFdBQVcsRUFBRUMsV0FBVyxFQUFF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