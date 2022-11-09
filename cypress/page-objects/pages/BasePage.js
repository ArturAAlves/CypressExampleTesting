const usernameInput = '#user-name';
const passwordInput = '#password';
const loginBtn = '#login-button';
class Basepage {
    fillLogin(usernameData, passwordData) {
        /*       if (!passwordData & !usernameData) {
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

     */
        usernameData.length > 0 ? cy.get(usernameInput).type(usernameData) : '';
        passwordData.length > 0 ? cy.get(passwordInput).type(passwordData) : '';

        cy.get(loginBtn).click();

        /*      if (!usernameData) {
            cy.get(passwordInput).type(passwordData);
        }

        if (!passwordData) {
            cy.get(usernameInput).type(usernameData);
        }

        if (usernameData & passwordData) {
            cy.get(usernameInput).type(usernameData);
            cy.get(passwordInput).type(passwordData);
        }

        cy.get(loginBtn).click(); */

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
