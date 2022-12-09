Feature: Calculator Functionality

@Calculation
Scenario Outline: Validate Calculation
Given navigate to Calculator page
When user enter <var1> and <var2>
When user click on go button
Then User get valid addintion

Examples:
    | var1 | var2 |
    |  "5" |  "2" | 
    |  "3" |  "4" |