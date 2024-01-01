"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return File;
    }
});
var _types = require("./types");
var _content = require("./utilities/content");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var File = /*#__PURE__*/ function() {
    function File(path, content, released) {
        _class_call_check(this, File);
        this.path = path;
        this.content = content;
        this.released = released;
    }
    _create_class(File, [
        {
            key: "getPath",
            value: function getPath() {
                return this.path;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                return this.content;
            }
        },
        {
            key: "isReleased",
            value: function isReleased() {
                return this.released;
            }
        },
        {
            key: "isFile",
            value: function isFile() {
                var file = true;
                return file;
            }
        },
        {
            key: "isDirectory",
            value: function isDirectory() {
                var directory = false;
                return directory;
            }
        },
        {
            key: "setPath",
            value: function setPath(path) {
                this.path = path;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                this.content = content;
            }
        },
        {
            key: "setReleased",
            value: function setReleased(released) {
                this.released = released;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var type = File.type, path = this.path, content = this.content, released = this.released, json = {
                    type: type,
                    path: path,
                    content: content,
                    released: released
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var file = null;
                if (json !== null) {
                    var type = json.type;
                    if (type === _types.FILE_TYPE) {
                        var content = json.content;
                        var path = json.path, released = json.released;
                        content = (0, _content.convertContentTabsToWhitespace)(content); ///
                        file = new File(path, content, released);
                    }
                }
                return file;
            }
        },
        {
            key: "fromDocument",
            value: function fromDocument(document) {
                var filePath = document.getFilePath(), released = document.isReleased(), path = filePath; ///
                var content = document.getContent();
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new File(path, content, released);
                return file;
            }
        },
        {
            key: "fromPathContentAndReleased",
            value: function fromPathContentAndReleased(path, content, released) {
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new File(path, content, released);
                return file;
            }
        }
    ]);
    return File;
}();
_define_property(File, "type", _types.FILE_TYPE);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5yZWxlYXNlZCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgcmVsZWFzZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGgsIHJlbGVhc2VkIH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICByZWxlYXNlZCA9IGRvY3VtZW50LmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZSIsInBhdGgiLCJjb250ZW50IiwicmVsZWFzZWQiLCJnZXRQYXRoIiwiZ2V0Q29udGVudCIsImlzUmVsZWFzZWQiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJzZXRQYXRoIiwic2V0Q29udGVudCIsInNldFJlbGVhc2VkIiwidG9KU09OIiwidHlwZSIsImpzb24iLCJmcm9tSlNPTiIsIkZJTEVfVFlQRSIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImZyb21Eb2N1bWVudCIsImRvY3VtZW50IiwiZmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFISzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHFCQUFELEFBQUw7YUFBTUEsS0FDUEMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7Z0NBRGhCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUpDSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPO2dCQUViLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWTtnQkFFbEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRVixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdWLE9BQU87Z0JBQ2hCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtZQUNqQjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZVixRQUFRO2dCQUNsQixJQUFJLENBQUNBLFFBQVEsR0FBR0E7WUFDbEI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxPQTVDU2YsS0E0Q1RlLE1BQ0ZkLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJhLE9BQU87b0JBQ0xELE1BQUFBO29CQUNBZCxNQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBSVIsT0FBTztnQkFFWCxJQUFJUSxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUQsT0FBU0MsS0FBVEQ7b0JBRVIsSUFBSUEsU0FBU0csZ0JBQVMsRUFBRTt3QkFDdEIsSUFBSSxBQUFFaEIsVUFBWWMsS0FBWmQ7d0JBRU4sSUFBUUQsT0FBbUJlLEtBQW5CZixNQUFNRSxXQUFhYSxLQUFiYjt3QkFFZEQsVUFBVWlCLElBQUFBLHVDQUE4QixFQUFDakIsVUFBVyxHQUFHO3dCQUV2RE0sT0FBTyxJQXpFTVIsS0F5RUdDLE1BQU1DLFNBQVNDO29CQUNqQztnQkFDRjtnQkFFQSxPQUFPSztZQUNUOzs7WUFFT1ksS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUTtnQkFDMUIsSUFBTUMsV0FBV0QsU0FBU0UsV0FBVyxJQUMvQnBCLFdBQVdrQixTQUFTZixVQUFVLElBQzlCTCxPQUFPcUIsVUFBVyxHQUFHO2dCQUUzQixJQUFJcEIsVUFBVW1CLFNBQVNoQixVQUFVO2dCQUVqQ0gsVUFBVWlCLElBQUFBLHVDQUE4QixFQUFDakIsVUFBVyxHQUFHO2dCQUV2RCxJQUFNTSxPQUFPLElBekZJUixLQXlGS0MsTUFBTUMsU0FBU0M7Z0JBRXJDLE9BQU9LO1lBQ1Q7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCdkIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3ZERCxVQUFVaUIsSUFBQUEsdUNBQThCLEVBQUNqQixVQUFXLEdBQUc7Z0JBRXZELElBQU1NLE9BQU8sSUFqR0lSLEtBaUdLQyxNQUFNQyxTQUFTQztnQkFFckMsT0FBT0s7WUFDVDs7O1dBcEdtQlI7O0FBMERuQixpQkExRG1CQSxNQTBEWmUsUUFBT0csZ0JBQVMifQ==