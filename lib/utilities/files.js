"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    customGrammarBNFFilesFromFiles: function() {
        return customGrammarBNFFilesFromFiles;
    },
    customGrammarPatternFilesFromFiles: function() {
        return customGrammarPatternFilesFromFiles;
    },
    furtleFilesFromFiles: function() {
        return furtleFilesFromFiles;
    },
    metaJSONFileFromFiles: function() {
        return metaJSONFileFromFiles;
    },
    nominalFilesFromFiles: function() {
        return nominalFilesFromFiles;
    },
    readmeFileFromFiles: function() {
        return readmeFileFromFiles;
    }
});
var _filePath = require("../utilities/filePath");
function readmeFileFromFiles(files) {
    var readmeFile = null;
    files.someFile(function(file) {
        var filePath = file.getPath(), filePathReadmeFilePath = (0, _filePath.isFilePathReadmeFilePath)(filePath);
        if (filePathReadmeFilePath) {
            readmeFile = file; ///
            return true;
        }
    });
    return readmeFile;
}
function furtleFilesFromFiles(files) {
    var furtleFiles = files.reduceFile(function(furtleFiles, file) {
        var filePath = file.getPath(), filePathFurtleFilePath = (0, _filePath.isFilePathFurtleFilePath)(filePath), fileFurtleFile = filePathFurtleFilePath; ///
        if (fileFurtleFile) {
            var furtleFile = file; ///
            furtleFiles.push(furtleFile);
        }
        return furtleFiles;
    }, []);
    return furtleFiles;
}
function nominalFilesFromFiles(files) {
    var nominalFiles = files.reduceFile(function(nominalFiles, file) {
        var filePath = file.getPath(), filePathNominalFilePath = (0, _filePath.isFilePathNominalFilePath)(filePath), fileNominalFile = filePathNominalFilePath; ///
        if (fileNominalFile) {
            var nominalFile = file; ///
            nominalFiles.push(nominalFile);
        }
        return nominalFiles;
    }, []);
    return nominalFiles;
}
function metaJSONFileFromFiles(files) {
    var metaJSONFile = null;
    files.someFile(function(file) {
        var filePath = file.getPath(), filePathMetaJSONFilePath = (0, _filePath.isFilePathMetaJSONFilePath)(filePath);
        if (filePathMetaJSONFilePath) {
            metaJSONFile = file; ///
            return true;
        }
    });
    return metaJSONFile;
}
function customGrammarBNFFilesFromFiles(files) {
    var customGrammarBNFFiles = files.reduceFile(function(customGrammarBNFFiles, file) {
        var filePath = file.getPath(), filePathCustomGrammarBNFFilePath = (0, _filePath.isFilePathCustomGrammarBNFFilePath)(filePath), fileCustomGrammarBNFFile = filePathCustomGrammarBNFFilePath; ///
        if (fileCustomGrammarBNFFile) {
            var customGrammarBNFFile = file; ///
            customGrammarBNFFiles.push(customGrammarBNFFile);
        }
        return customGrammarBNFFiles;
    }, []);
    return customGrammarBNFFiles;
}
function customGrammarPatternFilesFromFiles(files) {
    var customGrammarPatternFiles = files.reduceFile(function(customGrammarPatternFiles, file) {
        var filePath = file.getPath(), filePathCustomGrammarPatternFilePath = (0, _filePath.isFilePathCustomGrammarPatternFilePath)(filePath), fileCustomGrammarPatternFile = filePathCustomGrammarPatternFilePath; ///
        if (fileCustomGrammarPatternFile) {
            var customGrammarPatternFile = file; ///
            customGrammarPatternFiles.push(customGrammarPatternFile);
        }
        return customGrammarPatternFiles;
    }, []);
    return customGrammarPatternFiles;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGlzRmlsZVBhdGhSZWFkbWVGaWxlUGF0aCxcbiAgICAgICAgIGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCxcbiAgICAgICAgIGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgsXG4gICAgICAgICBpc0ZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCxcbiAgICAgICAgIGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgsXG4gICAgICAgICBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVBhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRtZUZpbGVGcm9tRmlsZXMoZmlsZXMpIHtcbiAgbGV0IHJlYWRtZUZpbGUgPSBudWxsO1xuXG4gIGZpbGVzLnNvbWVGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aFJlYWRtZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aFJlYWRtZUZpbGVQYXRoKSB7XG4gICAgICByZWFkbWVGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZWFkbWVGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnVydGxlRmlsZXNGcm9tRmlsZXMoZmlsZXMpIHtcbiAgY29uc3QgZnVydGxlRmlsZXMgPSBmaWxlcy5yZWR1Y2VGaWxlKChmdXJ0bGVGaWxlcywgZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZUZ1cnRsZUZpbGUgPSBmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoOyAgLy8vXG5cbiAgICBpZiAoZmlsZUZ1cnRsZUZpbGUpIHtcbiAgICAgIGNvbnN0IGZ1cnRsZUZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgIGZ1cnRsZUZpbGVzLnB1c2goZnVydGxlRmlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGZ1cnRsZUZpbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbEZpbGVzRnJvbUZpbGVzKGZpbGVzKSB7XG4gIGNvbnN0IG5vbWluYWxGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKG5vbWluYWxGaWxlcywgZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICBmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCA9IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgZmlsZU5vbWluYWxGaWxlID0gZmlsZVBhdGhOb21pbmFsRmlsZVBhdGg7ICAvLy9cblxuICAgIGlmIChmaWxlTm9taW5hbEZpbGUpIHtcbiAgICAgIGNvbnN0IG5vbWluYWxGaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICBub21pbmFsRmlsZXMucHVzaChub21pbmFsRmlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub21pbmFsRmlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhSlNPTkZpbGVGcm9tRmlsZXMoZmlsZXMpIHtcbiAgbGV0IG1ldGFKU09ORmlsZSA9IG51bGw7XG5cbiAgZmlsZXMuc29tZUZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCA9IGlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aE1ldGFKU09ORmlsZVBhdGgpIHtcbiAgICAgIG1ldGFKU09ORmlsZSA9IGZpbGU7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWV0YUpTT05GaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tR3JhbW1hckJORkZpbGVzRnJvbUZpbGVzKGZpbGVzKSB7XG4gIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkZGaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJCTkZGaWxlcywgZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgICAgICAgZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGggPSBpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlUGF0aEN1c3RvbUdyYW1tYXJCTkZGaWxlUGF0aDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZpbGVDdXN0b21HcmFtbWFyQk5GRmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hckJORkZpbGUgPSBmaWxlOyAgLy8vXG5cbiAgICAgICAgICAgIGN1c3RvbUdyYW1tYXJCTkZGaWxlcy5wdXNoKGN1c3RvbUdyYW1tYXJCTkZGaWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hckJORkZpbGVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZGaWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXNGcm9tRmlsZXMoZmlsZXMpIHtcbiAgY29uc3QgY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcyA9IGZpbGVzLnJlZHVjZUZpbGUoKGN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXMsIGZpbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgICAgICAgIGZpbGVQYXRoQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlUGF0aCA9IGlzRmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICAgICAgICBmaWxlQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlID0gZmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmlsZUN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlID0gZmlsZTsgIC8vL1xuXG4gICAgICAgICAgICBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzLnB1c2goY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzO1xufVxuIl0sIm5hbWVzIjpbImN1c3RvbUdyYW1tYXJCTkZGaWxlc0Zyb21GaWxlcyIsImN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZXNGcm9tRmlsZXMiLCJmdXJ0bGVGaWxlc0Zyb21GaWxlcyIsIm1ldGFKU09ORmlsZUZyb21GaWxlcyIsIm5vbWluYWxGaWxlc0Zyb21GaWxlcyIsInJlYWRtZUZpbGVGcm9tRmlsZXMiLCJmaWxlcyIsInJlYWRtZUZpbGUiLCJzb21lRmlsZSIsImZpbGUiLCJmaWxlUGF0aCIsImdldFBhdGgiLCJmaWxlUGF0aFJlYWRtZUZpbGVQYXRoIiwiaXNGaWxlUGF0aFJlYWRtZUZpbGVQYXRoIiwiZnVydGxlRmlsZXMiLCJyZWR1Y2VGaWxlIiwiZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVGdXJ0bGVGaWxlIiwiZnVydGxlRmlsZSIsInB1c2giLCJub21pbmFsRmlsZXMiLCJmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmaWxlTm9taW5hbEZpbGUiLCJub21pbmFsRmlsZSIsIm1ldGFKU09ORmlsZSIsImZpbGVQYXRoTWV0YUpTT05GaWxlUGF0aCIsImlzRmlsZVBhdGhNZXRhSlNPTkZpbGVQYXRoIiwiY3VzdG9tR3JhbW1hckJORkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyQk5GRmlsZVBhdGgiLCJpc0ZpbGVQYXRoQ3VzdG9tR3JhbW1hckJORkZpbGVQYXRoIiwiZmlsZUN1c3RvbUdyYW1tYXJCTkZGaWxlIiwiY3VzdG9tR3JhbW1hckJORkZpbGUiLCJjdXN0b21HcmFtbWFyUGF0dGVybkZpbGVzIiwiZmlsZVBhdGhDdXN0b21HcmFtbWFyUGF0dGVybkZpbGVQYXRoIiwiaXNGaWxlUGF0aEN1c3RvbUdyYW1tYXJQYXR0ZXJuRmlsZVBhdGgiLCJmaWxlQ3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlIiwiY3VzdG9tR3JhbW1hclBhdHRlcm5GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErRWdCQSw4QkFBOEI7ZUFBOUJBOztJQWtCQUMsa0NBQWtDO2VBQWxDQTs7SUF2RUFDLG9CQUFvQjtlQUFwQkE7O0lBb0NBQyxxQkFBcUI7ZUFBckJBOztJQWxCQUMscUJBQXFCO2VBQXJCQTs7SUFuQ0FDLG1CQUFtQjtlQUFuQkE7Ozt3QkFGdUM7QUFFaEQsU0FBU0Esb0JBQW9CQyxLQUFLO0lBQ3ZDLElBQUlDLGFBQWE7SUFFakJELE1BQU1FLFFBQVEsQ0FBQyxTQUFDQztRQUNkLElBQU1DLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLHlCQUF5QkMsSUFBQUEsa0NBQXdCLEVBQUNIO1FBRXhELElBQUlFLHdCQUF3QjtZQUMxQkwsYUFBYUUsTUFBTyxHQUFHO1lBRXZCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0Y7QUFDVDtBQUVPLFNBQVNMLHFCQUFxQkksS0FBSztJQUN4QyxJQUFNUSxjQUFjUixNQUFNUyxVQUFVLENBQUMsU0FBQ0QsYUFBYUw7UUFDakQsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QksseUJBQXlCQyxJQUFBQSxrQ0FBd0IsRUFBQ1AsV0FDbERRLGlCQUFpQkYsd0JBQXlCLEdBQUc7UUFFbkQsSUFBSUUsZ0JBQWdCO1lBQ2xCLElBQU1DLGFBQWFWLE1BQU8sR0FBRztZQUU3QkssWUFBWU0sSUFBSSxDQUFDRDtRQUNuQjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVDtBQUVPLFNBQVNWLHNCQUFzQkUsS0FBSztJQUN6QyxJQUFNZSxlQUFlZixNQUFNUyxVQUFVLENBQUMsU0FBQ00sY0FBY1o7UUFDbkQsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUMzQlcsMEJBQTBCQyxJQUFBQSxtQ0FBeUIsRUFBQ2IsV0FDcERjLGtCQUFrQkYseUJBQTBCLEdBQUc7UUFFakQsSUFBSUUsaUJBQWlCO1lBQ25CLElBQU1DLGNBQWNoQixNQUFPLEdBQUc7WUFFOUJZLGFBQWFELElBQUksQ0FBQ0s7UUFDcEI7UUFFQSxPQUFPSjtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTbEIsc0JBQXNCRyxLQUFLO0lBQ3pDLElBQUlvQixlQUFlO0lBRW5CcEIsTUFBTUUsUUFBUSxDQUFDLFNBQUNDO1FBQ2QsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QmdCLDJCQUEyQkMsSUFBQUEsb0NBQTBCLEVBQUNsQjtRQUU1RCxJQUFJaUIsMEJBQTBCO1lBQzVCRCxlQUFlakIsTUFBTyxHQUFHO1lBRXpCLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT2lCO0FBQ1Q7QUFFTyxTQUFTMUIsK0JBQStCTSxLQUFLO0lBQ2xELElBQU11Qix3QkFBd0J2QixNQUFNUyxVQUFVLENBQUMsU0FBQ2MsdUJBQXVCcEI7UUFDL0QsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2Qm1CLG1DQUFtQ0MsSUFBQUEsNENBQWtDLEVBQUNyQixXQUN0RXNCLDJCQUEyQkYsa0NBQW1DLEdBQUc7UUFFdkUsSUFBSUUsMEJBQTBCO1lBQzVCLElBQU1DLHVCQUF1QnhCLE1BQU8sR0FBRztZQUV2Q29CLHNCQUFzQlQsSUFBSSxDQUFDYTtRQUM3QjtRQUVBLE9BQU9KO0lBQ1QsR0FBRyxFQUFFO0lBRVgsT0FBT0E7QUFDVDtBQUVPLFNBQVM1QixtQ0FBbUNLLEtBQUs7SUFDdEQsSUFBTTRCLDRCQUE0QjVCLE1BQU1TLFVBQVUsQ0FBQyxTQUFDbUIsMkJBQTJCekI7UUFDdkUsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QndCLHVDQUF1Q0MsSUFBQUEsZ0RBQXNDLEVBQUMxQixXQUM5RTJCLCtCQUErQkYsc0NBQXVDLEdBQUc7UUFFL0UsSUFBSUUsOEJBQThCO1lBQ2hDLElBQU1DLDJCQUEyQjdCLE1BQU8sR0FBRztZQUUzQ3lCLDBCQUEwQmQsSUFBSSxDQUFDa0I7UUFDakM7UUFFQSxPQUFPSjtJQUNULEdBQUcsRUFBRTtJQUVYLE9BQU9BO0FBQ1QifQ==