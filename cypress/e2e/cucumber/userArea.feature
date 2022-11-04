
@parentSuite("Saucedemo")
@suite("Saucedemo_login")
@epic("Saucedemo_login")
@story("Behaviours_story")
Feature: User area features


    I want gherkin scenarios be logged into allure

    Scenario: Suceessfully Complete an order
        Given I am logged in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        Then I Will have the checkout button visible
        When I click the checkout button
        Then I Will land on "https://www.saucedemo.com/checkout-step-one.html"
        When I fill the form with valid data using, firstname "AAA" lastname "ZZZZ" and Postal code "4430-000"
        And I click continue button i will be redirected to "https://www.saucedemo.com/checkout-step-two.html"
        When I click Finish button and land on the "https://www.saucedemo.com/checkout-complete.html"
        Then I will have have a message :"THANK YOU FOR YOUR ORDER"









