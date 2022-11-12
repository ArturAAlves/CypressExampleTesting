@parentSuite("Saucedemo")
@suite("Saucedemo")
@epic("Saucedemo")
@story("User_Login")
Feature: User_Area_Features

    I want gherkin scenarios be logged into allure

    Scenario: Sucessfully Login and Logout
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "secret_sauce" and click login btn
        And I should land Sucessfully on "https://www.saucedemo.com/inventory.html"
        Then I click logout and successfully return to "https://www.saucedemo.com"

    Scenario: Try login with wrong username
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "wrongusername" and and password field "secret_sauce" and click login btn
        Then I should get error stating user and password do not match

    Scenario: Try login with wrong password
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "asaa" and click login btn
        Then I should get error stating user and password do not match

    Scenario: Try login with empty username
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "" and and password field "asaa" and click login btn
        Then I should get error stating username field is empty

    Scenario: Try login with empty password
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "" and click login btn
        Then I should get error stating password field is empty








