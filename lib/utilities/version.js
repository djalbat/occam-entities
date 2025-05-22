"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get majorNumberFromNumber () {
        return majorNumberFromNumber;
    },
    get majorNumberFromString () {
        return majorNumberFromString;
    },
    get minorNumberFromNumber () {
        return minorNumberFromNumber;
    },
    get minorNumberFromString () {
        return minorNumberFromString;
    },
    get patchNumberFromNumber () {
        return patchNumberFromNumber;
    },
    get patchNumberFromString () {
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
    var minorNumber = number !== null ? Math.floor(number % _multiplers.MAJOR_NUMBER_MULTIPLIER / _multiplers.MINOR_NUMBER_MULTIPLIER) : 0; ///
    return minorNumber;
}
function patchNumberFromNumber(number) {
    var patchNumber = number !== null ? Math.floor(number % _multiplers.MINOR_NUMBER_MULTIPLIER / _multiplers.PATCH_NUMBER_MULTIPLIER) : 0; ///
    return patchNumber;
}
function majorNumberFromString(string) {
    var majorNumber = 0;
    if (string) {
        var matches = string.match(/^(\d+)/), secondMatch = second(matches);
        majorNumber = Number(secondMatch); ///
    }
    return majorNumber;
}
function minorNumberFromString(string) {
    var minorNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.(\d+)/), secondMatch = second(matches);
        minorNumber = Number(secondMatch); ///
    }
    return minorNumber;
}
function patchNumberFromString(string) {
    var patchNumber = 0;
    if (string) {
        var matches = string.match(/^\d+\.\d+\.(\d+)/), secondMatch = second(matches);
        patchNumber = Number(secondMatch); ///
    }
    return patchNumber;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSLCBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiwgUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vbXVsdGlwbGVyc1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKG51bWJlciAlIE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSKSAvIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHBhdGNoTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigobnVtYmVyICUgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIpIC8gUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1ham9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXihcXGQrKS8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWFqb3JOdW1iZXIgPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtaW5vck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuKFxcZCspLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IE51bWJlcihzZWNvbmRNYXRjaCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRjaE51bWJlciA9IE51bWJlcihzZWNvbmRNYXRjaCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cbiJdLCJuYW1lcyI6WyJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIm51bWJlciIsIm1ham9yTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJtaW5vck51bWJlciIsIk1JTk9SX05VTUJFUl9NVUxUSVBMSUVSIiwicGF0Y2hOdW1iZXIiLCJQQVRDSF9OVU1CRVJfTVVMVElQTElFUiIsInN0cmluZyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFRZ0JBO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUE2QkFDO2VBQUFBOztRQXJCQUM7ZUFBQUE7O1FBa0NBQztlQUFBQTs7O3lCQXhEZTswQkFFMkQ7QUFFMUYsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFRCxTQUFTTixzQkFBc0JRLE1BQU07SUFDMUMsSUFBTUMsY0FBYyxBQUFDRCxXQUFXLE9BQ1ZFLEtBQUtDLEtBQUssQ0FBQ0gsU0FBU0ksbUNBQXVCLElBQ3pDLEdBQUksR0FBRztJQUUvQixPQUFPSDtBQUNUO0FBRU8sU0FBU1Asc0JBQXNCTSxNQUFNO0lBQzFDLElBQU1LLGNBQWMsQUFBQ0wsV0FBVyxPQUNWRSxLQUFLQyxLQUFLLENBQUMsQUFBQ0gsU0FBU0ksbUNBQXVCLEdBQUlFLG1DQUF1QixJQUNyRSxHQUFJLEdBQUc7SUFFL0IsT0FBT0Q7QUFDVDtBQUVPLFNBQVNULHNCQUFzQkksTUFBTTtJQUMxQyxJQUFNTyxjQUFjLEFBQUNQLFdBQVcsT0FDVkUsS0FBS0MsS0FBSyxDQUFDLEFBQUNILFNBQVNNLG1DQUF1QixHQUFJRSxtQ0FBdUIsSUFDckUsR0FBSSxHQUFHO0lBRS9CLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTZCxzQkFBc0JnQixNQUFNO0lBQzFDLElBQUlSLGNBQWM7SUFFbEIsSUFBSVEsUUFBUTtRQUNWLElBQU1DLFVBQVVELE9BQU9FLEtBQUssQ0FBQyxXQUN2QkMsY0FBY2QsT0FBT1k7UUFFM0JULGNBQWNZLE9BQU9ELGNBQWUsR0FBRztJQUN6QztJQUVBLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTTixzQkFBc0JjLE1BQU07SUFDMUMsSUFBSUosY0FBYztJQUVsQixJQUFJSSxRQUFRO1FBQ1YsSUFBTUMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDLGdCQUN2QkMsY0FBY2QsT0FBT1k7UUFFM0JMLGNBQWNRLE9BQU9ELGNBQWUsR0FBRztJQUN6QztJQUVBLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTUixzQkFBc0JZLE1BQU07SUFDMUMsSUFBSUYsY0FBYztJQUVsQixJQUFJRSxRQUFRO1FBQ1YsSUFBTUMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDLHFCQUN2QkMsY0FBY2QsT0FBT1k7UUFFM0JILGNBQWNNLE9BQU9ELGNBQWUsR0FBRztJQUN6QztJQUVBLE9BQU9MO0FBQ1QifQ==