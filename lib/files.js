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
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZpbGUgZnJvbSBcIi4vZmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5tYXBGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7IHRoaXMuYXJyYXkucHVzaChmaWxlKTsgfVxuXG4gIG1hcEZpbGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVGaWxlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRmlsZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hGaWxlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBmaW5kRmlsZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyB9ICAvLy9cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0gdGhpcy5hcnJheS5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVKU09OID0gKGZpbGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZmlsZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVzSlNPTjsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgZmlsZXNKU09OID0ganNvbiwgLy8vXG4gICAgICAgICAgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG4gICAgXG4gICAgZmlsZXNKU09OLmZvckVhY2goKGZpbGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gZmlsZUpTT04sICAvLy9cbiAgICAgICAgICAgIGZpbGUgPSBGaWxlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBmaWxlcy5hZGRGaWxlKGZpbGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVzIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldEZpbGVQYXRocyIsImZpbGVQYXRocyIsIm1hcEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiYWRkRmlsZSIsInB1c2giLCJjYWxsYmFjayIsIm1hcCIsInNvbWVGaWxlIiwic29tZSIsInJlZHVjZUZpbGUiLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJmb3JFYWNoRmlsZSIsImZvckVhY2giLCJmaW5kRmlsZSIsImZpbmQiLCJ0b0pTT04iLCJmaWxlc0pTT04iLCJmaWxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVzIiwiRmlsZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsS0FBSztnQ0FERUQ7UUFFakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFGSUQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDOUIsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztvQkFFN0IsT0FBT0Q7Z0JBQ1Q7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSCxJQUFJO2dCQUFJLElBQUksQ0FBQ0wsS0FBSyxDQUFDUyxJQUFJLENBQUNKO1lBQU87OztZQUV2Q0QsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFNLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csR0FBRyxDQUFDRDtZQUFXOzs7WUFFckRFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNhLElBQUksQ0FBQ0g7WUFBVzs7O1lBRXZESSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osUUFBUSxFQUFFSyxZQUFZO2dCQUFJLE9BQU8sSUFBSSxDQUFDZixLQUFLLENBQUNnQixNQUFNLENBQUNOLFVBQVVLO1lBQWU7OztZQUV2RkUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlQLFFBQVE7Z0JBQUksSUFBSSxDQUFDVixLQUFLLENBQUNrQixPQUFPLENBQUNSO1lBQVc7OztZQUV0RFMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNULFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ29CLElBQUksQ0FBQ1YsYUFBYTtZQUFNLEVBQUcsR0FBRzs7O1lBRXJFVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUN0QixLQUFLLENBQUNXLEdBQUcsQ0FBQyxTQUFDTjtvQkFDMUIsSUFBTWtCLFdBQVcsQUFBQ2xCLFNBQVMsT0FDUEEsS0FBS2dCLE1BQU0sS0FDVDtvQkFFdEIsT0FBT0U7Z0JBQ1QsSUFDQUMsT0FBT0YsV0FBVyxHQUFHO2dCQUUzQixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQU1GLFlBQVlFLE1BQ1p4QixRQUFRLEVBQUUsRUFDVjBCLFFBQVEsSUEvQ0czQixNQStDT0M7Z0JBRXhCc0IsVUFBVUosT0FBTyxDQUFDLFNBQUNLO29CQUNqQixJQUFNQyxTQUFPRCxVQUNQbEIsT0FBT3NCLGFBQUksQ0FBQ0YsUUFBUSxDQUFDRDtvQkFFM0JFLE1BQU1sQixPQUFPLENBQUNIO2dCQUNoQjtnQkFFQSxPQUFPcUI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU01QixRQUFRLEVBQUUsRUFDVjBCLFFBQVEsSUE3REczQixNQTZET0M7Z0JBRXhCLE9BQU8wQjtZQUNUOzs7V0FoRW1CM0IifQ==