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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBhZGREZXBlbmRlbmN5KGRlcGVuZGVuY3kpIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7XG4gIH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lKU09OID0gZGVwZW5kZW5jeS50b0pTT04oKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzSlNPTiA9IGpzb247IC8vL1xuXG4gICAgZGVwZW5kZW5jaWVzSlNPTi5mb3JFYWNoKChkZXBlbmRlbmN5SlNPTikgPT4geyAgLy8vXG4gICAgICBjb25zdCBqc29uID0gZGVwZW5kZW5jeUpTT04sICAvLy9cbiAgICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21KU09OKGpzb24pO1xuXG4gICAgICBkZXBlbmRlbmNpZXMuYWRkRGVwZW5kZW5jeShkZXBlbmRlbmN5KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSBuZXcgRGVwZW5kZW5jaWVzKGFycmF5KTtcblxuICAgIHJldHVybiBkZXBlbmRlbmNpZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRGVwZW5kZW5jaWVzIiwiYXJyYXkiLCJhZGREZXBlbmRlbmN5IiwiZGVwZW5kZW5jeSIsInB1c2giLCJtYXBEZXBlbmRlbmN5IiwiY2FsbGJhY2siLCJtYXAiLCJ0b0pTT04iLCJkZXBlbmRlbmNpZXNKU09OIiwiZGVwZW5kZW5jeUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJkZXBlbmRlbmNpZXMiLCJmb3JFYWNoIiwiRGVwZW5kZW5jeSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsS0FBSzs4QkFERUQ7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztpQkFGSUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsVUFBVSxFQUFFO2dCQUN4QixJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDRDtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNNLEdBQUcsQ0FBQ0Q7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUixLQUFLLENBQUNNLEdBQUcsQ0FBQyxTQUFDSixZQUFlO29CQUNoRCxJQUFNTyxpQkFBaUJQLFdBQVdLLE1BQU07b0JBRXhDLE9BQU9FO2dCQUNULElBQ0FDLE9BQU9GLGtCQUFrQixHQUFHO2dCQUVsQyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBTVYsUUFBUSxFQUFFLEVBQ1ZZLGVBQWUsSUExQkpiLGFBMEJxQkMsUUFDaENRLG1CQUFtQkUsTUFBTSxHQUFHO2dCQUVsQ0YsaUJBQWlCSyxPQUFPLENBQUMsU0FBQ0osZ0JBQW1CO29CQUMzQyxJQUFNQyxTQUFPRCxnQkFDUFAsYUFBYVksbUJBQVUsQ0FBQ0gsUUFBUSxDQUFDRDtvQkFFdkNFLGFBQWFYLGFBQWEsQ0FBQ0M7Z0JBQzdCO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNZixRQUFRLEVBQUUsRUFDVlksZUFBZSxJQXpDSmIsYUF5Q3FCQztnQkFFdEMsT0FBT1k7WUFDVDs7O1dBNUNtQmIifQ==