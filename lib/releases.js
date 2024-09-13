"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Releases;
    }
});
var _necessary = require("necessary");
var _release = /*#__PURE__*/ _interop_require_default(require("./release"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var forEach = _necessary.asynchronousUtilities.forEach;
var Releases = /*#__PURE__*/ function() {
    function Releases(array) {
        _class_call_check(this, Releases);
        this.array = array;
    }
    _create_class(Releases, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "addRelease",
            value: function addRelease(release) {
                this.array.push(release);
            }
        },
        {
            key: "mapRelease",
            value: function mapRelease(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "reduceRelease",
            value: function reduceRelease(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachRelease",
            value: function forEachRelease(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asynchronousForEachRelease",
            value: function asynchronousForEachRelease(callback, done) {
                forEach(this.array, callback, done);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = this.array.map(function(release) {
                    var releaseJSON = release.toJSON();
                    return releaseJSON;
                });
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = json.map(function(json) {
                    var release = _release.default.fromJSON(json);
                    return release;
                }), releases = new Releases(array);
                return releases;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], releases = new Releases(array);
                return releases;
            }
        }
    ]);
    return Releases;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVsZWFzZSBmcm9tIFwiLi9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFJlbGVhc2UocmVsZWFzZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChyZWxlYXNlKTtcbiAgfVxuXG4gIG1hcFJlbGVhc2UoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUmVsZWFzZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFJlbGVhc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFJlbGVhc2UoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHJlbGVhc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlbGVhc2VKU09OID0gcmVsZWFzZS50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHJlbGVhc2VKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IFJlbGVhc2UuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVsZWFzZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRSZWxlYXNlIiwicmVsZWFzZSIsInB1c2giLCJtYXBSZWxlYXNlIiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VSZWxlYXNlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFJlbGVhc2UiLCJhc3luY2hyb25vdXNGb3JFYWNoUmVsZWFzZSIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicmVsZWFzZUpTT04iLCJmcm9tSlNPTiIsIlJlbGVhc2UiLCJyZWxlYXNlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOaUI7OERBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQU0sQUFBRUMsVUFBWUMsZ0NBQXFCLENBQWpDRDtBQUVPLElBQUEsQUFBTUQseUJBQU47YUFBTUEsU0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUMxQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFJLENBQUNKLEtBQUssQ0FBQ0ssSUFBSSxDQUFDRDtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxRQUFRO2dCQUNqQixPQUFPLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxHQUFHLENBQUNEO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNGLFFBQVEsRUFBRUcsWUFBWTtnQkFDbEMsT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csTUFBTSxDQUFDSixVQUFVRztZQUNyQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTCxRQUFRO2dCQUNyQixJQUFJLENBQUNQLEtBQUssQ0FBQ0YsT0FBTyxDQUFDUztZQUNyQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJOLFFBQVEsRUFBRU8sSUFBSTtnQkFDdkNoQixRQUFRLElBQUksQ0FBQ0UsS0FBSyxFQUFFTyxVQUFVTztZQUNoQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLFNBQUNKO29CQUMzQixJQUFNYSxjQUFjYixRQUFRVyxNQUFNO29CQUVsQyxPQUFPRTtnQkFDVDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNGLElBQUk7Z0JBQ2xCLElBQU1oQixRQUFRZ0IsS0FBS1IsR0FBRyxDQUFDLFNBQUNRO29CQUNoQixJQUFNWixVQUFVZSxnQkFBTyxDQUFDRCxRQUFRLENBQUNGO29CQUVqQyxPQUFPWjtnQkFDVCxJQUNBZ0IsV0FBVyxJQTdDQXZCLFNBNkNhRztnQkFFOUIsT0FBT29CO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNckIsUUFBUSxFQUFFLEVBQ1ZvQixXQUFXLElBcERBdkIsU0FvRGFHO2dCQUU5QixPQUFPb0I7WUFDVDs7O1dBdkRtQnZCIn0=