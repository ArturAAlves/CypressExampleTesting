
@parentSuite("Saucedemo")
@suite("Saucedemo_login")
@epic("Saucedemo_login")
@story("Behaviours_story")
Feature: Saucedemo Login


    I want gherkin scenarios be logged into allure

    Scenario: Sucessfully Login
        Given I access "https://www.saucedemo.com" page Sucessfully
        When I fill username field with "standard_user" and and password field "secret_sauce" and click login btn
        Then I should land Sucessfully on "https://www.saucedemo.com/inventory.html"

