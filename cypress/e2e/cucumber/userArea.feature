
@parentSuite("Saucedemo")
@suite("Saucedemo_login")
@epic("Saucedemo_login")
@story("Behaviours_story")
Feature: User area features


    I want gherkin scenarios be logged into allure


    Scenario: Try to Complete an order without products added to cart
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        Then I will have the checkout button invisble

    Scenario: Verify continue shopping functionality
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        And I click "Continue Shopping" button
        Then I should be back in "https://www.saucedemo.com/" page successfully


    Scenario: Verify continue shopping functionality
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        And I click "Continue Shopping" button
        Then I should be back in "https://www.saucedemo.com/" page successfully

    Scenario: Try to complete order process leaving first name field empty
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        Then I will have the checkout button visibility confirmed
        And I click the checkout button
        Then I Will land on "https://www.saucedemo.com/checkout-step-one.html"
        When I fill the form with valid data using, firstname "" lastname "ZZZZ" and Postal code "4430-000"
        And I click continue button
        Then I should get an error "Error: First Name is required"

    Scenario: Try to complete order process leaving last name field empty
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        Then I will have the checkout button visibility confirmed
        And I click the checkout button
        Then I Will land on "https://www.saucedemo.com/checkout-step-one.html"
        When I fill the form with valid data using, firstname "aaa" lastname "" and Postal code "4430-000"
        And I click continue button
        Then I should get an error "Error: Last Name is required"


    Scenario: Try to complete order process leaving postal code field empty
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        Then I will have the checkout button visibility confirmed
        And I click the checkout button
        Then I Will land on "https://www.saucedemo.com/checkout-step-one.html"
        When I fill the form with valid data using, firstname "aaa" lastname "aaa" and Postal code ""
        And I click continue button
        Then I should get an error "Error: Postal Code is required"























