Feature: Validate login functionality

@LoginFunctionality
Scenario: Login with invalid credentials

Given navigate to login page
When user enter invalid username and password
When user click on submit
Then User get invalid password message
