"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    majorNumberFromNumber: function() {
        return majorNumberFromNumber;
    },
    minorNumberFromNumber: function() {
        return minorNumberFromNumber;
    },
    patchNumberFromNumber: function() {
        return patchNumberFromNumber;
    },
    majorNumberFromString: function() {
        return majorNumberFromString;
    },
    minorNumberFromString: function() {
        return minorNumberFromString;
    },
    patchNumberFromString: function() {
        return patchNumberFromString;
    }
});
var _necessary = require("necessary");
var _multiplers = require("../multiplers");
var second = _necessary.arrayUtilities.second;
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
        majorNumber = Number(secondMatch); ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)\.\d+$/), secondMatch = second(matches);
        minorNumber = Number(secondMatch); ///
    }
    return minorNumber;
}
function patchNumberFromString(string) {
    var patchNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.\d+\.(\d+)$/), secondMatch = second(matches);
        patchNumber = Number(secondMatch); ///
    }
    return patchNumber;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSLCBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiwgUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vbXVsdGlwbGVyc1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IobnVtYmVyIC8gTUlOT1JfTlVNQkVSX01VTFRJUExJRVIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbU51bWJlcihudW1iZXIpIHtcbiAgY29uc3QgcGF0Y2hOdW1iZXIgPSAobnVtYmVyICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG51bWJlciAvIFBBVENIX05VTUJFUl9NVUxUSVBMSUVSKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWpvck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtYWpvck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL14oXFxkKylcXC5cXGQrXFwuXFxkKyQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIG1ham9yTnVtYmVyID0gTnVtYmVyKHNlY29uZE1hdGNoKTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tU3RyaW5nKHN0cmluZykge1xuICBsZXQgbWlub3JOdW1iZXIgPSAwO1xuXG4gIGlmIChzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nLm1hdGNoKC9eXFxkK1xcLihcXGQrKVxcLlxcZCskLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IE51bWJlcihzZWNvbmRNYXRjaCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspJC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0Y2hOdW1iZXIgPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0Y2hOdW1iZXI7XG59XG4iXSwibmFtZXMiOlsibWFqb3JOdW1iZXJGcm9tTnVtYmVyIiwibWlub3JOdW1iZXJGcm9tTnVtYmVyIiwicGF0Y2hOdW1iZXJGcm9tTnVtYmVyIiwibWFqb3JOdW1iZXJGcm9tU3RyaW5nIiwibWlub3JOdW1iZXJGcm9tU3RyaW5nIiwicGF0Y2hOdW1iZXJGcm9tU3RyaW5nIiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJudW1iZXIiLCJtYWpvck51bWJlciIsIk1hdGgiLCJmbG9vciIsIk1BSk9SX05VTUJFUl9NVUxUSVBMSUVSIiwibWlub3JOdW1iZXIiLCJNSU5PUl9OVU1CRVJfTVVMVElQTElFUiIsInBhdGNoTnVtYmVyIiwiUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIiLCJzdHJpbmciLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsIk51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxxQkFBcUI7ZUFBckJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQWFBQyxxQkFBcUI7ZUFBckJBOztJQWFBQyxxQkFBcUI7ZUFBckJBOzs7eUJBeERlOzBCQUUyRDtBQUUxRixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVELFNBQVNOLHNCQUFzQlEsTUFBTSxFQUFFO0lBQzVDLElBQU1DLGNBQWMsQUFBQ0QsV0FBVyxJQUFJLEdBQ2RFLEtBQUtDLEtBQUssQ0FBQ0gsU0FBU0ksbUNBQXVCLElBQ3pDLENBQUMsRUFBRyxHQUFHO0lBRS9CLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTUixzQkFBc0JPLE1BQU0sRUFBRTtJQUM1QyxJQUFNSyxjQUFjLEFBQUNMLFdBQVcsSUFBSSxHQUNkRSxLQUFLQyxLQUFLLENBQUNILFNBQVNNLG1DQUF1QixJQUN6QyxDQUFDLEVBQUcsR0FBRztJQUUvQixPQUFPRDtBQUNUO0FBRU8sU0FBU1gsc0JBQXNCTSxNQUFNLEVBQUU7SUFDNUMsSUFBTU8sY0FBYyxBQUFDUCxXQUFXLElBQUksR0FDZEUsS0FBS0MsS0FBSyxDQUFDSCxTQUFTUSxtQ0FBdUIsSUFDekMsQ0FBQyxFQUFHLEdBQUc7SUFFL0IsT0FBT0Q7QUFDVDtBQUVPLFNBQVNaLHNCQUFzQmMsTUFBTSxFQUFFO0lBQzVDLElBQUlSLGNBQWM7SUFFbEIsSUFBSVEsUUFBUTtRQUNWLElBQU1DLFVBQVVELE9BQU9FLEtBQUssQ0FBQyxzQkFDdkJDLGNBQWNkLE9BQU9ZO1FBRTNCVCxjQUFjWSxPQUFPRCxjQUFlLEdBQUc7SUFDekMsQ0FBQztJQUVELE9BQU9YO0FBQ1Q7QUFFTyxTQUFTTCxzQkFBc0JhLE1BQU0sRUFBRTtJQUM1QyxJQUFJSixjQUFjO0lBRWxCLElBQUlJLFFBQVE7UUFDVixJQUFNQyxVQUFVRCxPQUFPRSxLQUFLLENBQUMsc0JBQ3ZCQyxjQUFjZCxPQUFPWTtRQUUzQkwsY0FBY1EsT0FBT0QsY0FBZSxHQUFHO0lBQ3pDLENBQUM7SUFFRCxPQUFPUDtBQUNUO0FBRU8sU0FBU1Isc0JBQXNCWSxNQUFNLEVBQUU7SUFDNUMsSUFBSUYsY0FBYztJQUVsQixJQUFJRSxRQUFRO1FBQ1YsSUFBTUMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDLHNCQUN2QkMsY0FBY2QsT0FBT1k7UUFFM0JILGNBQWNNLE9BQU9ELGNBQWUsR0FBRztJQUN6QyxDQUFDO0lBRUQsT0FBT0w7QUFDVCJ9