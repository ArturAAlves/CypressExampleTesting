//selectors

import Basepage from './BasePage';

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

class LoginPage extends Basepage {
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

    logout() {
        cy.get(menuBtn).click();
        cy.get(logoutBtn).click();
    }
}

export default new LoginPage();
