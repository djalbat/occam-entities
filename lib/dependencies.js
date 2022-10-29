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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGV2ZXJ5RGVwZW5kZW5jeShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LmV2ZXJ5KGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZURlcGVuZGVuY3koY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lKU09OID0gZGVwZW5kZW5jeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGpzb247IC8vL1xuXG4gICAgZGVwZW5kZW5jaWVzSlNPTi5mb3JFYWNoKChkZXBlbmRlbmN5SlNPTikgPT4geyAgLy8vXG4gICAgICBjb25zdCBqc29uID0gZGVwZW5kZW5jeUpTT04sICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21KU09OKGpzb24pO1xuXG4gICAgICBkZXBlbmRlbmNpZXMuYWRkRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVwZW5kZW5jaWVzIiwiYXJyYXkiLCJhZGREZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsInB1c2giLCJtYXBEZXBlbmRlbmN5IiwiY2FsbGJhY2siLCJtYXAiLCJldmVyeURlcGVuZGVuY3kiLCJldmVyeSIsInJlZHVjZURlcGVuZGVuY3kiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoRGVwZW5kZW5jeSIsImZvckVhY2giLCJ0b0pTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwiZGVwZW5kZW5jeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJkZXBlbmRlbmNpZXMiLCJEZXBlbmRlbmN5IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxLQUFLOzhCQURFRDtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUZJRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUNEO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRTtnQkFDdEIsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ00sR0FBRyxDQUFDRDtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JGLFFBQVEsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ1EsS0FBSyxDQUFDSDtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLFFBQVEsRUFBRUssWUFBWSxFQUFFO2dCQUN2QyxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDVyxNQUFNLENBQUNOLFVBQVVLO1lBQ3JDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUNMLEtBQUssQ0FBQ2EsT0FBTyxDQUFDUjtZQUNyQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLG1CQUFtQixJQUFJLENBQUNmLEtBQUssQ0FBQ00sR0FBRyxDQUFDLFNBQUNKLFlBQWU7b0JBQ2hELElBQU1jLGlCQUFpQmQsV0FBV1ksTUFBTTtvQkFFeEMsT0FBT0U7Z0JBQ1QsSUFDQUMsT0FBT0Ysa0JBQWtCLEdBQUc7Z0JBRWxDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFO2dCQUNwQixJQUFNakIsUUFBUSxFQUFFLEVBQ1ZtQixlQUFlLElBdENKcEIsYUFzQ3FCQyxRQUNoQ2UsbUJBQW1CRSxNQUFNLEdBQUc7Z0JBRWxDRixpQkFBaUJGLE9BQU8sQ0FBQyxTQUFDRyxnQkFBbUI7b0JBQzNDLElBQU1DLFNBQU9ELGdCQUNQZCxhQUFha0IsbUJBQVUsQ0FBQ0YsUUFBUSxDQUFDRDtvQkFFdkNFLGFBQWFsQixhQUFhLENBQUNDO2dCQUM3QjtnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU1yQixRQUFRLEVBQUUsRUFDVm1CLGVBQWUsSUFyREpwQixhQXFEcUJDO2dCQUV0QyxPQUFPbUI7WUFDVDs7O1dBeERtQnBCIn0=