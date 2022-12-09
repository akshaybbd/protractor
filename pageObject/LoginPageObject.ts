import { element, ElementFinder, by } from "protractor";
export class LoginPageObject{
    username:ElementFinder;
    password:ElementFinder;
    submit:ElementFinder;
    
    constructor()
    {
        this.username=element(by.id("username"));
        this.password=element(by.id("password"));
        this.submit=element(by.css("button[type='submit']"));
        
    }

    getUsername()
    {
        return this.username;
    }
    getPassword()
    {
        return this.password;
    }
    getSubmit()
    {
        return this.submit;
    }
}