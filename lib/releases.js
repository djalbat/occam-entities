"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Releases;
    }
});
const _release = /*#__PURE__*/ _interop_require_default(require("./release"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Releases {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        return this.array.length;
    }
    addRelease(release) {
        this.array.push(release);
    }
    mapRelease(callback) {
        return this.array.map(callback);
    }
    reduceRelease(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachRelease(callback) {
        this.array.forEach(callback);
    }
    toJSON() {
        const json = this.array.map((release)=>{
            const releaseJSON = release.toJSON();
            return releaseJSON;
        });
        return json;
    }
    static fromJSON(json) {
        const array = json.map((json)=>{
            const release = _release.default.fromJSON(json);
            return release;
        }), releases = new Releases(array);
        return releases;
    }
    static fromNothing() {
        const array = [], releases = new Releases(array);
        return releases;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWxlYXNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbGVhc2UgZnJvbSBcIi4vcmVsZWFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFkZFJlbGVhc2UocmVsZWFzZSkgeyB0aGlzLmFycmF5LnB1c2gocmVsZWFzZSk7IH1cblxuICBtYXBSZWxlYXNlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VSZWxlYXNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFJlbGVhc2UoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHJlbGVhc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlbGVhc2VKU09OID0gcmVsZWFzZS50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHJlbGVhc2VKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IFJlbGVhc2UuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiByZWxlYXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHJlbGVhc2VzID0gbmV3IFJlbGVhc2VzKGFycmF5KTtcblxuICAgIHJldHVybiByZWxlYXNlcztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVsZWFzZXMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUmVsZWFzZSIsInJlbGVhc2UiLCJwdXNoIiwibWFwUmVsZWFzZSIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUmVsZWFzZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hSZWxlYXNlIiwiZm9yRWFjaCIsInRvSlNPTiIsImpzb24iLCJyZWxlYXNlSlNPTiIsImZyb21KU09OIiwiUmVsZWFzZSIsInJlbGVhc2VzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0VBRkQ7Ozs7OztBQUVMLE1BQU1BO0lBQ25CLFlBQVlDLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUFFLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07SUFBRTtJQUV4Q0MsV0FBV0MsT0FBTyxFQUFFO1FBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNNLElBQUksQ0FBQ0Q7SUFBVTtJQUVoREUsV0FBV0MsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRDtJQUFXO0lBRXhERSxjQUFjRixRQUFRLEVBQUVHLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osVUFBVUc7SUFBZTtJQUUxRkUsZUFBZUwsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNjLE9BQU8sQ0FBQ047SUFBVztJQUV6RE8sU0FBUztRQUNQLE1BQU1DLE9BQU8sSUFBSSxDQUFDaEIsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0o7WUFDM0IsTUFBTVksY0FBY1osUUFBUVUsTUFBTTtZQUVsQyxPQUFPRTtRQUNUO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLFNBQVNGLElBQUksRUFBRTtRQUNwQixNQUFNaEIsUUFBUWdCLEtBQUtQLEdBQUcsQ0FBQyxDQUFDTztZQUNoQixNQUFNWCxVQUFVYyxnQkFBTyxDQUFDRCxRQUFRLENBQUNGO1lBRWpDLE9BQU9YO1FBQ1QsSUFDQWUsV0FBVyxJQUFJckIsU0FBU0M7UUFFOUIsT0FBT29CO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjO1FBQ25CLE1BQU1yQixRQUFRLEVBQUUsRUFDVm9CLFdBQVcsSUFBSXJCLFNBQVNDO1FBRTlCLE9BQU9vQjtJQUNUO0FBQ0YifQ==