//selectors
const usernameInput = '#user-name';
const passwordInput = '#password';
const loginBtn = '#login-button';
const errorBox = '[data-test=error]';
const errorBtn = '.error-button';

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

class LoginPage {
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

        /*       switch ((usernameData, passwordData)) {
            case !usernameData:
                cy.get(passwordInput).type(passwordData);
                break;
            case !passwordData:
                cy.get(usernameInput).type(usernameData);
                break;
            case !passwordData & !usernameData:
                cy.get(usernameInput).type(usernameData);
                break;
            case usernameData & passwordData:
                cy.get(usernameInput).type(usernameData);
                cy.get(passwordInput).type(passwordData);
                break;

            default:
                cy.log(usernameData, passwordData);
        } */
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
}

module.exports = new LoginPage();
