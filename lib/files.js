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
                return this.array.find(callback) || null; ///
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkge1xuICAgIGNvbnN0IGZpbGVQYXRocyA9IHRoaXMubWFwRmlsZSgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKTtcblxuICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRocztcbiAgfVxuXG4gIGFkZEZpbGUoZmlsZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChmaWxlKTtcbiAgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUZpbGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRGaWxlKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZmluZChjYWxsYmFjaykgfHwgbnVsbDsgLy8vXG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRGaWxlUGF0aHMiLCJmaWxlUGF0aHMiLCJtYXBGaWxlIiwiZmlsZSIsImZpbGVQYXRoIiwiZ2V0UGF0aCIsImFkZEZpbGUiLCJwdXNoIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lRmlsZSIsInNvbWUiLCJyZWR1Y2VGaWxlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaEZpbGUiLCJmb3JFYWNoIiwiZmluZEZpbGUiLCJmaW5kIiwidG9KU09OIiwiZmlsZXNKU09OIiwiZmlsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlcyIsIkZpbGUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHNCQUFELEFBQUw7YUFBTUEsTUFDUEMsS0FBSztnQ0FERUQ7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFGSUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDOUIsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztvQkFFN0IsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSCxJQUFJO2dCQUNWLElBQUksQ0FBQ0osS0FBSyxDQUFDUSxJQUFJLENBQUNKO1lBQ2xCOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFNLFFBQVE7Z0JBQ2QsT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsR0FBRyxDQUFDRDtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixRQUFRO2dCQUNmLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNZLElBQUksQ0FBQ0g7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osUUFBUSxFQUFFSyxZQUFZO2dCQUMvQixPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxNQUFNLENBQUNOLFVBQVVLO1lBQ3JDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlQLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ1QsS0FBSyxDQUFDaUIsT0FBTyxDQUFDUjtZQUNyQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTVCxRQUFRO2dCQUNmLE9BQU8sSUFBSSxDQUFDVCxLQUFLLENBQUNtQixJQUFJLENBQUNWLGFBQWEsTUFBTSxHQUFHO1lBQy9DOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDckIsS0FBSyxDQUFDVSxHQUFHLENBQUMsU0FBQ047b0JBQzFCLElBQU1rQixXQUFXLEFBQUNsQixTQUFTLE9BQ1BBLEtBQUtnQixNQUFNLEtBQ1Q7b0JBRXRCLE9BQU9FO2dCQUNULElBQ0FDLE9BQU9GLFdBQVcsR0FBRztnQkFFM0IsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFNRixZQUFZRSxNQUNadkIsUUFBUSxFQUFFLEVBQ1Z5QixRQUFRLElBdkRHMUIsTUF1RE9DO2dCQUV4QnFCLFVBQVVKLE9BQU8sQ0FBQyxTQUFDSztvQkFDakIsSUFBTUMsU0FBT0QsVUFDUGxCLE9BQU9zQixhQUFJLENBQUNGLFFBQVEsQ0FBQ0Q7b0JBRTNCRSxNQUFNbEIsT0FBTyxDQUFDSDtnQkFDaEI7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNM0IsUUFBUSxFQUFFLEVBQ1Z5QixRQUFRLElBckVHMUIsTUFxRU9DO2dCQUV4QixPQUFPeUI7WUFDVDs7O1dBeEVtQjFCIn0=