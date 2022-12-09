import {Given,When,Then} from "cucumber";
import { calculator } from "../pageObject/calculator";
import {browser,element,by} from "protractor";
import chai from "chai";
var expect = chai.expect;

let obj = new calculator();


Given('navigate to Calculator page', async()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');
});

When('user enter {string} and {string}', async(string, string2)=> {
    await obj.getFirstBox().sendKeys(string);
    await obj.getSecondBox().sendKeys(string2);
   
});

When('user click on go button', async ()=> {
    await obj.getGo().click();
});

Then('User get valid addintion', async()=> {
		await element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
			expect(text).to.equal("7");
            console.log('Value of Addition will Be '+ text);
		});
});