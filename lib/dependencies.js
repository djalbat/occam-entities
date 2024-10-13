"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependencies;
    }
});
var _necessary = require("necessary");
var _dependency = /*#__PURE__*/ _interop_require_default(require("./dependency"));
var _shortenedVersion = /*#__PURE__*/ _interop_require_default(require("./shortenedVersion"));
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
var Dependencies = /*#__PURE__*/ function() {
    function Dependencies(array) {
        _class_call_check(this, Dependencies);
        this.array = array;
    }
    _create_class(Dependencies, [
        {
            key: "addDependency",
            value: function addDependency(dependency) {
                this.array.push(dependency);
            }
        },
        {
            key: "mapDependency",
            value: function mapDependency(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "everyDependency",
            value: function everyDependency(callback) {
                return this.array.every(callback);
            }
        },
        {
            key: "reduceDependency",
            value: function reduceDependency(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachDependency",
            value: function forEachDependency(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asynchronousForEachDependency",
            value: function asynchronousForEachDependency(operation, done) {
                forEach(this.array, operation, done);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var dependenciesJSON = this.array.reduce(function(dependenciesJSON, dependency) {
                    var name = dependency.getName(), shortenedVersion = dependency.getShortedVersion(), shortenedVersionString = shortenedVersion.toString();
                    dependenciesJSON[name] = shortenedVersionString;
                    return dependenciesJSON;
                }, {}), json = dependenciesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var dependenciesJSON = json, dependenciesJSONKeys = Object.keys(dependenciesJSON), names = dependenciesJSONKeys, array = names.map(function(name) {
                    var shortenedVersionString = dependenciesJSON[name], string = shortenedVersionString, shortenedVersion = _shortenedVersion.default.fromString(string), dependency = _dependency.default.fromNameAndShortenedVersion(name, shortenedVersion);
                    return dependency;
                }), dependencies = new Dependencies(array);
                return dependencies;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], dependencies = new Dependencies(array);
                return dependencies;
            }
        }
    ]);
    return Dependencies;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlcGVuZGVuY3kgZnJvbSBcIi4vZGVwZW5kZW5jeVwiO1xuaW1wb3J0IFNob3J0ZW5lZFZlcnNpb24gZnJvbSBcIi4vc2hvcnRlbmVkVmVyc2lvblwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHsgdGhpcy5hcnJheS5wdXNoKGRlcGVuZGVuY3kpOyB9XG5cbiAgbWFwRGVwZW5kZW5jeShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlEZXBlbmRlbmN5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZURlcGVuZGVuY3koY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoRGVwZW5kZW5jeShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgYXN5bmNocm9ub3VzRm9yRWFjaERlcGVuZGVuY3kob3BlcmF0aW9uLCBkb25lKSB7IGZvckVhY2godGhpcy5hcnJheSwgb3BlcmF0aW9uLCBkb25lKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlcGVuZGVuY2llc0pTT04sIGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBkZXBlbmRlbmN5LmdldFNob3J0ZWRWZXJzaW9uKCksXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OW25hbWVdID0gc2hvcnRlbmVkVmVyc2lvblN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jaWVzSlNPTjtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OS2V5cyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llc0pTT04pLFxuICAgICAgICAgIG5hbWVzID0gZGVwZW5kZW5jaWVzSlNPTktleXMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gZGVwZW5kZW5jaWVzSlNPTltuYW1lXSxcbiAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBTaG9ydGVuZWRWZXJzaW9uLmZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVwZW5kZW5jaWVzIiwiZm9yRWFjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImFycmF5IiwiYWRkRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJwdXNoIiwibWFwRGVwZW5kZW5jeSIsImNhbGxiYWNrIiwibWFwIiwiZXZlcnlEZXBlbmRlbmN5IiwiZXZlcnkiLCJyZWR1Y2VEZXBlbmRlbmN5IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaERlcGVuZGVuY3kiLCJhc3luY2hyb25vdXNGb3JFYWNoRGVwZW5kZW5jeSIsIm9wZXJhdGlvbiIsImRvbmUiLCJ0b0pTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwibmFtZSIsImdldE5hbWUiLCJzaG9ydGVuZWRWZXJzaW9uIiwiZ2V0U2hvcnRlZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJqc29uIiwiZnJvbUpTT04iLCJkZXBlbmRlbmNpZXNKU09OS2V5cyIsIk9iamVjdCIsImtleXMiLCJuYW1lcyIsInN0cmluZyIsIlNob3J0ZW5lZFZlcnNpb24iLCJmcm9tU3RyaW5nIiwiRGVwZW5kZW5jeSIsImZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbiIsImRlcGVuZGVuY2llcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQaUI7aUVBRWY7dUVBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxVQUFZQyxnQ0FBcUIsQ0FBakNEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjthQUFNQSxhQUNQRyxLQUFLO2dDQURFSDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7O2tCQUZJSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVO2dCQUFJLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQWE7OztZQUV6REUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDRDtZQUFXOzs7WUFFM0RFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JGLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ1EsS0FBSyxDQUFDSDtZQUFXOzs7WUFFL0RJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLFFBQVEsRUFBRUssWUFBWTtnQkFBSSxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNLENBQUNOLFVBQVVLO1lBQWU7OztZQUU3RkUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsUUFBUTtnQkFBSSxJQUFJLENBQUNMLEtBQUssQ0FBQ0YsT0FBTyxDQUFDTztZQUFXOzs7WUFFNURRLEtBQUFBO21CQUFBQSxTQUFBQSw4QkFBOEJDLFNBQVMsRUFBRUMsSUFBSTtnQkFBSWpCLFFBQVEsSUFBSSxDQUFDRSxLQUFLLEVBQUVjLFdBQVdDO1lBQU87OztZQUV2RkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNqQixLQUFLLENBQUNXLE1BQU0sQ0FBQyxTQUFDTSxrQkFBa0JmO29CQUN0RCxJQUFNZ0IsT0FBT2hCLFdBQVdpQixPQUFPLElBQ3pCQyxtQkFBbUJsQixXQUFXbUIsaUJBQWlCLElBQy9DQyx5QkFBeUJGLGlCQUFpQkcsUUFBUTtvQkFFeEROLGdCQUFnQixDQUFDQyxLQUFLLEdBQUdJO29CQUV6QixPQUFPTDtnQkFDVCxHQUFHLENBQUMsSUFDSk8sT0FBT1Asa0JBQWtCLEdBQUc7Z0JBRWxDLE9BQU9PO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTVAsbUJBQW1CTyxNQUNuQkUsdUJBQXVCQyxPQUFPQyxJQUFJLENBQUNYLG1CQUNuQ1ksUUFBUUgsc0JBQ1IxQixRQUFRNkIsTUFBTXZCLEdBQUcsQ0FBQyxTQUFDWTtvQkFDakIsSUFBTUkseUJBQXlCTCxnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUMvQ1ksU0FBU1Isd0JBQ1RGLG1CQUFtQlcseUJBQWdCLENBQUNDLFVBQVUsQ0FBQ0YsU0FDL0M1QixhQUFhK0IsbUJBQVUsQ0FBQ0MsMkJBQTJCLENBQUNoQixNQUFNRTtvQkFFaEUsT0FBT2xCO2dCQUNULElBQ0FpQyxlQUFlLElBNUNKdEMsYUE0Q3FCRztnQkFFdEMsT0FBT21DO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNcEMsUUFBUSxFQUFFLEVBQ1ZtQyxlQUFlLElBbkRKdEMsYUFtRHFCRztnQkFFdEMsT0FBT21DO1lBQ1Q7OztXQXREbUJ0QyJ9