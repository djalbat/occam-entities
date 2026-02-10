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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGSUxFX1RZUEUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGlzRmlsZSgpIHtcbiAgICBjb25zdCBmaWxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgaXNEaXJlY3RvcnkoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gZGlyZWN0b3J5O1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBzZXRSZWxlYXNlZChyZWxlYXNlZCkge1xuICAgIHRoaXMucmVsZWFzZWQgPSByZWxlYXNlZDtcbiAgfVxuXG4gIG1hdGNoRmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlUGF0aE1hdGNoZXMgPSAodGhpcy5wYXRoID09PSBmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gRmlsZSxcbiAgICAgICAgICBwYXRoID0gdGhpcy5wYXRoLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLnJlbGVhc2VkLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICByZWxlYXNlZFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlID0gRklMRV9UWVBFO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IGZpbGUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgICAgaWYgKHR5cGUgPT09IEZJTEVfVFlQRSkge1xuICAgICAgICBsZXQgeyBjb250ZW50IH0gPSBqc29uO1xuXG4gICAgICAgIGNvbnN0IHsgcGF0aCwgcmVsZWFzZWQgfSA9IGpzb247XG5cbiAgICAgICAgY29udGVudCA9IGNvbnZlcnRDb250ZW50VGFic1RvV2hpdGVzcGFjZShjb250ZW50KTsgIC8vL1xuXG4gICAgICAgIGZpbGUgPSBuZXcgRmlsZShwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURvY3VtZW50KGRvY3VtZW50KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBkb2N1bWVudC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJlbGVhc2VkID0gZG9jdW1lbnQuaXNSZWxlYXNlZCgpLFxuICAgICAgICAgIHBhdGggPSBmaWxlUGF0aDsgIC8vL1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhDb250ZW50QW5kUmVsZWFzZWQocGF0aCwgY29udGVudCwgcmVsZWFzZWQpIHtcbiAgICBjb250ZW50ID0gY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlKGNvbnRlbnQpOyAgLy8vXG5cbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUocGF0aCwgY29udGVudCwgcmVsZWFzZWQpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlIiwicGF0aCIsImNvbnRlbnQiLCJyZWxlYXNlZCIsImdldFBhdGgiLCJnZXRDb250ZW50IiwiaXNSZWxlYXNlZCIsImlzRmlsZSIsImZpbGUiLCJpc0RpcmVjdG9yeSIsImRpcmVjdG9yeSIsInNldFBhdGgiLCJzZXRDb250ZW50Iiwic2V0UmVsZWFzZWQiLCJtYXRjaEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJmaWxlUGF0aE1hdGNoZXMiLCJ0b0pTT04iLCJ0eXBlIiwianNvbiIsImZyb21KU09OIiwiRklMRV9UWVBFIiwiY29udmVydENvbnRlbnRUYWJzVG9XaGl0ZXNwYWNlIiwiZnJvbURvY3VtZW50IiwiZG9jdW1lbnQiLCJnZXRGaWxlUGF0aCIsImZyb21QYXRoQ29udGVudEFuZFJlbGVhc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztxQkFISzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dDQURo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