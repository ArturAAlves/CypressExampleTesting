@parentSuite("Saucedemo")
@suite("Saucedemo")
@epic("Saucedemo")
@story("User_Login")
Feature: Login_User_Area

    I want gherkin scenarios be logged into allure

    @smoke
    Scenario: Sucessfully Login and Logout
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "secret_sauce" and click login btn
        And I land Sucessfully on "https://www.saucedemo.com/inventory.html"
        Then I click logout and successfully return to "https://www.saucedemo.com"

    Scenario: Try login with wrong username
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "wrongusername" and and password field "secret_sauce" and click login btn
        Then I get error stating user and password do not match

    Scenario: Try login with wrong password
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "asaa" and click login btn
        Then I get error stating user and password do not match

    Scenario: Try login with empty username
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "" and and password field "asaa" and click login btn
        Then I get error stating username field is empty

    Scenario: Try login with empty password
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "" and click login btn
        Then I get error stating password field is empty

    Scenario: Try login with empty username and password -  fail
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "" and and password field "" and click login btn
        Then I get error stating username field and password field are empty

    Scenario: Try login with empty locked_out_user
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "locked_out_user" and and password field "secret_sauce" and click login btn
        Then I get error stating username is locked out

    Scenario: Try login with performance_glitch_user -  take longer to login
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "performance_glitch_user" and and password field "secret_sauce" and click login btn
        Then I land Sucessfully on "https://www.saucedemo.com/inventory.html"








