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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVsZWFzZSBmcm9tIFwiLi9yZWxlYXNlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhZGRSZWxlYXNlKHJlbGVhc2UpIHsgdGhpcy5hcnJheS5wdXNoKHJlbGVhc2UpOyB9XG5cbiAgbWFwUmVsZWFzZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlUmVsZWFzZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hSZWxlYXNlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUmVsZWFzZShjYWxsYmFjaywgZG9uZSkgeyBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHJlbGVhc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlbGVhc2VKU09OID0gcmVsZWFzZS50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHJlbGVhc2VKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IFJlbGVhc2UuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVsZWFzZXMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRSZWxlYXNlIiwicmVsZWFzZSIsInB1c2giLCJtYXBSZWxlYXNlIiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VSZWxlYXNlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFJlbGVhc2UiLCJhc3luY2hyb25vdXNGb3JFYWNoUmVsZWFzZSIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicmVsZWFzZUpTT04iLCJmcm9tSlNPTiIsIlJlbGVhc2UiLCJyZWxlYXNlcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOaUI7OERBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQU0sQUFBRUMsVUFBWUMsZ0NBQXFCLENBQWpDRDtBQUVPLElBQUEsQUFBTUQseUJBQU47YUFBTUEsU0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUFJLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNEO1lBQVU7OztZQUVoREUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDRDtZQUFXOzs7WUFFeERFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixRQUFRLEVBQUVHLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csTUFBTSxDQUFDSixVQUFVRztZQUFlOzs7WUFFMUZFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTCxRQUFRO2dCQUFJLElBQUksQ0FBQ1AsS0FBSyxDQUFDRixPQUFPLENBQUNTO1lBQVc7OztZQUV6RE0sS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQk4sUUFBUSxFQUFFTyxJQUFJO2dCQUFJaEIsUUFBUSxJQUFJLENBQUNFLEtBQUssRUFBRU8sVUFBVU87WUFBTzs7O1lBRWxGQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNoQixLQUFLLENBQUNRLEdBQUcsQ0FBQyxTQUFDSjtvQkFDM0IsSUFBTWEsY0FBY2IsUUFBUVcsTUFBTTtvQkFFbEMsT0FBT0U7Z0JBQ1Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRixJQUFJO2dCQUNsQixJQUFNaEIsUUFBUWdCLEtBQUtSLEdBQUcsQ0FBQyxTQUFDUTtvQkFDaEIsSUFBTVosVUFBVWUsZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDRjtvQkFFakMsT0FBT1o7Z0JBQ1QsSUFDQWdCLFdBQVcsSUFqQ0F2QixTQWlDYUc7Z0JBRTlCLE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXJCLFFBQVEsRUFBRSxFQUNWb0IsV0FBVyxJQXhDQXZCLFNBd0NhRztnQkFFOUIsT0FBT29CO1lBQ1Q7OztXQTNDbUJ2QiJ9