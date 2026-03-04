"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Projects;
    }
});
const _project = /*#__PURE__*/ _interop_require_default(require("./project"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Projects {
    constructor(array){
        this.array = array;
    }
    getArray() {
        return this.array;
    }
    getLength() {
        return this.array.length;
    }
    addProject(project) {
        this.array.push(project);
    }
    mapProject(callback) {
        return this.array.map(callback);
    }
    reduceProject(callback, initialValue) {
        return this.array.reduce(callback, initialValue);
    }
    forEachProject(callback) {
        this.array.forEach(callback);
    }
    toJSON() {
        const json = this.array.map((project)=>{
            const projectJSON = project.toJSON();
            return projectJSON;
        });
        return json;
    }
    static fromJSON(json) {
        const array = json.map((json)=>{
            const project = _project.default.fromJSON(json);
            return project;
        }), projects = new Projects(array);
        return projects;
    }
    static fromNothing() {
        const array = [], projects = new Projects(array);
        return projects;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkgeyB0aGlzLmFycmF5LnB1c2gocHJvamVjdCk7IH1cblxuICBtYXBQcm9qZWN0KGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZWR1Y2VQcm9qZWN0KGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZm9yRWFjaFByb2plY3QoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5hcnJheS5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RKU09OID0gcHJvamVjdC50b0pTT04oKTtcblxuICAgICAgcmV0dXJuIHByb2plY3RKU09OO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGFycmF5ID0ganNvbi5tYXAoKGpzb24pID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIHByb2plY3RzID0gbmV3IFByb2plY3RzKGFycmF5KTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUHJvamVjdHMiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwibWFwUHJvamVjdCIsImNhbGxiYWNrIiwibWFwIiwicmVkdWNlUHJvamVjdCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hQcm9qZWN0IiwiZm9yRWFjaCIsInRvSlNPTiIsImpzb24iLCJwcm9qZWN0SlNPTiIsImZyb21KU09OIiwiUHJvamVjdCIsInByb2plY3RzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0VBRkQ7Ozs7OztBQUVMLE1BQU1BO0lBQ25CLFlBQVlDLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNELEtBQUs7SUFDbkI7SUFFQUUsWUFBWTtRQUFFLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLE1BQU07SUFBRTtJQUV4Q0MsV0FBV0MsT0FBTyxFQUFFO1FBQUUsSUFBSSxDQUFDTCxLQUFLLENBQUNNLElBQUksQ0FBQ0Q7SUFBVTtJQUVoREUsV0FBV0MsUUFBUSxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDRDtJQUFXO0lBRXhERSxjQUFjRixRQUFRLEVBQUVHLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLE1BQU0sQ0FBQ0osVUFBVUc7SUFBZTtJQUUxRkUsZUFBZUwsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNjLE9BQU8sQ0FBQ047SUFBVztJQUV6RE8sU0FBUztRQUNQLE1BQU1DLE9BQU8sSUFBSSxDQUFDaEIsS0FBSyxDQUFDUyxHQUFHLENBQUMsQ0FBQ0o7WUFDM0IsTUFBTVksY0FBY1osUUFBUVUsTUFBTTtZQUVsQyxPQUFPRTtRQUNUO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE9BQU9FLFNBQVNGLElBQUksRUFBRTtRQUNwQixNQUFNaEIsUUFBUWdCLEtBQUtQLEdBQUcsQ0FBQyxDQUFDTztZQUNoQixNQUFNWCxVQUFVYyxnQkFBTyxDQUFDRCxRQUFRLENBQUNGO1lBRWpDLE9BQU9YO1FBQ1QsSUFDQWUsV0FBVyxJQUFJckIsU0FBU0M7UUFFOUIsT0FBT29CO0lBQ1Q7SUFFQSxPQUFPQyxjQUFjO1FBQ25CLE1BQU1yQixRQUFRLEVBQUUsRUFDVm9CLFdBQVcsSUFBSXJCLFNBQVNDO1FBRTlCLE9BQU9vQjtJQUNUO0FBQ0YifQ==