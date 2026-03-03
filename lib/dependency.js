"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Dependency;
    }
});
class Dependency {
    constructor(name, shortenedVersion){
        this.name = name;
        this.shortenedVersion = shortenedVersion;
    }
    getName() {
        return this.name;
    }
    getShortenedVersion() {
        return this.shortenedVersion;
    }
    asString() {
        let string;
        if (this.shortenedVersion !== null) {
            const shortenedVersionString = this.shortenedVersion.toString();
            string = `${this.name}@${shortenedVersionString}`;
        } else {
            string = this.name; ///
        }
        return string;
    }
    static fromName(name) {
        const shortenedVersion = null, dependency = new Dependency(name, shortenedVersion);
        return dependency;
    }
    static fromNameAndShortenedVersion(name, shortenedVersion) {
        const dependency = new Dependency(name, shortenedVersion);
        return dependency;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXBlbmRlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXBlbmRlbmN5IHtcbiAgY29uc3RydWN0b3IobmFtZSwgc2hvcnRlbmVkVmVyc2lvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaG9ydGVuZWRWZXJzaW9uID0gc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFNob3J0ZW5lZFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvcnRlbmVkVmVyc2lvbjtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAodGhpcy5zaG9ydGVuZWRWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaG9ydGVuZWRWZXJzaW9uU3RyaW5nID0gdGhpcy5zaG9ydGVuZWRWZXJzaW9uLnRvU3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX1AJHtzaG9ydGVuZWRWZXJzaW9uU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmFtZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgc2hvcnRlbmVkVmVyc2lvbiA9IG51bGwsXG4gICAgICAgICAgZGVwZW5kZW5jeSA9IG5ldyBEZXBlbmRlbmN5KG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmRTaG9ydGVuZWRWZXJzaW9uKG5hbWUsIHNob3J0ZW5lZFZlcnNpb24pIHtcbiAgICBjb25zdCBkZXBlbmRlbmN5ID0gbmV3IERlcGVuZGVuY3kobmFtZSwgc2hvcnRlbmVkVmVyc2lvbik7XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlcGVuZGVuY3kiLCJuYW1lIiwic2hvcnRlbmVkVmVyc2lvbiIsImdldE5hbWUiLCJnZXRTaG9ydGVuZWRWZXJzaW9uIiwiYXNTdHJpbmciLCJzdHJpbmciLCJzaG9ydGVuZWRWZXJzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJmcm9tTmFtZSIsImRlcGVuZGVuY3kiLCJmcm9tTmFtZUFuZFNob3J0ZW5lZFZlcnNpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxJQUFJLEVBQUVDLGdCQUFnQixDQUFFO1FBQ2xDLElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtJQUM5QjtJQUVBRyxXQUFXO1FBQ1QsSUFBSUM7UUFFSixJQUFJLElBQUksQ0FBQ0osZ0JBQWdCLEtBQUssTUFBTTtZQUNsQyxNQUFNSyx5QkFBeUIsSUFBSSxDQUFDTCxnQkFBZ0IsQ0FBQ00sUUFBUTtZQUU3REYsU0FBUyxHQUFHLElBQUksQ0FBQ0wsSUFBSSxDQUFDLENBQUMsRUFBRU0sd0JBQXdCO1FBQ25ELE9BQU87WUFDTEQsU0FBUyxJQUFJLENBQUNMLElBQUksRUFBRSxHQUFHO1FBQ3pCO1FBRUEsT0FBT0s7SUFDVDtJQUVBLE9BQU9HLFNBQVNSLElBQUksRUFBRTtRQUNwQixNQUFNQyxtQkFBbUIsTUFDbkJRLGFBQWEsSUFBSVYsV0FBV0MsTUFBTUM7UUFFeEMsT0FBT1E7SUFDVDtJQUVBLE9BQU9DLDRCQUE0QlYsSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRTtRQUN6RCxNQUFNUSxhQUFhLElBQUlWLFdBQVdDLE1BQU1DO1FBRXhDLE9BQU9RO0lBQ1Q7QUFDRiJ9