const usernameInput = '#user-name';
const passwordInput = '#password';
const loginBtn = '#login-button';
class Basepage {
    fillLogin(usernameData, passwordData) {
        usernameData.length > 0 ? cy.get(usernameInput).type(usernameData) : '';
        passwordData.length > 0 ? cy.get(passwordInput).type(passwordData) : '';
        cy.get(loginBtn).click();
    }

    static pause(ms) {
        cy.wait(ms);
    }
    static logInfo(message) {
        cy.log(message);
    }

    static setMobileViewPort() {
        cy.viewport('iphone-x');
    }

    static setTabletViewPort() {
        cy.viewport('ipad-2');
    }

    static setDesktopViewPort() {
        cy.viewport('macbook-15');
    }

    static setLargeDesktopViewPort() {
        cy.viewport(1980, 1080);
    }

    static visit(homepage_url) {
        cy.visit(homepage_url);
    }

    visit(url) {
        cy.visit(url);
    }

    verifyUrl(url) {
        cy.url().should('contain', url);
    }
}

export default Basepage;
