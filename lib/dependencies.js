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
var _dependency = /*#__PURE__*/ _interopRequireDefault(require("./dependency"));
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Dependencies = /*#__PURE__*/ function() {
    function Dependencies(array) {
        _classCallCheck(this, Dependencies);
        this.array = array;
    }
    _createClass(Dependencies, [
        {
            key: "addDependency",
            value: function addDependency(dependency) {
                this.array.push(dependency);
            }
        },
        {
            key: "mapDependency",
            value: function mapDependency(callback) {
                this.array.map(callback);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var dependenciesJSON = this.array.map(function(dependency) {
                    var dependencyJSON = dependency.toJSON();
                    return dependencyJSON;
                }), json = dependenciesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = [], dependencies = new Dependencies(array), dependenciesJSON = json; ///
                dependenciesJSON.forEach(function(dependencyJSON) {
                    var _$json = dependencyJSON, dependency = _dependency.default.fromJSON(_$json);
                    dependencies.addDependency(dependency);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeUpTT04gPSBkZXBlbmRlbmN5LnRvSlNPTigpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZGVwZW5kZW5jaWVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0ganNvbjsgLy8vXG5cbiAgICBkZXBlbmRlbmNpZXNKU09OLmZvckVhY2goKGRlcGVuZGVuY3lKU09OKSA9PiB7ICAvLy9cbiAgICAgIGNvbnN0IGpzb24gPSBkZXBlbmRlbmN5SlNPTiwgIC8vL1xuICAgICAgICAgICAgZGVwZW5kZW5jeSA9IERlcGVuZGVuY3kuZnJvbUpTT04oanNvbik7XG5cbiAgICAgIGRlcGVuZGVuY2llcy5hZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZXBlbmRlbmNpZXMiLCJhcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsInRvSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJkZXBlbmRlbmN5SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImRlcGVuZGVuY2llcyIsImZvckVhY2giLCJEZXBlbmRlbmN5IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxLQUFLOzhCQURFRDtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUZJRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0Q7WUFDakI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixLQUFLLENBQUNNLEdBQUcsQ0FBQyxTQUFDSixZQUFlO29CQUNoRCxJQUFNTyxpQkFBaUJQLFdBQVdLLE1BQU07b0JBRXhDLE9BQU9FO2dCQUNULElBQ0FDLE9BQU9GLGtCQUFrQixHQUFHO2dCQUVsQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTVYsUUFBUSxFQUFFLEVBQ1ZZLGVBQWUsSUExQkpiLGFBMEJxQkMsUUFDaENRLG1CQUFtQkUsTUFBTSxHQUFHO2dCQUVsQ0YsaUJBQWlCSyxPQUFPLENBQUMsU0FBQ0osZ0JBQW1CO29CQUMzQyxJQUFNQyxTQUFPRCxnQkFDUFAsYUFBYVksbUJBQVUsQ0FBQ0gsUUFBUSxDQUFDRDtvQkFFdkNFLGFBQWFYLGFBQWEsQ0FBQ0M7Z0JBQzdCO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNZixRQUFRLEVBQUUsRUFDVlksZUFBZSxJQXpDSmIsYUF5Q3FCQztnQkFFdEMsT0FBT1k7WUFDVDs7O1dBNUNtQmIifQ==