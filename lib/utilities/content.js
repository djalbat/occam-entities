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
    convertContentTabsToWhitespace: function() {
        return convertContentTabsToWhitespace;
    },
    default: function() {
        return _default;
    },
    sanitiseContent: function() {
        return sanitiseContent;
    },
    trimDoubleQuotes: function() {
        return trimDoubleQuotes;
    }
});
var _constants = require("../constants");
function sanitiseContent(content) {
    var sanitisedContent = content.replace(/&/g, _constants.ESCAPED_AMPERSAND).replace(/</g, _constants.ESCAPED_LESS_THAN).replace(/>/g, _constants.ESCAPED_GREATER_THAN);
    return sanitisedContent;
}
function trimDoubleQuotes(content) {
    return content.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
} ///
function convertContentTabsToWhitespace(content) {
    return content.replace(/\t/g, _constants.DOUBLE_SPACE);
} ///
var _default = {
    sanitiseContent: sanitiseContent,
    trimDoubleQuotes: trimDoubleQuotes,
    convertContentTabsToWhitespace: convertContentTabsToWhitespace
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFLCBFTVBUWV9TVFJJTkcsIEVTQ0FQRURfQU1QRVJTQU5ELCBFU0NBUEVEX0xFU1NfVEhBTiwgRVNDQVBFRF9HUkVBVEVSX1RIQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJi9nLCBFU0NBUEVEX0FNUEVSU0FORClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwvZywgRVNDQVBFRF9MRVNTX1RIQU4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csIEVTQ0FQRURfR1JFQVRFUl9USEFOKTtcblxuICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW1Eb3VibGVRdW90ZXMoY29udGVudCkgeyByZXR1cm4gY29udGVudC5yZXBsYWNlKC8oXlwifFwiJCkvZywgRU1QVFlfU1RSSU5HKTsgfSAvLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KSB7IHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcdC9nLCBET1VCTEVfU1BBQ0UpOyB9IC8vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNhbml0aXNlQ29udGVudCxcbiAgdHJpbURvdWJsZVF1b3RlcyxcbiAgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlXG59O1xuIl0sIm5hbWVzIjpbImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsInNhbml0aXNlQ29udGVudCIsInRyaW1Eb3VibGVRdW90ZXMiLCJjb250ZW50Iiwic2FuaXRpc2VkQ29udGVudCIsInJlcGxhY2UiLCJFU0NBUEVEX0FNUEVSU0FORCIsIkVTQ0FQRURfTEVTU19USEFOIiwiRVNDQVBFRF9HUkVBVEVSX1RIQU4iLCJFTVBUWV9TVFJJTkciLCJET1VCTEVfU1BBQ0UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlZ0JBLDhCQUE4QjtlQUE5QkE7O0lBRWhCLE9BSUU7ZUFKRjs7SUFiZ0JDLGVBQWU7ZUFBZkE7O0lBU0FDLGdCQUFnQjtlQUFoQkE7Ozt5QkFYdUY7QUFFaEcsU0FBU0QsZ0JBQWdCRSxPQUFPO0lBQ3JDLElBQU1DLG1CQUFtQkQsUUFDR0UsT0FBTyxDQUFDLE1BQU1DLDRCQUFpQixFQUMvQkQsT0FBTyxDQUFDLE1BQU1FLDRCQUFpQixFQUMvQkYsT0FBTyxDQUFDLE1BQU1HLCtCQUFvQjtJQUU5RCxPQUFPSjtBQUNUO0FBRU8sU0FBU0YsaUJBQWlCQyxPQUFPO0lBQUksT0FBT0EsUUFBUUUsT0FBTyxDQUFDLFlBQVlJLHVCQUFZO0FBQUcsRUFBRSxHQUFHO0FBRTVGLFNBQVNULCtCQUErQkcsT0FBTztJQUFJLE9BQU9BLFFBQVFFLE9BQU8sQ0FBQyxPQUFPSyx1QkFBWTtBQUFHLEVBQUUsR0FBRztJQUU1RyxXQUFlO0lBQ2JULGlCQUFBQTtJQUNBQyxrQkFBQUE7SUFDQUYsZ0NBQUFBO0FBQ0YifQ==