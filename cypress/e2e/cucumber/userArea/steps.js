import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../../page-objects/pages/LoginPage');
const userAreaPage = require('../../../page-objects/pages/UserAreaPage');

Given(
    'I visit {string} and log in successfully with username {string} and password {string}',
    (url, user, password) => {
        loginPage.visit(url);
        loginPage.fillLogin(user, password);
    }
);

When('I click add to cart on item {string}', (item) => {
    userAreaPage.addItemToCart(item);
    /*   userAreaPage.clickCartBtn(); */
});

When('I click on the cart button i will land on {string}', (url) => {
    userAreaPage.clickCartBtn();
    loginPage.verifyUrl(url);
});

Then('I will have the checkout button visibility confirmed', () => {
    userAreaPage.checkvisibility();
});

When('I click the checkout button', () => {
    userAreaPage.clickCheckoutBtn();
});

Then('I Will land on {string}', (url) => {
    loginPage.verifyUrl(url);
});
When(
    'I fill the form with valid data using, firstname {string} lastname {string} and Postal code {string}',
    (firstName, lastName, postalCode) => {
        userAreaPage.fillCheckoutInformationForm(
            firstName,
            lastName,
            postalCode
        );
        userAreaPage.clickContinueBtn();
    }
);

When('I click continue button then redirected to {string}', (url) => {
    loginPage.verifyUrl(url);
});

When('I click Finish button and land on the {string}', (url) => {
    userAreaPage.clickFinishBtn();
    loginPage.verifyUrl(url);
});

When('I will have have a message :{string}', (message) => {
    userAreaPage.confirmCheckoutMessage(message);
});

When('I click Back Home button', () => {
    userAreaPage.clickCheckoutBackHomeBtn();
});

Then('I will be in {string}', (url) => {
    loginPage.verifyUrl(url);
});

Then('I should have {string} items in the cart', (itemNumber) => {
    userAreaPage.checkItemsInCart(itemNumber);
});

When('I click remove button on item {string}', (item) => {
    userAreaPage.removeItemFromCart(item);
});

When(
    'I confirm that the number of items in cart page is {string}, {string} and {string}',
    (numberOfItems, itemName1, itemName2) => {
        userAreaPage.checkNumberOfItemsInCartPage(numberOfItems);
        userAreaPage.checkNameOfitemsInCartPage([itemName1, itemName2]);
    }
);

Then('I click remove {string}', (itemName) => {});

Then('I will have the checkout button invisble', () => {});

When('I click {string} button', (buttonName) => {});

Then('I should be back in {string} page successfully', (url) => {});

When('I click continue button', () => {});

Then('I should get an error {string}', (errorMessage) => {});

/* Scenario: Suceessfully Complete an order
Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
When I click  to cart on item "Sauce Labs Backpack"
And I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
Then I will have the checkout button visibility confirmed
And I click the checkout button
Then I Will land on "https://www.saucedemo.com/checkout-step-one.html"
When I fill the form with valid data using, firstname "AAA" lastname "ZZZZ" and Postal code "4430-000"
And I click continue button then redirected to "https://www.saucedemo.com/checkout-step-two.html"
When I click Finish button and land on the "https://www.saucedemo.com/checkout-complete.html"
Then I will have have a message :"THANK YOU FOR YOUR ORDER"
When I click Back Home button
Then I will be in "https://www.saucedemo.com/" 


    Scenario: Check number of Items in cart after addint two items
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click add to cart on item "Sauce Labs Bike Light"
        Then I should have "2" items in the cart

    Scenario: Check number of items in cart after removing one
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click add to cart on item "Sauce Labs Bike Light"
        Then I should have "2" items in the cart
        When I click remove button on item "Sauce Labs Backpack"
        Then I should have "1" items in the cart

    Scenario: Check number of Items in cart after adding two items and removing one
        Given I visit "https://www.saucedemo.com/" and log in successfully with username "standard_user" and password "secret_sauce"
        When I click add to cart on item "Sauce Labs Backpack"
        And I click add to cart on item "Sauce Labs Bike Light"
        Then I click on the cart button i will land on "https://www.saucedemo.com/cart.html"
        When I confirm that the number of items in cart page is "2", "Sauce Labs Backpack" and "Sauce Labs Bike Light"
        Then I click remove "Sauce Labs Backpack"







*/
