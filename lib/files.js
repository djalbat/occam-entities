"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Files;
    }
});
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
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
var Files = /*#__PURE__*/ function() {
    function Files(array) {
        _class_call_check(this, Files);
        this.array = array;
    }
    _create_class(Files, [
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                var filePaths = this.mapFile(function(file) {
                    var filePath = file.getPath();
                    return filePath;
                });
                return filePaths;
            }
        },
        {
            key: "addFile",
            value: function addFile(file) {
                this.array.push(file);
            }
        },
        {
            key: "mapFile",
            value: function mapFile(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "someFile",
            value: function someFile(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "reduceFile",
            value: function reduceFile(callback, initialValue) {
                return this.array.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachFile",
            value: function forEachFile(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "findFile",
            value: function findFile(callback) {
                return this.array.find(callback) || null;
            } ///
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var filesJSON = this.array.map(function(file) {
                    var fileJSON = file !== null ? file.toJSON() : null;
                    return fileJSON;
                }), json = filesJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var filesJSON = json, array = [], files = new Files(array);
                filesJSON.forEach(function(fileJSON) {
                    var _$json = fileJSON, file = _file.default.fromJSON(_$json);
                    files.addFile(file);
                });
                return files;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var array = [], files = new Files(array);
                return files;
            }
        }
    ]);
    return Files;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkgeyB0aGlzLmFycmF5LnB1c2goZmlsZSk7IH1cblxuICBtYXBGaWxlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzb21lRmlsZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoRmlsZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZmluZEZpbGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgfSAgLy8vXG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IHRoaXMuYXJyYXkubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlSlNPTiA9IChmaWxlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudG9KU09OKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZpbGVKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuICAgIFxuICAgIGZpbGVzSlNPTi5mb3JFYWNoKChmaWxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGZpbGVKU09OLCAgLy8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlcyIsImFycmF5IiwiZ2V0RmlsZVBhdGhzIiwiZmlsZVBhdGhzIiwibWFwRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJhZGRGaWxlIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZUZpbGUiLCJzb21lIiwicmVkdWNlRmlsZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hGaWxlIiwiZm9yRWFjaCIsImZpbmRGaWxlIiwiZmluZCIsInRvSlNPTiIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZXMiLCJGaWxlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxLQUFLO2dDQURFRDtRQUVqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQUZJRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUM5QixJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO29CQUU3QixPQUFPRDtnQkFDVDtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFILElBQUk7Z0JBQUksSUFBSSxDQUFDSixLQUFLLENBQUNRLElBQUksQ0FBQ0o7WUFBTzs7O1lBRXZDRCxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU0sUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxHQUFHLENBQUNEO1lBQVc7OztZQUVyREUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNGLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1ksSUFBSSxDQUFDSDtZQUFXOzs7WUFFdkRJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSixRQUFRLEVBQUVLLFlBQVk7Z0JBQUksT0FBTyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsTUFBTSxDQUFDTixVQUFVSztZQUFlOzs7WUFFdkZFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZUCxRQUFRO2dCQUFJLElBQUksQ0FBQ1QsS0FBSyxDQUFDaUIsT0FBTyxDQUFDUjtZQUFXOzs7WUFFdERTLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTVCxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNtQixJQUFJLENBQUNWLGFBQWE7WUFBTSxFQUFHLEdBQUc7OztZQUVyRVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDckIsS0FBSyxDQUFDVSxHQUFHLENBQUMsU0FBQ047b0JBQzFCLElBQU1rQixXQUFXLEFBQUNsQixTQUFTLE9BQ1BBLEtBQUtnQixNQUFNLEtBQ1Q7b0JBRXRCLE9BQU9FO2dCQUNULElBQ0FDLE9BQU9GLFdBQVcsR0FBRztnQkFFM0IsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFNRixZQUFZRSxNQUNadkIsUUFBUSxFQUFFLEVBQ1Z5QixRQUFRLElBM0NHMUIsTUEyQ09DO2dCQUV4QnFCLFVBQVVKLE9BQU8sQ0FBQyxTQUFDSztvQkFDakIsSUFBTUMsU0FBT0QsVUFDUGxCLE9BQU9zQixhQUFJLENBQUNGLFFBQVEsQ0FBQ0Q7b0JBRTNCRSxNQUFNbEIsT0FBTyxDQUFDSDtnQkFDaEI7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNM0IsUUFBUSxFQUFFLEVBQ1Z5QixRQUFRLElBekRHMUIsTUF5RE9DO2dCQUV4QixPQUFPeUI7WUFDVDs7O1dBNURtQjFCIn0=