"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependencies;
    }
});
const _dependency = /*#__PURE__*/ _interop_require_default(require("./dependency"));
const _shortenedVersion = /*#__PURE__*/ _interop_require_default(require("./shortenedVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Dependencies {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    addDependency(dependency) {
        this.array.push(dependency);
    }
    mapDependency(callback) {
        return this.array.map(callback);
    }
    everyDependency(callback) {
        return this.array.every(callback);
    }
    reduceDependency(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachDependency(callback) {
        this.array.forEach(callback);
    }
    toJSON() {
        const dependenciesJSON = this.array.reduce((dependenciesJSON, dependency)=>{
            const name = dependency.getName(), shortenedVersion = dependency.getShortenedVersion(), shortenedVersionString = shortenedVersion.toString();
            dependenciesJSON[name] = shortenedVersionString;
            return dependenciesJSON;
        }, {}), json = dependenciesJSON; ///
        return json;
    }
    static fromJSON(json) {
        const dependenciesJSON = json, dependenciesJSONKeys = Object.keys(dependenciesJSON), names = dependenciesJSONKeys, array = names.map((name)=>{
            const shortenedVersionString = dependenciesJSON[name], string = shortenedVersionString, shortenedVersion = _shortenedVersion.default.fromString(string), dependency = _dependency.default.fromNameAndShortenedVersion(name, shortenedVersion);
            return dependency;
        }), dependencies = new Dependencies(array);
        return dependencies;
    }
    static fromNothing() {
        const array = [], dependencies = new Dependencies(array);
        return dependencies;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmNpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZXBlbmRlbmN5IGZyb20gXCIuL2RlcGVuZGVuY3lcIjtcbmltcG9ydCBTaG9ydGVuZWRWZXJzaW9uIGZyb20gXCIuL3Nob3J0ZW5lZFZlcnNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGFkZERlcGVuZGVuY3koZGVwZW5kZW5jeSkgeyB0aGlzLmFycmF5LnB1c2goZGVwZW5kZW5jeSk7IH1cblxuICBtYXBEZXBlbmRlbmN5KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBldmVyeURlcGVuZGVuY3koY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlRGVwZW5kZW5jeShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hEZXBlbmRlbmN5KGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSlNPTiA9IHRoaXMuYXJyYXkucmVkdWNlKChkZXBlbmRlbmNpZXNKU09OLCBkZXBlbmRlbmN5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uID0gZGVwZW5kZW5jeS5nZXRTaG9ydGVuZWRWZXJzaW9uKCksXG4gICAgICAgICAgICAgICAgICBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gc2hvcnRlbmVkVmVyc2lvbi50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OW25hbWVdID0gc2hvcnRlbmVkVmVyc2lvblN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jaWVzSlNPTjtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAganNvbiA9IGRlcGVuZGVuY2llc0pTT047IC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llc0pTT04gPSBqc29uLCAvLy9cbiAgICAgICAgICBkZXBlbmRlbmNpZXNKU09OS2V5cyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llc0pTT04pLFxuICAgICAgICAgIG5hbWVzID0gZGVwZW5kZW5jaWVzSlNPTktleXMsIC8vL1xuICAgICAgICAgIGFycmF5ID0gbmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gZGVwZW5kZW5jaWVzSlNPTltuYW1lXSxcbiAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHNob3J0ZW5lZFZlcnNpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgICAgIHNob3J0ZW5lZFZlcnNpb24gPSBTaG9ydGVuZWRWZXJzaW9uLmZyb21TdHJpbmcoc3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3kgPSBEZXBlbmRlbmN5LmZyb21OYW1lQW5kU2hvcnRlbmVkVmVyc2lvbihuYW1lLCBzaG9ydGVuZWRWZXJzaW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW10sXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gbmV3IERlcGVuZGVuY2llcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVwZW5kZW5jaWVzIiwiYXJyYXkiLCJnZXRBcnJheSIsImFkZERlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwicHVzaCIsIm1hcERlcGVuZGVuY3kiLCJjYWxsYmFjayIsIm1hcCIsImV2ZXJ5RGVwZW5kZW5jeSIsImV2ZXJ5IiwicmVkdWNlRGVwZW5kZW5jeSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hEZXBlbmRlbmN5IiwiZm9yRWFjaCIsInRvSlNPTiIsImRlcGVuZGVuY2llc0pTT04iLCJuYW1lIiwiZ2V0TmFtZSIsInNob3J0ZW5lZFZlcnNpb24iLCJnZXRTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvblN0cmluZyIsInRvU3RyaW5nIiwianNvbiIsImZyb21KU09OIiwiZGVwZW5kZW5jaWVzSlNPTktleXMiLCJPYmplY3QiLCJrZXlzIiwibmFtZXMiLCJzdHJpbmciLCJTaG9ydGVuZWRWZXJzaW9uIiwiZnJvbVN0cmluZyIsIkRlcGVuZGVuY3kiLCJmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24iLCJkZXBlbmRlbmNpZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFxQkE7OzttRUFIRTt5RUFDTTs7Ozs7O0FBRWQsTUFBTUE7SUFDbkIsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0QsS0FBSztJQUNuQjtJQUVBRSxjQUFjQyxVQUFVLEVBQUU7UUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0ksSUFBSSxDQUFDRDtJQUFhO0lBRXpERSxjQUFjQyxRQUFRLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxHQUFHLENBQUNEO0lBQVc7SUFFM0RFLGdCQUFnQkYsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNOLEtBQUssQ0FBQ1MsS0FBSyxDQUFDSDtJQUFXO0lBRS9ESSxpQkFBaUJKLFFBQVEsRUFBRUssWUFBWSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDTixVQUFVSztJQUFlO0lBRTdGRSxrQkFBa0JQLFFBQVEsRUFBRTtRQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDYyxPQUFPLENBQUNSO0lBQVc7SUFFNURTLFNBQVM7UUFDUCxNQUFNQyxtQkFBbUIsSUFBSSxDQUFDaEIsS0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0ksa0JBQWtCYjtZQUN0RCxNQUFNYyxPQUFPZCxXQUFXZSxPQUFPLElBQ3pCQyxtQkFBbUJoQixXQUFXaUIsbUJBQW1CLElBQ2pEQyx5QkFBeUJGLGlCQUFpQkcsUUFBUTtZQUV4RE4sZ0JBQWdCLENBQUNDLEtBQUssR0FBR0k7WUFFekIsT0FBT0w7UUFDVCxHQUFHLENBQUMsSUFDSk8sT0FBT1Asa0JBQWtCLEdBQUc7UUFFbEMsT0FBT087SUFDVDtJQUVBLE9BQU9DLFNBQVNELElBQUksRUFBRTtRQUNwQixNQUFNUCxtQkFBbUJPLE1BQ25CRSx1QkFBdUJDLE9BQU9DLElBQUksQ0FBQ1gsbUJBQ25DWSxRQUFRSCxzQkFDUnpCLFFBQVE0QixNQUFNckIsR0FBRyxDQUFDLENBQUNVO1lBQ2pCLE1BQU1JLHlCQUF5QkwsZ0JBQWdCLENBQUNDLEtBQUssRUFDL0NZLFNBQVNSLHdCQUNURixtQkFBbUJXLHlCQUFnQixDQUFDQyxVQUFVLENBQUNGLFNBQy9DMUIsYUFBYTZCLG1CQUFVLENBQUNDLDJCQUEyQixDQUFDaEIsTUFBTUU7WUFFaEUsT0FBT2hCO1FBQ1QsSUFDQStCLGVBQWUsSUFBSW5DLGFBQWFDO1FBRXRDLE9BQU9rQztJQUNUO0lBRUEsT0FBT0MsY0FBYztRQUNuQixNQUFNbkMsUUFBUSxFQUFFLEVBQ1ZrQyxlQUFlLElBQUluQyxhQUFhQztRQUV0QyxPQUFPa0M7SUFDVDtBQUNGIn0=