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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVsZWFzZSBmcm9tIFwiLi9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDtcbiAgfVxuXG4gIGFkZFJlbGVhc2UocmVsZWFzZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChyZWxlYXNlKTtcbiAgfVxuXG4gIG1hcFJlbGVhc2UoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlUmVsZWFzZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaFJlbGVhc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaFJlbGVhc2UoY2FsbGJhY2ssIGRvbmUpIHtcbiAgICBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHJlbGVhc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlbGVhc2VKU09OID0gcmVsZWFzZS50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHJlbGVhc2VKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IFJlbGVhc2UuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVsZWFzZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRSZWxlYXNlIiwicmVsZWFzZSIsInB1c2giLCJtYXBSZWxlYXNlIiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VSZWxlYXNlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFJlbGVhc2UiLCJhc3luY2hyb25vdXNGb3JFYWNoUmVsZWFzZSIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicmVsZWFzZUpTT04iLCJmcm9tSlNPTiIsIlJlbGVhc2UiLCJyZWxlYXNlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOaUI7OERBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQU0sQUFBRUMsVUFBWUMsZ0NBQXFCLENBQWpDRDtBQUVPLElBQUEsQUFBTUQseUJBQUQsQUFBTDthQUFNQSxTQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNO1lBQzFCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE9BQU87Z0JBQ2hCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNEO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVE7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDUCxLQUFLLENBQUNRLEdBQUcsQ0FBQ0Q7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsUUFBUSxFQUFFRyxZQUFZO2dCQUNsQyxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNLENBQUNKLFVBQVVHO1lBQ3JDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVMLFFBQVE7Z0JBQ3JCLElBQUksQ0FBQ1AsS0FBSyxDQUFDRixPQUFPLENBQUNTO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQk4sUUFBUSxFQUFFTyxJQUFJO2dCQUN2Q2hCLFFBQVEsSUFBSSxDQUFDRSxLQUFLLEVBQUVPLFVBQVVPO1lBQ2hDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDaEIsS0FBSyxDQUFDUSxHQUFHLENBQUMsU0FBQ0o7b0JBQzNCLElBQU1hLGNBQWNiLFFBQVFXLE1BQU07b0JBRWxDLE9BQU9FO2dCQUNUO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0YsSUFBSTtnQkFDbEIsSUFBTWhCLFFBQVFnQixLQUFLUixHQUFHLENBQUMsU0FBQ1E7b0JBQ2hCLElBQU1aLFVBQVVlLGdCQUFPLENBQUNELFFBQVEsQ0FBQ0Y7b0JBRWpDLE9BQU9aO2dCQUNULElBQ0FnQixXQUFXLElBN0NBdkIsU0E2Q2FHO2dCQUU5QixPQUFPb0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1yQixRQUFRLEVBQUUsRUFDVm9CLFdBQVcsSUFwREF2QixTQW9EYUc7Z0JBRTlCLE9BQU9vQjtZQUNUOzs7V0F2RG1CdkIifQ==