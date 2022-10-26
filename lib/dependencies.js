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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5SlNPTiA9IGRlcGVuZGVuY3kudG9KU09OKCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3lKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBkZXBlbmRlbmNpZXNKU09OOyAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY2llcyA9IG5ldyBEZXBlbmRlbmNpZXMoYXJyYXkpLFxuICAgICAgICAgIGRlcGVuZGVuY2llc0pTT04gPSBqc29uOyAvLy9cblxuICAgIGRlcGVuZGVuY2llc0pTT04uZm9yRWFjaCgoZGVwZW5kZW5jeUpTT04pID0+IHsgIC8vL1xuICAgICAgY29uc3QganNvbiA9IGRlcGVuZGVuY3lKU09OLCAgLy8vXG4gICAgICAgICAgICBkZXBlbmRlbmN5ID0gRGVwZW5kZW5jeS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgZGVwZW5kZW5jaWVzLmFkZERlcGVuZGVuY3koZGVwZW5kZW5jeSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkRlcGVuZGVuY2llcyIsImFycmF5IiwiYWRkRGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJwdXNoIiwidG9KU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsIm1hcCIsImRlcGVuZGVuY3lKU09OIiwianNvbiIsImZyb21KU09OIiwiZGVwZW5kZW5jaWVzIiwiZm9yRWFjaCIsIkRlcGVuZGVuY3kiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLEtBQUs7OEJBREVEO1FBRWpCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBRklEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFVBQVUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0Q7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxTQUFDSixZQUFlO29CQUNoRCxJQUFNSyxpQkFBaUJMLFdBQVdFLE1BQU07b0JBRXhDLE9BQU9HO2dCQUNULElBQ0FDLE9BQU9ILGtCQUFrQixHQUFHO2dCQUVsQyxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTVIsUUFBUSxFQUFFLEVBQ1ZVLGVBQWUsSUF0QkpYLGFBc0JxQkMsUUFDaENLLG1CQUFtQkcsTUFBTSxHQUFHO2dCQUVsQ0gsaUJBQWlCTSxPQUFPLENBQUMsU0FBQ0osZ0JBQW1CO29CQUMzQyxJQUFNQyxTQUFPRCxnQkFDUEwsYUFBYVUsbUJBQVUsQ0FBQ0gsUUFBUSxDQUFDRDtvQkFFdkNFLGFBQWFULGFBQWEsQ0FBQ0M7Z0JBQzdCO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNYixRQUFRLEVBQUUsRUFDVlUsZUFBZSxJQXJDSlgsYUFxQ3FCQztnQkFFdEMsT0FBT1U7WUFDVDs7O1dBeENtQlgifQ==