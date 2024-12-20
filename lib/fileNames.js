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
    META_JSON_FILE_NAME: function() {
        return META_JSON_FILE_NAME;
    },
    OPERATOR_PATTERN_FILE_NAME: function() {
        return OPERATOR_PATTERN_FILE_NAME;
    },
    PROPERTY_PATTERN_FILE_NAME: function() {
        return PROPERTY_PATTERN_FILE_NAME;
    },
    README_MD_FILE_NAME: function() {
        return README_MD_FILE_NAME;
    },
    STATEMENT_BNF_FILE_NAME: function() {
        return STATEMENT_BNF_FILE_NAME;
    },
    SYMBOL_PATTERN_FILE_NAME: function() {
        return SYMBOL_PATTERN_FILE_NAME;
    },
    TERM_BNF_FILE_NAME: function() {
        return TERM_BNF_FILE_NAME;
    },
    TYPE_PATTERN_FILE_NAME: function() {
        return TYPE_PATTERN_FILE_NAME;
    },
    default: function() {
        return _default;
    }
});
var README_MD_FILE_NAME = "README.md";
var META_JSON_FILE_NAME = "meta.json";
var TERM_BNF_FILE_NAME = "term.bnf";
var STATEMENT_BNF_FILE_NAME = "statement.bnf";
var TYPE_PATTERN_FILE_NAME = "type.ptn";
var SYMBOL_PATTERN_FILE_NAME = "symbol.ptn";
var PROPERTY_PATTERN_FILE_NAME = "property.ptn";
var OPERATOR_PATTERN_FILE_NAME = "operator.ptn";
var _default = {
    README_MD_FILE_NAME: README_MD_FILE_NAME,
    META_JSON_FILE_NAME: META_JSON_FILE_NAME,
    TERM_BNF_FILE_NAME: TERM_BNF_FILE_NAME,
    STATEMENT_BNF_FILE_NAME: STATEMENT_BNF_FILE_NAME,
    TYPE_PATTERN_FILE_NAME: TYPE_PATTERN_FILE_NAME,
    SYMBOL_PATTERN_FILE_NAME: SYMBOL_PATTERN_FILE_NAME,
    PROPERTY_PATTERN_FILE_NAME: PROPERTY_PATTERN_FILE_NAME,
    OPERATOR_PATTERN_FILE_NAME: OPERATOR_PATTERN_FILE_NAME
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRUFETUVfTURfRklMRV9OQU1FID0gXCJSRUFETUUubWRcIjtcbmV4cG9ydCBjb25zdCBNRVRBX0pTT05fRklMRV9OQU1FID0gXCJtZXRhLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IFRFUk1fQk5GX0ZJTEVfTkFNRSA9IFwidGVybS5ibmZcIjtcbmV4cG9ydCBjb25zdCBTVEFURU1FTlRfQk5GX0ZJTEVfTkFNRSA9IFwic3RhdGVtZW50LmJuZlwiO1xuZXhwb3J0IGNvbnN0IFRZUEVfUEFUVEVSTl9GSUxFX05BTUUgPSBcInR5cGUucHRuXCI7XG5leHBvcnQgY29uc3QgU1lNQk9MX1BBVFRFUk5fRklMRV9OQU1FID0gXCJzeW1ib2wucHRuXCI7XG5leHBvcnQgY29uc3QgUFJPUEVSVFlfUEFUVEVSTl9GSUxFX05BTUUgPSBcInByb3BlcnR5LnB0blwiO1xuZXhwb3J0IGNvbnN0IE9QRVJBVE9SX1BBVFRFUk5fRklMRV9OQU1FID0gXCJvcGVyYXRvci5wdG5cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBSRUFETUVfTURfRklMRV9OQU1FLFxuICBNRVRBX0pTT05fRklMRV9OQU1FLFxuICBURVJNX0JORl9GSUxFX05BTUUsXG4gIFNUQVRFTUVOVF9CTkZfRklMRV9OQU1FLFxuICBUWVBFX1BBVFRFUk5fRklMRV9OQU1FLFxuICBTWU1CT0xfUEFUVEVSTl9GSUxFX05BTUUsXG4gIFBST1BFUlRZX1BBVFRFUk5fRklMRV9OQU1FLFxuICBPUEVSQVRPUl9QQVRURVJOX0ZJTEVfTkFNRVxufTtcbiJdLCJuYW1lcyI6WyJNRVRBX0pTT05fRklMRV9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9GSUxFX05BTUUiLCJQUk9QRVJUWV9QQVRURVJOX0ZJTEVfTkFNRSIsIlJFQURNRV9NRF9GSUxFX05BTUUiLCJTVEFURU1FTlRfQk5GX0ZJTEVfTkFNRSIsIlNZTUJPTF9QQVRURVJOX0ZJTEVfTkFNRSIsIlRFUk1fQk5GX0ZJTEVfTkFNRSIsIlRZUEVfUEFUVEVSTl9GSUxFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUdhQSxtQkFBbUI7ZUFBbkJBOztJQU9BQywwQkFBMEI7ZUFBMUJBOztJQURBQywwQkFBMEI7ZUFBMUJBOztJQVBBQyxtQkFBbUI7ZUFBbkJBOztJQUlBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyx3QkFBd0I7ZUFBeEJBOztJQUhBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUtiLE9BU0U7ZUFURjs7O0FBVk8sSUFBTUosc0JBQXNCO0FBQzVCLElBQU1ILHNCQUFzQjtBQUU1QixJQUFNTSxxQkFBcUI7QUFDM0IsSUFBTUYsMEJBQTBCO0FBQ2hDLElBQU1HLHlCQUF5QjtBQUMvQixJQUFNRiwyQkFBMkI7QUFDakMsSUFBTUgsNkJBQTZCO0FBQ25DLElBQU1ELDZCQUE2QjtJQUUxQyxXQUFlO0lBQ2JFLHFCQUFBQTtJQUNBSCxxQkFBQUE7SUFDQU0sb0JBQUFBO0lBQ0FGLHlCQUFBQTtJQUNBRyx3QkFBQUE7SUFDQUYsMEJBQUFBO0lBQ0FILDRCQUFBQTtJQUNBRCw0QkFBQUE7QUFDRiJ9