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
    var minorNumber = number !== null ? Math.floor(number % _multiplers.MAJOR_NUMBER_MULTIPLIER / _multiplers.MINOR_NUMBER_MULTIPLIER) : 0; ///
    return minorNumber;
}
function patchNumberFromNumber(number) {
    var patchNumber = number !== null ? Math.floor((number & _multiplers.MINOR_NUMBER_MULTIPLIER) / _multiplers.PATCH_NUMBER_MULTIPLIER) : 0; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVyc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSLCBNSU5PUl9OVU1CRVJfTVVMVElQTElFUiwgUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vbXVsdGlwbGVyc1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWpvck51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IG1ham9yTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihudW1iZXIgLyBNQUpPUl9OVU1CRVJfTVVMVElQTElFUikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAwOyAgLy8vXG5cbiAgcmV0dXJuIG1ham9yTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlub3JOdW1iZXJGcm9tTnVtYmVyKG51bWJlcikge1xuICBjb25zdCBtaW5vck51bWJlciA9IChudW1iZXIgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKG51bWJlciAlIE1BSk9SX05VTUJFUl9NVUxUSVBMSUVSKSAvIE1JTk9SX05VTUJFUl9NVUxUSVBMSUVSKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7ICAvLy9cblxuICByZXR1cm4gbWlub3JOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaE51bWJlckZyb21OdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHBhdGNoTnVtYmVyID0gKG51bWJlciAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigobnVtYmVyICYgTUlOT1JfTlVNQkVSX01VTFRJUExJRVIpIC8gUEFUQ0hfTlVNQkVSX01VTFRJUExJRVIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDsgIC8vL1xuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ham9yTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IG1ham9yTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXihcXGQrKS8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgbWFqb3JOdW1iZXIgPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbWFqb3JOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5vck51bWJlckZyb21TdHJpbmcoc3RyaW5nKSB7XG4gIGxldCBtaW5vck51bWJlciA9IDA7XG5cbiAgaWYgKHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHJpbmcubWF0Y2goL15cXGQrXFwuKFxcZCspLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBtaW5vck51bWJlciA9IE51bWJlcihzZWNvbmRNYXRjaCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBtaW5vck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoTnVtYmVyRnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgbGV0IHBhdGNoTnVtYmVyID0gMDtcblxuICBpZiAoc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaCgvXlxcZCtcXC5cXGQrXFwuKFxcZCspLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRjaE51bWJlciA9IE51bWJlcihzZWNvbmRNYXRjaCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRjaE51bWJlcjtcbn1cbiJdLCJuYW1lcyI6WyJtYWpvck51bWJlckZyb21OdW1iZXIiLCJtaW5vck51bWJlckZyb21OdW1iZXIiLCJwYXRjaE51bWJlckZyb21OdW1iZXIiLCJtYWpvck51bWJlckZyb21TdHJpbmciLCJtaW5vck51bWJlckZyb21TdHJpbmciLCJwYXRjaE51bWJlckZyb21TdHJpbmciLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIm51bWJlciIsIm1ham9yTnVtYmVyIiwiTWF0aCIsImZsb29yIiwiTUFKT1JfTlVNQkVSX01VTFRJUExJRVIiLCJtaW5vck51bWJlciIsIk1JTk9SX05VTUJFUl9NVUxUSVBMSUVSIiwicGF0Y2hOdW1iZXIiLCJQQVRDSF9OVU1CRVJfTVVMVElQTElFUiIsInN0cmluZyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLHFCQUFxQjtlQUFyQkE7O0lBYUFDLHFCQUFxQjtlQUFyQkE7O0lBYUFDLHFCQUFxQjtlQUFyQkE7Ozt5QkF4RGU7MEJBRTJEO0FBRTFGLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRUQsU0FBU04sc0JBQXNCUSxNQUFNLEVBQUU7SUFDNUMsSUFBTUMsY0FBYyxBQUFDRCxXQUFXLElBQUksR0FDZEUsS0FBS0MsS0FBSyxDQUFDSCxTQUFTSSxtQ0FBdUIsSUFDekMsQ0FBQyxFQUFHLEdBQUc7SUFFL0IsT0FBT0g7QUFDVDtBQUVPLFNBQVNSLHNCQUFzQk8sTUFBTSxFQUFFO0lBQzVDLElBQU1LLGNBQWMsQUFBQ0wsV0FBVyxJQUFJLEdBQ2RFLEtBQUtDLEtBQUssQ0FBQyxBQUFDSCxTQUFTSSxtQ0FBdUIsR0FBSUUsbUNBQXVCLElBQ3JFLENBQUMsRUFBRyxHQUFHO0lBRS9CLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTWCxzQkFBc0JNLE1BQU0sRUFBRTtJQUM1QyxJQUFNTyxjQUFjLEFBQUNQLFdBQVcsSUFBSSxHQUNkRSxLQUFLQyxLQUFLLENBQUMsQUFBQ0gsQ0FBQUEsU0FBU00sbUNBQXVCLEFBQUQsSUFBS0UsbUNBQXVCLElBQ3JFLENBQUMsRUFBRyxHQUFHO0lBRS9CLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTWixzQkFBc0JjLE1BQU0sRUFBRTtJQUM1QyxJQUFJUixjQUFjO0lBRWxCLElBQUlRLFFBQVE7UUFDVixJQUFNQyxVQUFVRCxPQUFPRSxLQUFLLENBQUMsV0FDdkJDLGNBQWNkLE9BQU9ZO1FBRTNCVCxjQUFjWSxPQUFPRCxjQUFlLEdBQUc7SUFDekMsQ0FBQztJQUVELE9BQU9YO0FBQ1Q7QUFFTyxTQUFTTCxzQkFBc0JhLE1BQU0sRUFBRTtJQUM1QyxJQUFJSixjQUFjO0lBRWxCLElBQUlJLFFBQVE7UUFDVixJQUFNQyxVQUFVRCxPQUFPRSxLQUFLLENBQUMsZ0JBQ3ZCQyxjQUFjZCxPQUFPWTtRQUUzQkwsY0FBY1EsT0FBT0QsY0FBZSxHQUFHO0lBQ3pDLENBQUM7SUFFRCxPQUFPUDtBQUNUO0FBRU8sU0FBU1Isc0JBQXNCWSxNQUFNLEVBQUU7SUFDNUMsSUFBSUYsY0FBYztJQUVsQixJQUFJRSxRQUFRO1FBQ1YsSUFBTUMsVUFBVUQsT0FBT0UsS0FBSyxDQUFDLHFCQUN2QkMsY0FBY2QsT0FBT1k7UUFFM0JILGNBQWNNLE9BQU9ELGNBQWUsR0FBRztJQUN6QyxDQUFDO0lBRUQsT0FBT0w7QUFDVCJ9