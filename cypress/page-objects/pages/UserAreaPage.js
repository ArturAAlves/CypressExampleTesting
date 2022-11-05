//selectors

const cartBtn = '.shopping_cart_link';
const checkoutBtn = '#checkout';
const firstNameInputField = '#first-name';
const lastNameInputField = '#last-name';
const postalCodeInputField = '#postal-code';
const continueBtn = '#continue';
const finishBtn = '#finish';
const completeMessage = '.complete-header';
const checkoutBackHomeBtn = '#back-to-products';
const cartItemsNumber = '.shopping_cart_badge';
const removeBtn = 'Remove';
const carItem = '.cart_item';

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

    clickCartBtn() {
        cy.get(cartBtn).click();
    }

    checkvisibility() {
        cy.get(checkoutBtn).should('be.visible');
    }

    clickCheckoutBtn() {
        cy.get(checkoutBtn).click();
    }

    fillCheckoutInformationForm(firstName, lastName, postalCode) {
        cy.get(firstNameInputField).type(firstName);
        cy.get(lastNameInputField).type(lastName);
        cy.get(postalCodeInputField).type(postalCode);
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
        cy.log(args);
        args.map((item) => {
            cy.get('.inventory_item_name').should('contain', item);
        });
    }
}

module.exports = new UserAreaPage();
