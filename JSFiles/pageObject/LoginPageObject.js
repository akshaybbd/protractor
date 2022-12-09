"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageObject = void 0;
const protractor_1 = require("protractor");
class LoginPageObject {
    constructor() {
        this.username = (0, protractor_1.element)(protractor_1.by.id("username"));
        this.password = (0, protractor_1.element)(protractor_1.by.id("password"));
        this.submit = (0, protractor_1.element)(protractor_1.by.css("button[type='submit']"));
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getSubmit() {
        return this.submit;
    }
}
exports.LoginPageObject = LoginPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9Mb2dpblBhZ2VPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBQ3hELE1BQWEsZUFBZTtJQUt4QjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFFekQsQ0FBQztJQUVELFdBQVc7UUFFUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELFdBQVc7UUFFUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELFNBQVM7UUFFTCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBekJELDBDQXlCQyJ9