Feature: Test Banking application

    Scenario Outline: Login Test
        Given I launch the url
        When I click on Bank Manager Login
        And I click on Add customer
        And I give the customer details "<FirstName>", "<LastName>","<PostCode>"
        # And I click on Add customer button


        Examples:
            | FirstName | LastName | PostCode |
            | Abhishek  | Thakur   | 1234     |
            | Test      | test     | 2345     |
