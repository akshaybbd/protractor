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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@LoginFunctionality" }, function () {
    protractor_1.browser.manage().window().maximize();
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBcUM7QUFFckMsSUFBQSxpQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFDLHFCQUFxQixFQUFDLEVBQUU7SUFDakMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNILElBQUEsZ0JBQUssRUFBQyxVQUFlLFFBQVE7O1FBQ3pCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQ3pDO1lBQ0ksTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9