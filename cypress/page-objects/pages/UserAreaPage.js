//selectors

const cartBtn = '.shopping_cart_link';
const checkoutBtn = '#checkout';
const firstNameInputField = '#first-name';
const lastNameInputField = '#last-name';
const postalCodeInputField = '#postal-code';
const continueBtn = '#continue';
const continueShoppingBtn = '#continue-shopping';
const finishBtn = '#finish';
const completeMessage = '.complete-header';
const checkoutBackHomeBtn = '#back-to-products';
const cartItemsNumber = '.shopping_cart_badge';
const removeBtn = 'Remove';
const carItem = '.cart_item';
const errorMessageContainer = '.error-message-container';

//error list
const messages = {};

//helper functions

class UserAreaPage {
    addItemToCart(item) {
        cy.contains(item).parent().parent().contains('Add to cart').click();
    }

    removeItemFromCart(item) {
        cy.contains(item).parent().parent().contains(removeBtn).click();
    }

    clickContinueShoppingBtn() {
        cy.get(continueShoppingBtn).click();
    }

    clickCartBtn() {
        cy.get(cartBtn).click();
    }

    checkvisibilityTrue() {
        cy.get(checkoutBtn).should('be.visible');
    }

    checkvisibilityFalse() {
        cy.get(checkoutBtn).should('be.hidden');
    }

    clickCheckoutBtn() {
        cy.get(checkoutBtn).click();
    }

    fillCheckoutInformationForm(firstName, lastName, postalCode) {
        if (firstName) {
            cy.get(firstNameInputField).type(firstName);
        }

        if (lastName) {
            cy.get(lastNameInputField).type(lastName);
        }

        if (postalCode) {
            cy.get(postalCodeInputField).type(postalCode);
        }
    }

    clickContinueBtn() {
        cy.get(continueBtn).click();
    }

    clickFinishBtn() {
        cy.get(finishBtn).click();
    }

    confirmCheckoutMessage(message) {
        cy.get(completeMessage).should('contain', message);
    }

    clickCheckoutBackHomeBtn() {
        cy.get(checkoutBackHomeBtn).click();
    }

    checkItemsInCart(itemNUmber) {
        cy.get(cartItemsNumber).should('contain.text', itemNUmber);
    }

    checkNumberOfItemsInCartPage(itemNumber) {
        cy.get(carItem).should('have.length', itemNumber);
    }

    checkNameOfitemsInCartPage([...args]) {
        args.map((item) => {
            cy.get('.inventory_item_name').should('contain', item);
        });
    }

    checkErrorMessageContainer(message) {
        cy.get(errorMessageContainer).should('contain.text', message);
    }
}

module.exports = new UserAreaPage();
