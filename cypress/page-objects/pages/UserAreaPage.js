//selectors
const usernameInput = '#user-name';
const passwordInput = '#password';
const loginBtn = '#login-button';
const errorBox = '[data-test=error]';
const errorBtn = '.error-button';
const menuBtn = '#react-burger-menu-btn';
const logoutBtn = '#logout_sidebar_link';

//error list
const errorMessages = {
    wrongUsernameErrorMessage:
        'Epic sadface: Username and password do not match any user in this service',
    emptyPasswordErrorMessage: 'Epic sadface: Password is required',
    emptyUsernameErrorMessage: 'Epic sadface: Username is required',
    emptyUsernameAndPasswordErrorMessage:
        'Epic sadface: Username and Password are required',
    lockedOutUsernameErrorMessage:
        'Epic sadface: Sorry, this user has been locked out.'
};

//helper functions
function checkError(error) {
    cy.get(errorBox).should('contain', error);
}

class UserAreaPage {
    visit(url) {
        cy.visit(url);
    }

    verifyUrl(url) {
        cy.url().should('contain', url);
    }

    fillLogin(usernameData, passwordData) {
        if (!passwordData & !usernameData) {
            cy.get(loginBtn).click();
            return;
        }

        if (!usernameData) {
            cy.get(passwordInput).type(passwordData);
            cy.get(loginBtn).click();
            return;
        }

        if (!passwordData) {
            cy.get(usernameInput).type(usernameData);
            cy.get(loginBtn).click();
            return;
        }

        cy.get(usernameInput).type(usernameData);
        cy.get(passwordInput).type(passwordData);
        cy.get(loginBtn).click();
    }

    checkWrongUsername() {
        checkError(errorMessages.wrongUsernameErrorMessage);
    }

    checkEmptyUsername() {
        checkError(errorMessages.emptyUsernameErrorMessage);
    }

    checkEmptyPassword() {
        checkError(errorMessages.emptyPasswordErrorMessage);
    }

    checkEmptyUsernameAndPassword() {
        checkError(errorMessages.emptyUsernameAndPasswordErrorMessage);
    }

    checUserLockedOut() {
        checkError(errorMessages.lockedOutUsernameErrorMessage);
    }

    logout() {}
}

module.exports = new UserAreaPage();
