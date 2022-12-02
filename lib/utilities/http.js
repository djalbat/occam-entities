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
    post: function() {
        return post;
    },
    default: function() {
        return _default;
    }
});
var _stream = require("stream");
var _necessary = require("necessary");
var _constants = require("../constants");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var POST_METHOD = _necessary.methods.POST_METHOD, createRequest = _necessary.requestUtilities.createRequest, OK_200_STATUS_CODE = _necessary.statusCodes.OK_200_STATUS_CODE, ACCEPT_HEADER = _necessary.headers.ACCEPT_HEADER, CONTENT_TYPE_HEADER = _necessary.headers.CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE = _necessary.contentTypes.APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE;
function post(host, uri, query, json, callback) {
    var _obj;
    var content = JSON.stringify(json), method = POST_METHOD, _$headers = (_obj = {}, _defineProperty(_obj, ACCEPT_HEADER, APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE), _defineProperty(_obj, CONTENT_TYPE_HEADER, APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE), _obj);
    var request = createRequest(host, uri, query, method, _$headers, function(error, response) {
        if (response === null) {
            error = true;
        } else {
            var statusCode = response.statusCode;
            if (statusCode !== OK_200_STATUS_CODE) {
                error = true;
            }
        }
        if (error) {
            var _$json = null;
            callback(_$json);
            return;
        }
        contentFromResponse(response, function(content) {
            var _$json = null;
            try {
                _$json = JSON.parse(content);
            } catch (error) {} ///
            callback(_$json);
        });
    }), readable = _stream.Readable.from(content);
    readable.pipe(request);
}
var _default = {
    post: post
};
function contentFromResponse(response, callback) {
    var content = _constants.EMPTY_STRING;
    response.on(_constants.DATA, function(data) {
        content += data;
    });
    response.on(_constants.END, function() {
        callback(content);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvaHR0cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmltcG9ydCB7IG1ldGhvZHMsIGhlYWRlcnMsIGNvbnRlbnRUeXBlcywgc3RhdHVzQ29kZXMsIHJlcXVlc3RVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVORCwgREFUQSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IFBPU1RfTUVUSE9EIH0gPSBtZXRob2RzLFxuICAgICAgeyBjcmVhdGVSZXF1ZXN0IH0gPSByZXF1ZXN0VXRpbGl0aWVzLFxuICAgICAgeyBPS18yMDBfU1RBVFVTX0NPREUgfSA9IHN0YXR1c0NvZGVzLFxuICAgICAgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gPSBoZWFkZXJzLFxuICAgICAgeyBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGOF9DT05URU5UX1RZUEUgfSA9IGNvbnRlbnRUeXBlcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwganNvbiwgY2FsbGJhY2spIHtcblx0Y29uc3QgY29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFx0Ly8vXG5cdFx0XHRcdG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuXHRcdFx0XHRoZWFkZXJzID0ge1xuICAgICAgICAgIFtBQ0NFUFRfSEVBREVSXTogQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURjhfQ09OVEVOVF9UWVBFLFxuICAgICAgICAgIFtDT05URU5UX1RZUEVfSEVBREVSXTogQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURjhfQ09OVEVOVF9UWVBFXG4gICAgICAgIH07XG5cblx0Y29uc3QgcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRlcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHRcdGlmIChzdGF0dXNDb2RlICE9PSBPS18yMDBfU1RBVFVTX0NPREUpIHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc3QganNvbiA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGNhbGxiYWNrKGpzb24pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGVudEZyb21SZXNwb25zZShyZXNwb25zZSwgKGNvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdGxldCBqc29uID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UoY29udGVudCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge31cdC8vL1xuXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhqc29uKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHJlYWRhYmxlID0gUmVhZGFibGUuZnJvbShjb250ZW50KTtcblxuXHRyZWFkYWJsZS5waXBlKHJlcXVlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHBvc3Rcbn07XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUmVzcG9uc2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG5cdGxldCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG5cdHJlc3BvbnNlLm9uKERBVEEsIChkYXRhKSA9PiB7XG5cdFx0Y29udGVudCArPSBkYXRhO1xuXHR9KTtcblxuXHRyZXNwb25zZS5vbihFTkQsICgpID0+IHtcblx0XHRjYWxsYmFjayhjb250ZW50KTtcblx0fSk7XG59XG4iXSwibmFtZXMiOlsicG9zdCIsIlBPU1RfTUVUSE9EIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJyZXF1ZXN0VXRpbGl0aWVzIiwiT0tfMjAwX1NUQVRVU19DT0RFIiwic3RhdHVzQ29kZXMiLCJBQ0NFUFRfSEVBREVSIiwiaGVhZGVycyIsIkNPTlRFTlRfVFlQRV9IRUFERVIiLCJBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGOF9DT05URU5UX1RZUEUiLCJjb250ZW50VHlwZXMiLCJob3N0IiwidXJpIiwicXVlcnkiLCJqc29uIiwiY2FsbGJhY2siLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsInJlcXVlc3QiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImNvbnRlbnRGcm9tUmVzcG9uc2UiLCJwYXJzZSIsInJlYWRhYmxlIiwiUmVhZGFibGUiLCJmcm9tIiwicGlwZSIsIkVNUFRZX1NUUklORyIsIm9uIiwiREFUQSIsImRhdGEiLCJFTkQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsSUFBSTtlQUFKQTs7SUEwQ2hCLE9BRUU7ZUFGRjs7O3NCQXREeUI7eUJBRXFEO3lCQUV0Qzs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTSxBQUFFQyxjQUFnQkMsa0JBQU8sQ0FBdkJELGFBQ0YsQUFBRUUsZ0JBQWtCQywyQkFBZ0IsQ0FBbENELGVBQ0YsQUFBRUUscUJBQXVCQyxzQkFBVyxDQUFsQ0Qsb0JBQ0FFLGdCQUF1Q0Msa0JBQU8sQ0FBOUNELGVBQWVFLHNCQUF3QkQsa0JBQU8sQ0FBL0JDLHFCQUNqQixBQUFFQyw2Q0FBK0NDLHVCQUFZLENBQTNERDtBQUVELFNBQVNWLEtBQUtZLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO1FBR3pDO0lBRmIsSUFBTUMsVUFBVUMsS0FBS0MsU0FBUyxDQUFDSixPQUM1QkssU0FBU25CLGFBQ1RPLGFBQVUsV0FDSixnQkFESSxNQUNIRCxlQUFnQkcsNkNBQ2pCLGdCQUZJLE1BRUhELHFCQUFzQkMsNkNBRm5CO0lBS2IsSUFBTVcsVUFBVWxCLGNBQWNTLE1BQU1DLEtBQUtDLE9BQU9NLFFBQVFaLFdBQVMsU0FBQ2MsT0FBT0MsVUFBYTtRQUNsRixJQUFJQSxhQUFhLElBQUksRUFBRTtZQUN0QkQsUUFBUSxJQUFJO1FBQ2IsT0FBTztZQUNOLElBQU0sQUFBRUUsYUFBZUQsU0FBZkM7WUFFUixJQUFJQSxlQUFlbkIsb0JBQW9CO2dCQUN0Q2lCLFFBQVEsSUFBSTtZQUNiLENBQUM7UUFDRixDQUFDO1FBRUQsSUFBSUEsT0FBTztZQUNWLElBQU1QLFNBQU8sSUFBSTtZQUVqQkMsU0FBU0Q7WUFFVDtRQUNELENBQUM7UUFFRFUsb0JBQW9CRixVQUFVLFNBQUNOLFNBQVk7WUFDMUMsSUFBSUYsU0FBTyxJQUFJO1lBRWYsSUFBSTtnQkFDSEEsU0FBT0csS0FBS1EsS0FBSyxDQUFDVDtZQUNuQixFQUFFLE9BQU9LLE9BQU8sQ0FBQyxFQUFFLEdBQUc7WUFFdEJOLFNBQVNEO1FBQ1Y7SUFDRCxJQUNBWSxXQUFXQyxnQkFBUSxDQUFDQyxJQUFJLENBQUNaO0lBRTVCVSxTQUFTRyxJQUFJLENBQUNUO0FBQ2Y7SUFFQSxXQUFlO0lBQ2RyQixNQUFBQTtBQUNEO0FBRUEsU0FBU3lCLG9CQUFvQkYsUUFBUSxFQUFFUCxRQUFRLEVBQUU7SUFDaEQsSUFBSUMsVUFBVWMsdUJBQVk7SUFFMUJSLFNBQVNTLEVBQUUsQ0FBQ0MsZUFBSSxFQUFFLFNBQUNDLE1BQVM7UUFDM0JqQixXQUFXaUI7SUFDWjtJQUVBWCxTQUFTUyxFQUFFLENBQUNHLGNBQUcsRUFBRSxXQUFNO1FBQ3RCbkIsU0FBU0M7SUFDVjtBQUNEIn0=