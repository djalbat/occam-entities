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
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVsZWFzZSBmcm9tIFwiLi9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFkZFJlbGVhc2UocmVsZWFzZSkgeyB0aGlzLmFycmF5LnB1c2gocmVsZWFzZSk7IH1cblxuICBtYXBSZWxlYXNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VSZWxlYXNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFJlbGVhc2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzeW5jaHJvbm91c0ZvckVhY2hSZWxlYXNlKGNhbGxiYWNrLCBkb25lKSB7IGZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2ssIGRvbmUpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmFycmF5Lm1hcCgocmVsZWFzZSkgPT4ge1xuICAgICAgY29uc3QgcmVsZWFzZUpTT04gPSByZWxlYXNlLnRvSlNPTigpO1xuXG4gICAgICByZXR1cm4gcmVsZWFzZUpTT047XG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBqc29uLm1hcCgoanNvbikgPT4geyAgLy8vXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlID0gUmVsZWFzZS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlbGVhc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVsZWFzZXMgPSBuZXcgUmVsZWFzZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgcmVsZWFzZXMgPSBuZXcgUmVsZWFzZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VzO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZWxlYXNlcyIsImZvckVhY2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUmVsZWFzZSIsInJlbGVhc2UiLCJwdXNoIiwibWFwUmVsZWFzZSIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUmVsZWFzZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hSZWxlYXNlIiwiYXN5bmNocm9ub3VzRm9yRWFjaFJlbGVhc2UiLCJkb25lIiwidG9KU09OIiwianNvbiIsInJlbGVhc2VKU09OIiwiZnJvbUpTT04iLCJSZWxlYXNlIiwicmVsZWFzZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTmlCOzhEQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFNLEFBQUVDLFVBQVlDLGdDQUFxQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHlCQUFOO2FBQU1BLFNBQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFBSSxJQUFJLENBQUNMLEtBQUssQ0FBQ00sSUFBSSxDQUFDRDtZQUFVOzs7WUFFaERFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDUixLQUFLLENBQUNTLEdBQUcsQ0FBQ0Q7WUFBVzs7O1lBRXhERSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0YsUUFBUSxFQUFFRyxZQUFZO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osVUFBVUc7WUFBZTs7O1lBRTFGRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUwsUUFBUTtnQkFBSSxJQUFJLENBQUNSLEtBQUssQ0FBQ0YsT0FBTyxDQUFDVTtZQUFXOzs7WUFFekRNLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJOLFFBQVEsRUFBRU8sSUFBSTtnQkFBSWpCLFFBQVEsSUFBSSxDQUFDRSxLQUFLLEVBQUVRLFVBQVVPO1lBQU87OztZQUVsRkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDakIsS0FBSyxDQUFDUyxHQUFHLENBQUMsU0FBQ0o7b0JBQzNCLElBQU1hLGNBQWNiLFFBQVFXLE1BQU07b0JBRWxDLE9BQU9FO2dCQUNUO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0YsSUFBSTtnQkFDbEIsSUFBTWpCLFFBQVFpQixLQUFLUixHQUFHLENBQUMsU0FBQ1E7b0JBQ2hCLElBQU1aLFVBQVVlLGdCQUFPLENBQUNELFFBQVEsQ0FBQ0Y7b0JBRWpDLE9BQU9aO2dCQUNULElBQ0FnQixXQUFXLElBckNBeEIsU0FxQ2FHO2dCQUU5QixPQUFPcUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU10QixRQUFRLEVBQUUsRUFDVnFCLFdBQVcsSUE1Q0F4QixTQTRDYUc7Z0JBRTlCLE9BQU9xQjtZQUNUOzs7V0EvQ21CeEIifQ==