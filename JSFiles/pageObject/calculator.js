"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firstBox = (0, protractor_1.element)(protractor_1.by.model('first'));
        this.secondBox = (0, protractor_1.element)(protractor_1.by.model('second'));
        this.go = (0, protractor_1.element)(protractor_1.by.id('gobutton'));
    }
    getFirstBox() {
        return this.firstBox;
    }
    getSecondBox() {
        return this.secondBox;
    }
    getGo() {
        return this.go;
    }
}
exports.calculator = calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxVQUFVO0lBTW5CO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELFdBQVc7UUFFUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELFlBQVk7UUFFUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELEtBQUs7UUFFRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBekJELGdDQXlCQyJ9