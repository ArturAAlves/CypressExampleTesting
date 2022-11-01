const username = '#user-name';
const password = '#password';
const loginBtn = '#login-button';

class LoginPage {
    visit(url) {
        return cy.visit(url);
    }

    username() {
        return cy.get(username);
    }

    password() {
        return cy.get(password);
    }

    loginBtn() {
        return cy.get(loginBtn);
    }

    verifyUrl(url) {
        return cy.url().should('contain', url);
    }
}

module.exports = new LoginPage();
