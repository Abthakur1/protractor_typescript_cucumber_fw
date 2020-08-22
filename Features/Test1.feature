Feature: Test Banking application

    Background: Launch URL
        Given I launch the url "http://way2automation.com/angularjs-protractor/banking/#/login"

    Scenario Outline: Add customer through bank manager login option

        When I click on Bank Manager Login
        And I click on Add customer
        And I give the customer details "<FirstName>", "<LastName>","<PostCode>"
        And I click on Add customer button
        Then I should get the popup


        Examples:
            | FirstName | LastName | PostCode |
            | Abhishek  | Thakur   | 1234     |
# | Test      | test     | 2345     |
