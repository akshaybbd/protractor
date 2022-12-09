"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPageObject_1 = require("../pageObject/LoginPageObject");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let obj = new LoginPageObject_1.LoginPageObject();
(0, cucumber_1.Given)('navigate to login page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
}));
(0, cucumber_1.When)('user enter invalid username and password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield obj.getUsername().sendKeys("abc@gmail.com");
    yield obj.getPassword().sendKeys("1234567890");
}));
(0, cucumber_1.When)('user click on submit', () => __awaiter(void 0, void 0, void 0, function* () {
    yield obj.getSubmit().click();
}));
(0, cucumber_1.Then)('User get invalid password message', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.css("div[class*='ng-binding']")).getText().then(function (text) {
        expect(text).to.equal("Username or password is incorrect");
        console.log("Text is : ", text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb24vcmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlDO0FBQ3pDLG1FQUFnRTtBQUNoRSwyQ0FBOEM7QUFDOUMsZ0RBQXVCO0FBQ3ZCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFFaEMsSUFBQSxnQkFBSyxFQUFDLHdCQUF3QixFQUFFLEdBQU8sRUFBRTtJQUdqQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG1GQUFtRixDQUFDLENBQUE7QUFDNUcsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLElBQUEsZUFBSSxFQUFDLDBDQUEwQyxFQUFFLEdBQU8sRUFBRTtJQUN0RCxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyxzQkFBc0IsRUFBRyxHQUFPLEVBQUU7SUFDbkMsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLG1DQUFtQyxFQUFFLEdBQU8sRUFBRTtJQUMvQyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=