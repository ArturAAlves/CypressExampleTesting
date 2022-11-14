import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import UserAreaPage from '../../../page-objects/pages/UserAreaPage';

Given(
    'I visit {string} and log in successfully with username {string} and password {string}',
    (url, user, password) => {
        UserAreaPage.visit(url);
        UserAreaPage.fillLogin(user, password);
    }
);

When('I click add to cart on item {string}', (item) => {
    UserAreaPage.addItemToCart(item);
    /*   UserAreaPage.clickCartBtn(); */
});

When('I click on the cart button i land on {string}', (url) => {
    UserAreaPage.clickCartBtn();
    UserAreaPage.verifyUrl(url);
});

Then('I have the checkout button visibility confirmed', () => {
    UserAreaPage.checkvisibilityTrue();
});

When('I click the checkout button', () => {
    UserAreaPage.clickCheckoutBtn();
});

Then('I land on {string}', (url) => {
    UserAreaPage.verifyUrl(url);
});
When(
    'I fill the form with valid data using, firstname {string} lastname {string} and Postal code {string}',
    (firstName, lastName, postalCode) => {
        UserAreaPage.fillCheckoutInformationForm(
            firstName,
            lastName,
            postalCode
        );
        UserAreaPage.clickContinueBtn();
    }
);

When('I click continue button then redirected to {string}', (url) => {
    UserAreaPage.verifyUrl(url);
});

When('I click Finish button and land on the {string}', (url) => {
    UserAreaPage.clickFinishBtn();
    UserAreaPage.verifyUrl(url);
});

When('I have have a message :{string}', (message) => {
    UserAreaPage.confirmCheckoutMessage(message);
});

When('I click Back Home button', () => {
    UserAreaPage.clickCheckoutBackHomeBtn();
});

Then('I be in {string}', (url) => {
    UserAreaPage.verifyUrl(url);
});

Then('I should have {string} items in the cart', (itemNumber) => {
    UserAreaPage.checkItemsInCart(itemNumber);
});

When('I click remove button on item {string}', (item) => {
    UserAreaPage.removeItemFromCart(item);
});

When(
    'I confirm that the number of items in cart page is {string}, {string} and {string}',
    (numberOfItems, itemName1, itemName2) => {
        UserAreaPage.checkNumberOfItemsInCartPage(numberOfItems);
        UserAreaPage.checkNameOfitemsInCartPage([itemName1, itemName2]);
    }
);

Then('I have the checkout button invisble', () => {
    UserAreaPage.checkvisibilityFalse();
});

Then('I click remove {string}', (itemName) => {
    UserAreaPage.removeItemFromCart(itemName);
});

When('I click continue button', () => {
    UserAreaPage.clickContinueBtn();
});

When('I click Continue Shopping button', () => {
    UserAreaPage.clickContinueShoppingBtn();
});

Then('I should get an error {string}', (errorMessage) => {
    UserAreaPage.checkErrorMessageContainer(errorMessage);
});

When(
    'I fill the form using, firstname {string} lastname {string} and Postal code {string}',
    (firstName, lastName, postalCode) => {
        UserAreaPage.fillCheckoutInformationForm(
            firstName,
            lastName,
            postalCode
        );
    }
);
