"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Projects;
    }
});
var _necessary = require("necessary");
var _project = /*#__PURE__*/ _interop_require_default(require("./project"));
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
var Projects = /*#__PURE__*/ function() {
    function Projects(array) {
        _class_call_check(this, Projects);
        this.array = array;
    }
    _create_class(Projects, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "addProject",
            value: function addProject(project) {
                this.array.push(project);
            }
        },
        {
            key: "mapProject",
            value: function mapProject(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "reduceProject",
            value: function reduceProject(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachProject",
            value: function forEachProject(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asynchronousForEachProject",
            value: function asynchronousForEachProject(callback, done) {
                forEach(this.array, callback, done);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = this.array.map(function(project) {
                    var projectJSON = project.toJSON();
                    return projectJSON;
                });
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var array = json.map(function(json) {
                    var project = _project.default.fromJSON(json);
                    return project;
                }), projects = new Projects(array);
                return projects;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], projects = new Projects(array);
                return projects;
            }
        }
    ]);
    return Projects;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5hcnJheS5sZW5ndGg7IH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHsgdGhpcy5hcnJheS5wdXNoKHByb2plY3QpOyB9XG5cbiAgbWFwUHJvamVjdChjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlUHJvamVjdChjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hQcm9qZWN0KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdChjYWxsYmFjaywgZG9uZSkgeyBmb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrLCBkb25lKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUHJvamVjdHMiLCJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInB1c2giLCJtYXBQcm9qZWN0IiwiY2FsbGJhY2siLCJtYXAiLCJyZWR1Y2VQcm9qZWN0IiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaFByb2plY3QiLCJhc3luY2hyb25vdXNGb3JFYWNoUHJvamVjdCIsImRvbmUiLCJ0b0pTT04iLCJqc29uIiwicHJvamVjdEpTT04iLCJmcm9tSlNPTiIsIlByb2plY3QiLCJwcm9qZWN0cyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOaUI7OERBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQU0sQUFBRUMsVUFBWUMsZ0NBQXFCLENBQWpDRDtBQUVPLElBQUEsQUFBTUQseUJBQU47YUFBTUEsU0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUFJLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUNEO1lBQVU7OztZQUVoREUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDRDtZQUFXOzs7WUFFeERFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixRQUFRLEVBQUVHLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csTUFBTSxDQUFDSixVQUFVRztZQUFlOzs7WUFFMUZFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlTCxRQUFRO2dCQUFJLElBQUksQ0FBQ1AsS0FBSyxDQUFDRixPQUFPLENBQUNTO1lBQVc7OztZQUV6RE0sS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQk4sUUFBUSxFQUFFTyxJQUFJO2dCQUFJaEIsUUFBUSxJQUFJLENBQUNFLEtBQUssRUFBRU8sVUFBVU87WUFBTzs7O1lBRWxGQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNoQixLQUFLLENBQUNRLEdBQUcsQ0FBQyxTQUFDSjtvQkFDM0IsSUFBTWEsY0FBY2IsUUFBUVcsTUFBTTtvQkFFbEMsT0FBT0U7Z0JBQ1Q7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRixJQUFJO2dCQUNsQixJQUFNaEIsUUFBUWdCLEtBQUtSLEdBQUcsQ0FBQyxTQUFDUTtvQkFDaEIsSUFBTVosVUFBVWUsZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDRjtvQkFFakMsT0FBT1o7Z0JBQ1QsSUFDQWdCLFdBQVcsSUFqQ0F2QixTQWlDYUc7Z0JBRTlCLE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXJCLFFBQVEsRUFBRSxFQUNWb0IsV0FBVyxJQXhDQXZCLFNBd0NhRztnQkFFOUIsT0FBT29CO1lBQ1Q7OztXQTNDbUJ2QiJ9