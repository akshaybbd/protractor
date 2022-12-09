import {Given,When,Then} from "cucumber";
import { LoginPageObject } from "../pageObject/LoginPageObject";
import {browser,element,by,} from "protractor"
import chai from "chai"
var expect = chai.expect;

let obj = new LoginPageObject();

Given('navigate to login page', async()=> {

    
        await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  });

When('user enter invalid username and password', async()=> {
    await obj.getUsername().sendKeys("abc@gmail.com");
    await obj.getPassword().sendKeys("1234567890");
});

When('user click on submit',  async()=> {
    await obj.getSubmit().click();
});

Then('User get invalid password message', async()=> {
    await element(by.css("div[class*='ng-binding']")).getText().then(function(text){
        expect(text).to.equal("Username or password is incorrect");
        console.log("Text is : ",text)
    });
});