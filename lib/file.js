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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IEZpbGUsXG4gICAgICAgICAgcGF0aCA9IHRoaXMucGF0aCxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50LFxuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5yZWxlYXNlZCxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgcmVsZWFzZWRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IEZJTEVfVFlQRTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBmaWxlID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICAgIGlmICh0eXBlID09PSBGSUxFX1RZUEUpIHtcbiAgICAgICAgbGV0IHsgY29udGVudCB9ID0ganNvbjtcblxuICAgICAgICBjb25zdCB7IHBhdGgsIHJlbGVhc2VkIH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnRlbnQgPSBjb252ZXJ0Q29udGVudFRhYnNUb1doaXRlc3BhY2UoY29udGVudCk7ICAvLy9cblxuICAgICAgICBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChkb2N1bWVudCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZG9jdW1lbnQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICByZWxlYXNlZCA9IGRvY3VtZW50LmlzUmVsZWFzZWQoKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGg7ICAvLy9cblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKSB7XG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZSIsInBhdGgiLCJjb250ZW50IiwicmVsZWFzZWQiLCJnZXRQYXRoIiwiZ2V0Q29udGVudCIsImlzUmVsZWFzZWQiLCJpc0ZpbGUiLCJmaWxlIiwiaXNEaXJlY3RvcnkiLCJkaXJlY3RvcnkiLCJzZXRQYXRoIiwic2V0Q29udGVudCIsInNldFJlbGVhc2VkIiwidG9KU09OIiwidHlwZSIsImpzb24iLCJmcm9tSlNPTiIsIkZJTEVfVFlQRSIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImZyb21Eb2N1bWVudCIsImRvY3VtZW50IiwiZmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFISzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dDQURoQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTztnQkFFYixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVk7Z0JBRWxCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVYsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXVixPQUFPO2dCQUNoQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVYsUUFBUTtnQkFDbEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO1lBQ2xCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsT0E1Q1NmLEtBNENUZSxNQUNGZCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsVUFBVSxJQUFJLENBQUNBLE9BQU8sRUFDdEJDLFdBQVcsSUFBSSxDQUFDQSxRQUFRLEVBQ3hCYSxPQUFPO29CQUNMRCxNQUFBQTtvQkFDQWQsTUFBQUE7b0JBQ0FDLFNBQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPYTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQUlSLE9BQU87Z0JBRVgsSUFBSVEsU0FBUyxNQUFNO29CQUNqQixJQUFNLEFBQUVELE9BQVNDLEtBQVREO29CQUVSLElBQUlBLFNBQVNHLGdCQUFTLEVBQUU7d0JBQ3RCLElBQUksQUFBRWhCLFVBQVljLEtBQVpkO3dCQUVOLElBQVFELE9BQW1CZSxLQUFuQmYsTUFBTUUsV0FBYWEsS0FBYmI7d0JBRWRELFVBQVVpQixJQUFBQSx1Q0FBOEIsRUFBQ2pCLFVBQVcsR0FBRzt3QkFFdkRNLE9BQU8sSUF6RU1SLEtBeUVHQyxNQUFNQyxTQUFTQztvQkFDakM7Z0JBQ0Y7Z0JBRUEsT0FBT0s7WUFDVDs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQU1DLFdBQVdELFNBQVNFLFdBQVcsSUFDL0JwQixXQUFXa0IsU0FBU2YsVUFBVSxJQUM5QkwsT0FBT3FCLFVBQVcsR0FBRztnQkFFM0IsSUFBSXBCLFVBQVVtQixTQUFTaEIsVUFBVTtnQkFFakNILFVBQVVpQixJQUFBQSx1Q0FBOEIsRUFBQ2pCLFVBQVcsR0FBRztnQkFFdkQsSUFBTU0sT0FBTyxJQXpGSVIsS0F5RktDLE1BQU1DLFNBQVNDO2dCQUVyQyxPQUFPSztZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQnZCLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dCQUN2REQsVUFBVWlCLElBQUFBLHVDQUE4QixFQUFDakIsVUFBVyxHQUFHO2dCQUV2RCxJQUFNTSxPQUFPLElBakdJUixLQWlHS0MsTUFBTUMsU0FBU0M7Z0JBRXJDLE9BQU9LO1lBQ1Q7OztXQXBHbUJSOztBQTBEbkIsaUJBMURtQkEsTUEwRFplLFFBQU9HLGdCQUFTIn0=