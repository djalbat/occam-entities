"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
var _entries1 = /*#__PURE__*/ _interop_require_default(require("./mixins/entries"));
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
var Project = /*#__PURE__*/ function() {
    function Project(name, entries) {
        _class_call_check(this, Project);
        this.name = name;
        this.entries = entries;
    }
    _create_class(Project, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, json = {
                    name: name,
                    entries: entries
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var entries = json.entries;
                var name = json.name, entriesJSON = entries; ///
                json = entriesJSON; ///
                entries = _entries.default.fromJSON(json); ///
                var project = new Project(name, entries);
                return project;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var entries = _entries.default.fromNothing(), project = new Project(name, entries);
                return project;
            }
        },
        {
            key: "fromNameAndEntries",
            value: function fromNameAndEntries(name, entries) {
                var project = new Project(name, entries);
                return project;
            }
        }
    ]);
    return Project;
}();
Object.assign(Project.prototype, _entries1.default);
var _default = Project;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbnRyaWVzSlNPTiA9IHRoaXMuZW50cmllcy50b0pTT04oKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW50cmllc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHsgZW50cmllcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBlbnRyaWVzSlNPTiA9IGVudHJpZXM7ICAvLy9cblxuICAgIGpzb24gPSBlbnRyaWVzSlNPTjsgLy8vXG5cbiAgICBlbnRyaWVzID0gRW50cmllcy5mcm9tSlNPTihqc29uKTsgLy8vXG5cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcykge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJlbnRyaWVzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4REE7OztlQUFBOzs7OERBNURvQjsrREFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHdCQUFELEFBQUw7YUFBTUEsUUFDUUMsSUFBSSxFQUFFQyxPQUFPO2dDQURyQkY7UUFFRixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUhiRjs7WUFNSkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDSixPQUFPLENBQUNHLE1BQU0sSUFDakNKLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVSSxhQUNWQyxPQUFPO29CQUNMTixNQUFBQTtvQkFDQUMsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFJLEFBQUVMLFVBQVlLLEtBQVpMO2dCQUVOLElBQU0sQUFBRUQsT0FBU00sS0FBVE4sTUFDRkssY0FBY0osU0FBVSxHQUFHO2dCQUVqQ0ssT0FBT0QsYUFBYSxHQUFHO2dCQUV2QkosVUFBVU8sZ0JBQU8sQ0FBQ0QsUUFBUSxDQUFDRCxPQUFPLEdBQUc7Z0JBRXJDLElBQU1HLFVBQVUsSUFwQ2RWLFFBb0MwQkMsTUFBTUM7Z0JBRWxDLE9BQU9RO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTVixJQUFJO2dCQUNsQixJQUFNQyxVQUFVTyxnQkFBTyxDQUFDRyxXQUFXLElBQzdCRixVQUFVLElBM0NkVixRQTJDMEJDLE1BQU1DO2dCQUVsQyxPQUFPUTtZQUNUOzs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CWixJQUFJLEVBQUVDLE9BQU87Z0JBQ3JDLElBQU1RLFVBQVUsSUFqRGRWLFFBaUQwQkMsTUFBTUM7Z0JBRWxDLE9BQU9RO1lBQ1Q7OztXQXBESVY7O0FBdUROYyxPQUFPQyxNQUFNLENBQUNmLFFBQVFnQixTQUFTLEVBQUVDLGlCQUFhO0lBRTlDLFdBQWVqQiJ9