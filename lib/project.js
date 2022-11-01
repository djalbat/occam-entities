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
var _entries = /*#__PURE__*/ _interopRequireDefault(require("./entries"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./mixins/bnf"));
var _files = /*#__PURE__*/ _interopRequireDefault(require("./mixins/files"));
var _entries1 = /*#__PURE__*/ _interopRequireDefault(require("./mixins/entries"));
var _pattern = /*#__PURE__*/ _interopRequireDefault(require("./mixins/pattern"));
var _metaJSON = /*#__PURE__*/ _interopRequireDefault(require("./mixins/metaJSON"));
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
var Project = /*#__PURE__*/ function() {
    function Project(name, entries) {
        _classCallCheck(this, Project);
        this.name = name;
        this.entries = entries;
        this.repository = repository;
        this.dependencies = dependencies;
    }
    _createClass(Project, [
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
Object.assign(Project.prototype, _bnf.default);
Object.assign(Project.prototype, _files.default);
Object.assign(Project.prototype, _entries1.default);
Object.assign(Project.prototype, _pattern.default);
Object.assign(Project.prototype, _metaJSON.default);
var _default = Project;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgYm5mTWl4aW5zIGZyb20gXCIuL21peGlucy9ibmZcIjtcbmltcG9ydCBmaWxlc01peGlucyBmcm9tIFwiLi9taXhpbnMvZmlsZXNcIjtcbmltcG9ydCBlbnRyaWVzTWl4aW5zIGZyb20gXCIuL21peGlucy9lbnRyaWVzXCI7XG5pbXBvcnQgcGF0dGVybk1peGlucyBmcm9tIFwiLi9taXhpbnMvcGF0dGVyblwiO1xuaW1wb3J0IG1ldGFKU09OTWl4aW5zIGZyb20gXCIuL21peGlucy9tZXRhSlNPTlwiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBsZXQgeyBlbnRyaWVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gZW50cmllczsgIC8vL1xuXG4gICAganNvbiA9IGVudHJpZXNKU09OOyAvLy9cblxuICAgIGVudHJpZXMgPSBFbnRyaWVzLmZyb21KU09OKGpzb24pOyAvLy9cblxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gRW50cmllcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgYm5mTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGZpbGVzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdC5wcm90b3R5cGUsIGVudHJpZXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LnByb3RvdHlwZSwgcGF0dGVybk1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb2plY3QucHJvdG90eXBlLCBtZXRhSlNPTk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwicmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidG9KU09OIiwiZW50cmllc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicHJvamVjdCIsImZyb21OYW1lIiwiZnJvbU5vdGhpbmciLCJmcm9tTmFtZUFuZEVudHJpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJibmZNaXhpbnMiLCJmaWxlc01peGlucyIsImVudHJpZXNNaXhpbnMiLCJwYXR0ZXJuTWl4aW5zIiwibWV0YUpTT05NaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdFQTs7O2VBQUE7Ozs0REF0RW9CO3dEQUNFOzBEQUNFOzZEQUNFOzREQUNBOzZEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsd0JBeURILEFBekRIO2FBQU1BLFFBQ1FDLElBQUksRUFBRUMsT0FBTzs4QkFEckJGO1FBRUYsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7aUJBTGxCSjs7WUFRSkssS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLGNBQWMsSUFBSSxDQUFDTixPQUFPLENBQUNLLE1BQU0sSUFDakNOLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVTSxhQUNWQyxPQUFPO29CQUNMUixNQUFBQTtvQkFDQUMsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQUFBRVAsVUFBWU8sS0FBWlA7Z0JBRU4sSUFBTSxBQUFFRCxPQUFTUSxLQUFUUixNQUNGTyxjQUFjTixTQUFVLEdBQUc7Z0JBRWpDTyxPQUFPRCxhQUFhLEdBQUc7Z0JBRXZCTixVQUFVUyxnQkFBTyxDQUFDRCxRQUFRLENBQUNELE9BQU8sR0FBRztnQkFFckMsSUFBTUcsVUFBVSxJQXRDZFosUUFzQzBCQyxNQUFNQztnQkFFbEMsT0FBT1U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNaLElBQUksRUFBRTtnQkFDcEIsSUFBTUMsVUFBVVMsZ0JBQU8sQ0FBQ0csV0FBVyxJQUM3QkYsVUFBVSxJQTdDZFosUUE2QzBCQyxNQUFNQztnQkFFbEMsT0FBT1U7WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQmQsSUFBSSxFQUFFQyxPQUFPLEVBQUU7Z0JBQ3ZDLElBQU1VLFVBQVUsSUFuRGRaLFFBbUQwQkMsTUFBTUM7Z0JBRWxDLE9BQU9VO1lBQ1Q7OztXQXRESVo7O0FBeUROZ0IsT0FBT0MsTUFBTSxDQUFDakIsUUFBUWtCLFNBQVMsRUFBRUMsWUFBUztBQUMxQ0gsT0FBT0MsTUFBTSxDQUFDakIsUUFBUWtCLFNBQVMsRUFBRUUsY0FBVztBQUM1Q0osT0FBT0MsTUFBTSxDQUFDakIsUUFBUWtCLFNBQVMsRUFBRUcsaUJBQWE7QUFDOUNMLE9BQU9DLE1BQU0sQ0FBQ2pCLFFBQVFrQixTQUFTLEVBQUVJLGdCQUFhO0FBQzlDTixPQUFPQyxNQUFNLENBQUNqQixRQUFRa0IsU0FBUyxFQUFFSyxpQkFBYztJQUUvQyxXQUFldkIifQ==