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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5yZWxlYXNlZCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgcmVsZWFzZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGgsIHJlbGVhc2VkIH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICByZWxlYXNlZCA9IGRvY3VtZW50LmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGUiLCJwYXRoIiwiY29udGVudCIsInJlbGVhc2VkIiwiZ2V0UGF0aCIsImdldENvbnRlbnQiLCJpc1JlbGVhc2VkIiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJzZXRSZWxlYXNlZCIsInRvSlNPTiIsInR5cGUiLCJqc29uIiwiZnJvbUpTT04iLCJGSUxFX1RZUEUiLCJjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UiLCJmcm9tRG9jdW1lbnQiLCJkb2N1bWVudCIsImZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJmcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7cUJBSEs7dUJBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEaEJIO1FBRWpCLElBQUksQ0FBQ0MsT0FBT0E7UUFDWixJQUFJLENBQUNDLFVBQVVBO1FBQ2YsSUFBSSxDQUFDQyxXQUFXQTs7a0JBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSDtZQUNkOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSDtZQUNkOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSDtZQUNkOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU87Z0JBRWIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZO2dCQUVsQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFWLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxPQUFPQTtZQUNkOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdWLE9BQU87Z0JBQ2hCLElBQUksQ0FBQ0EsVUFBVUE7WUFDakI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVYsUUFBUTtnQkFDbEIsSUFBSSxDQUFDQSxXQUFXQTtZQUNsQjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLE9BNUNTZixLQTRDVGUsTUFDRmQsT0FBTyxJQUFJLENBQUNBLE1BQ1pDLFVBQVUsSUFBSSxDQUFDQSxTQUNmQyxXQUFXLElBQUksQ0FBQ0EsVUFDaEJhLE9BQU87b0JBQ0xELE1BQUFBO29CQUNBZCxNQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBSVIsT0FBTztnQkFFWCxJQUFJUSxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUQsT0FBU0MsS0FBVEQ7b0JBRVIsSUFBSUEsU0FBU0csa0JBQVc7d0JBQ3RCLElBQUksQUFBRWhCLFVBQVljLEtBQVpkO3dCQUVOLElBQVFELE9BQW1CZSxLQUFuQmYsTUFBTUUsV0FBYWEsS0FBYmI7d0JBRWRELFVBQVVpQixJQUFBQSx5Q0FBK0JqQixVQUFXLEdBQUc7d0JBRXZETSxPQUFPLElBekVNUixLQXlFR0MsTUFBTUMsU0FBU0M7b0JBQ2pDO2dCQUNGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVPWSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRO2dCQUMxQixJQUFNQyxXQUFXRCxTQUFTRSxlQUNwQnBCLFdBQVdrQixTQUFTZixjQUNwQkwsT0FBT3FCLFVBQVcsR0FBRztnQkFFM0IsSUFBSXBCLFVBQVVtQixTQUFTaEI7Z0JBRXZCSCxVQUFVaUIsSUFBQUEseUNBQStCakIsVUFBVyxHQUFHO2dCQUV2RCxJQUFNTSxPQUFPLElBekZJUixLQXlGS0MsTUFBTUMsU0FBU0M7Z0JBRXJDLE9BQU9LO1lBQ1Q7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCdkIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7Z0JBQ3ZERCxVQUFVaUIsSUFBQUEseUNBQStCakIsVUFBVyxHQUFHO2dCQUV2RCxJQUFNTSxPQUFPLElBakdJUixLQWlHS0MsTUFBTUMsU0FBU0M7Z0JBRXJDLE9BQU9LO1lBQ1Q7OztXQXBHbUJSOztBQTBEbkIsaUJBMURtQkEsTUEwRFplLFFBQU9HIn0=