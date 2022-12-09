import { element, ElementFinder, by } from "protractor";

export class calculator
{
    firstBox:ElementFinder;
    secondBox:ElementFinder;
    go:ElementFinder;

    constructor()
    {
        this.firstBox=element(by.model('first'));
        this.secondBox=element(by.model('second'));
        this.go=element(by.id('gobutton'))
    }

    getFirstBox()
    {
        return this.firstBox;
    }
    getSecondBox()
    {
        return this.secondBox;
    }
    getGo()
    {
        return this.go;
    }
}