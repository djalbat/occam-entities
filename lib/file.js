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
            key: "matchFilePath",
            value: function matchFilePath(filePath) {
                var filePathMatches = this.path === filePath;
                return filePathMatches;
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
            value: function fromJSON(Class, json) {
                if (json === undefined) {
                    json = Class; ///
                    Class = File; ///
                }
                var file = null;
                if (json !== null) {
                    var type = json.type;
                    if (type === _types.FILE_TYPE) {
                        var content = json.content;
                        var path = json.path, released = json.released;
                        content = (0, _content.convertContentTabsToWhitespace)(content); ///
                        file = new Class(path, content, released);
                    }
                }
                return file;
            }
        },
        {
            key: "fromDocument",
            value: function fromDocument(Class, document) {
                if (document === undefined) {
                    document = Class; ///
                    Class = File; ///
                }
                var filePath = document.getFilePath(), released = document.isReleased(), path = filePath; ///
                var content = document.getContent();
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new Class(path, content, released);
                return file;
            }
        },
        {
            key: "fromPathContentAndReleased",
            value: function fromPathContentAndReleased(Class, path, content, released) {
                if (released === undefined) {
                    released = content; ///
                    content = path; ///
                    path = Class; ///
                    Class = File; ///
                }
                content = (0, _content.convertContentTabsToWhitespace)(content); ///
                var file = new Class(path, content, released);
                return file;
            }
        }
    ]);
    return File;
}();
_define_property(File, "type", _types.FILE_TYPE);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5wYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLnJlbGVhc2VkLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICByZWxlYXNlZFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9UWVBFO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbikge1xuICAgIGlmIChqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGpzb24gPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRmlsZTsgLy8vXG4gICAgfVxuXG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgICAgaWYgKHR5cGUgPT09IEZJTEVfVFlQRSkge1xuICAgICAgICBsZXQgeyBjb250ZW50IH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnN0IHsgcGF0aCwgcmVsZWFzZWQgfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgQ2xhc3MocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Eb2N1bWVudChDbGFzcywgZG9jdW1lbnQpIHtcbiAgICBpZiAoZG9jdW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZG9jdW1lbnQgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRmlsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJlbGVhc2VkID0gZG9jdW1lbnQuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IENsYXNzKHBhdGgsIGNvbnRlbnQsIHJlbGVhc2VkKTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkKENsYXNzLCBwYXRoLCBjb250ZW50LCByZWxlYXNlZCkge1xuICAgIGlmIChyZWxlYXNlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWxlYXNlZCA9IGNvbnRlbnQ7IC8vL1xuXG4gICAgICBjb250ZW50ID0gcGF0aDsgLy8vXG5cbiAgICAgIHBhdGggPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gRmlsZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgY29uc3QgZmlsZSA9IG5ldyBDbGFzcyhwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGUiLCJwYXRoIiwiY29udGVudCIsInJlbGVhc2VkIiwiZ2V0UGF0aCIsImdldENvbnRlbnQiLCJpc1JlbGVhc2VkIiwiaXNGaWxlIiwiZmlsZSIsImlzRGlyZWN0b3J5IiwiZGlyZWN0b3J5Iiwic2V0UGF0aCIsInNldENvbnRlbnQiLCJzZXRSZWxlYXNlZCIsIm1hdGNoRmlsZVBhdGgiLCJmaWxlUGF0aCIsImZpbGVQYXRoTWF0Y2hlcyIsInRvSlNPTiIsInR5cGUiLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsInVuZGVmaW5lZCIsIkZJTEVfVFlQRSIsImNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZSIsImZyb21Eb2N1bWVudCIsImRvY3VtZW50IiwiZ2V0RmlsZVBhdGgiLCJmcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7cUJBSEs7dUJBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEaEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU87Z0JBRWIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZO2dCQUVsQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFWLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV1YsT0FBTztn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