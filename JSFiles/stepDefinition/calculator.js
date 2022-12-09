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
const calculator_1 = require("../pageObject/calculator");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let obj = new calculator_1.calculator();
(0, cucumber_1.Given)('navigate to Calculator page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
(0, cucumber_1.When)('user enter {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield obj.getFirstBox().sendKeys(string);
    yield obj.getSecondBox().sendKeys(string2);
}));
(0, cucumber_1.When)('user click on go button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield obj.getGo().click();
}));
(0, cucumber_1.Then)('User get valid addintion', () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, protractor_1.element)(protractor_1.by.css("h2[class='ng-binding']")).getText().then(function (text) {
        expect(text).to.equal("7");
        console.log('Value of Addition will Be ' + text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9uL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUM7QUFDekMseURBQXNEO0FBQ3RELDJDQUE4QztBQUM5QyxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUczQixJQUFBLGdCQUFLLEVBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsa0NBQWtDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDN0QsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMseUJBQXlCLEVBQUUsR0FBUSxFQUFFO0lBQ3RDLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQywwQkFBMEIsRUFBRSxHQUFPLEVBQUU7SUFDeEMsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUMzRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9