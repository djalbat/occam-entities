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
const _file = /*#__PURE__*/ _interop_require_default(require("./file"));
const _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
const _entries1 = /*#__PURE__*/ _interop_require_default(require("./mixins/entries"));
const _metaJSON = require("./utilities/metaJSON");
const _filePath = require("./utilities/filePath");
const _files = require("./utilities/files");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Release {
    constructor(name, entries){
        this.name = name;
        this.entries = entries;
    }
    getName() {
        return this.name;
    }
    getEntries() {
        return this.entries;
    }
    updateVersion(version) {
        let repository = this.getRepository(), dependencies = this.getDependencies();
        const versionString = version.toString(), repositoryJSON = repository, dependenciesJSON = dependencies.toJSON();
        version = versionString; ///
        repository = repositoryJSON; ///
        dependencies = dependenciesJSON; ///
        const metaJSONFile = this.getMetaJSONFile(), json = {
            version,
            repository,
            dependencies
        }, jsonString = JSON.stringify(json, null, 2), file = metaJSONFile, content = jsonString; ///
        file.setContent(content);
    }
    toJSON() {
        const entriesJSON = this.entries.toJSON(), name = this.name, entries = entriesJSON, json = {
            name,
            entries
        };
        return json;
    }
    static fromJSON(json) {
        let { entries } = json;
        const { name } = json, entriesJSON = entries; ///
        json = entriesJSON; ///
        entries = _entries.default.fromJSON(json); ///
        const release = new Release(name, entries);
        return release;
    }
    static fromProject(project) {
        let release = null, entries = project.getEntries();
        const entriesReleasable = areEntriesReleasable(entries);
        if (entriesReleasable) {
            const name = project.getName(), releasedEntries = releaseEntriesFromEntries(entries);
            entries = releasedEntries; ///
            release = new Release(name, entries);
        }
        return release;
    }
    static fromNameAndEntries(name, entries) {
        let release = null;
        const entriesReleasable = areEntriesReleasable(entries);
        if (entriesReleasable) {
            release = new Release(name, entries);
        }
        return release;
    }
}
Object.assign(Release.prototype, _entries1.default);
const _default = Release;
function releaseEntriesFromEntries(entries) {
    const releasedEntries = _entries.default.fromNothing(), files = entries.getFiles();
    files.forEachFile((file)=>{
        const filePath = file.getPath(), filePathReleaseFilePath = (0, _filePath.isFilePathReleaseFilePath)(filePath);
        if (filePathReleaseFilePath) {
            const path = filePath, content = file.getContent(), released = true;
            file = _file.default.fromPathContentAndReleased(path, content, released); ///
            releasedEntries.addFile(file);
        }
    });
    return releasedEntries;
}
function areEntriesReleasable(entries) {
    let entriesReleasable = false;
    const files = entries.getFiles(), readmeFile = (0, _files.readmeFileFromFiles)(files), metaJSONFile = (0, _files.metaJSONFileFromFiles)(files);
    if (readmeFile !== null && metaJSONFile !== null) {
        const metaJSONFileValid = (0, _metaJSON.isMetaJSONFileValid)(metaJSONFile);
        if (metaJSONFileValid) {
            entriesReleasable = true;
        }
    }
    return entriesReleasable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgRW50cmllcyBmcm9tIFwiLi9lbnRyaWVzXCI7XG5pbXBvcnQgZW50cmllc01peGlucyBmcm9tIFwiLi9taXhpbnMvZW50cmllc1wiO1xuXG5pbXBvcnQgeyBpc01ldGFKU09ORmlsZVZhbGlkIH0gZnJvbSBcIi4vdXRpbGl0aWVzL21ldGFKU09OXCI7XG5pbXBvcnQgeyBpc0ZpbGVQYXRoUmVsZWFzZUZpbGVQYXRoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2ZpbGVQYXRoXCI7XG5pbXBvcnQgeyByZWFkbWVGaWxlRnJvbUZpbGVzLCBtZXRhSlNPTkZpbGVGcm9tRmlsZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZXNcIjtcblxuY2xhc3MgUmVsZWFzZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVudHJpZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICB1cGRhdGVWZXJzaW9uKHZlcnNpb24pIHtcbiAgICBsZXQgcmVwb3NpdG9yeSA9IHRoaXMuZ2V0UmVwb3NpdG9yeSgpLFxuICAgICAgICBkZXBlbmRlbmNpZXMgPSB0aGlzLmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgY29uc3QgdmVyc2lvblN0cmluZyA9IHZlcnNpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5SlNPTiA9IHJlcG9zaXRvcnksICAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OID0gZGVwZW5kZW5jaWVzLnRvSlNPTigpO1xuXG4gICAgdmVyc2lvbiA9IHZlcnNpb25TdHJpbmc7ICAvLy9cbiAgICByZXBvc2l0b3J5ID0gcmVwb3NpdG9yeUpTT047ICAvLy9cbiAgICBkZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXNKU09OOyAgLy8vXG5cbiAgICBjb25zdCBtZXRhSlNPTkZpbGUgPSB0aGlzLmdldE1ldGFKU09ORmlsZSgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgcmVwb3NpdG9yeSxcbiAgICAgICAgICAgIGRlcGVuZGVuY2llc1xuICAgICAgICAgIH0sXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpLFxuICAgICAgICAgIGZpbGUgPSBtZXRhSlNPTkZpbGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0ganNvblN0cmluZzsgLy8vXG5cbiAgICBmaWxlLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCB7IGVudHJpZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgZW50cmllc0pTT04gPSBlbnRyaWVzOyAgLy8vXG5cbiAgICBqc29uID0gZW50cmllc0pTT047IC8vL1xuXG4gICAgZW50cmllcyA9IEVudHJpZXMuZnJvbUpTT04oanNvbik7IC8vL1xuXG4gICAgY29uc3QgcmVsZWFzZSA9IG5ldyBSZWxlYXNlKG5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCByZWxlYXNlID0gbnVsbCxcbiAgICAgICAgZW50cmllcyA9IHByb2plY3QuZ2V0RW50cmllcygpO1xuXG4gICAgY29uc3QgZW50cmllc1JlbGVhc2FibGUgPSBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKTtcblxuICAgIGlmIChlbnRyaWVzUmVsZWFzYWJsZSkge1xuICAgICAgY29uc3QgbmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmVsZWFzZWRFbnRyaWVzID0gcmVsZWFzZUVudHJpZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICAgICAgZW50cmllcyA9IHJlbGVhc2VkRW50cmllczsgIC8vL1xuXG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpIHtcbiAgICBsZXQgcmVsZWFzZSA9IG51bGw7XG5cbiAgICBjb25zdCBlbnRyaWVzUmVsZWFzYWJsZSA9IGFyZUVudHJpZXNSZWxlYXNhYmxlKGVudHJpZXMpO1xuXG4gICAgaWYgKGVudHJpZXNSZWxlYXNhYmxlKSB7XG4gICAgICByZWxlYXNlID0gbmV3IFJlbGVhc2UobmFtZSwgZW50cmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbGVhc2U7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWxlYXNlLnByb3RvdHlwZSwgZW50cmllc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGVhc2U7XG5cbmZ1bmN0aW9uIHJlbGVhc2VFbnRyaWVzRnJvbUVudHJpZXMoZW50cmllcykge1xuICBjb25zdCByZWxlYXNlZEVudHJpZXMgPSBFbnRyaWVzLmZyb21Ob3RoaW5nKCksICAvLy9cbiAgICAgICAgZmlsZXMgPSBlbnRyaWVzLmdldEZpbGVzKCk7XG5cbiAgZmlsZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoUmVsZWFzZUZpbGVQYXRoID0gaXNGaWxlUGF0aFJlbGVhc2VGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhSZWxlYXNlRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBmaWxlUGF0aCwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcmVsZWFzZWQgPSB0cnVlO1xuXG4gICAgICBmaWxlID0gRmlsZS5mcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZChwYXRoLCBjb250ZW50LCByZWxlYXNlZCk7ICAvLy9cblxuICAgICAgcmVsZWFzZWRFbnRyaWVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVsZWFzZWRFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBhcmVFbnRyaWVzUmVsZWFzYWJsZShlbnRyaWVzKSB7XG4gIGxldCBlbnRyaWVzUmVsZWFzYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGZpbGVzID0gZW50cmllcy5nZXRGaWxlcygpLFxuICAgICAgICByZWFkbWVGaWxlID0gcmVhZG1lRmlsZUZyb21GaWxlcyhmaWxlcyksXG4gICAgICAgIG1ldGFKU09ORmlsZSA9IG1ldGFKU09ORmlsZUZyb21GaWxlcyhmaWxlcyk7XG5cbiAgaWYgKChyZWFkbWVGaWxlICE9PSBudWxsKSAmJiAobWV0YUpTT05GaWxlICE9PSBudWxsKSkge1xuICAgIGNvbnN0IG1ldGFKU09ORmlsZVZhbGlkID0gaXNNZXRhSlNPTkZpbGVWYWxpZChtZXRhSlNPTkZpbGUpO1xuXG4gICAgaWYgKG1ldGFKU09ORmlsZVZhbGlkKSB7XG4gICAgICBlbnRyaWVzUmVsZWFzYWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVudHJpZXNSZWxlYXNhYmxlO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2UiLCJuYW1lIiwiZW50cmllcyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwidXBkYXRlVmVyc2lvbiIsInZlcnNpb24iLCJyZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsInZlcnNpb25TdHJpbmciLCJ0b1N0cmluZyIsInJlcG9zaXRvcnlKU09OIiwiZGVwZW5kZW5jaWVzSlNPTiIsInRvSlNPTiIsIm1ldGFKU09ORmlsZSIsImdldE1ldGFKU09ORmlsZSIsImpzb24iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImVudHJpZXNKU09OIiwiZnJvbUpTT04iLCJFbnRyaWVzIiwicmVsZWFzZSIsImZyb21Qcm9qZWN0IiwicHJvamVjdCIsImVudHJpZXNSZWxlYXNhYmxlIiwiYXJlRW50cmllc1JlbGVhc2FibGUiLCJyZWxlYXNlZEVudHJpZXMiLCJyZWxlYXNlRW50cmllc0Zyb21FbnRyaWVzIiwiZnJvbU5hbWVBbmRFbnRyaWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZW50cmllc01peGlucyIsImZyb21Ob3RoaW5nIiwiZmlsZXMiLCJnZXRGaWxlcyIsImZvckVhY2hGaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwiZmlsZVBhdGhSZWxlYXNlRmlsZVBhdGgiLCJpc0ZpbGVQYXRoUmVsZWFzZUZpbGVQYXRoIiwicGF0aCIsImdldENvbnRlbnQiLCJyZWxlYXNlZCIsIkZpbGUiLCJmcm9tUGF0aENvbnRlbnRBbmRSZWxlYXNlZCIsImFkZEZpbGUiLCJyZWFkbWVGaWxlIiwicmVhZG1lRmlsZUZyb21GaWxlcyIsIm1ldGFKU09ORmlsZUZyb21GaWxlcyIsIm1ldGFKU09ORmlsZVZhbGlkIiwiaXNNZXRhSlNPTkZp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