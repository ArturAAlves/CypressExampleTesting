class Main {
    essentialCookiesBtn() {
        return cy.contains('Permitir apenas cookies essenciais');
    }

    newAccoutBtn() {
        return cy.contains('Criar nova conta');
    }

    getUrl() {
        return cy.url();
    }

    firstName() {
        return cy.get('[name=firstname]');
    }

    lastName() {
        return cy.get('[name=lastname]');
    }

    email() {
        return cy.get('[name=reg_email__]');
    }

    emailConfirmation() {
        return cy.get('[name=reg_email_confirmation__]');
    }

    password() {
        return cy.get('[name=reg_passwd__]');
    }

    birthDay() {
        return cy.get('[name=birthday_day]');
    }

    birthMonth() {
        return cy.get('[name=birthday_month]');
    }

    birthYear() {
        return cy.get('[name=birthday_year]');
    }

    gender() {
        return cy.get('[type=radio]');
    }

    submitBtn() {
        return cy.get('[name=websubmit]');
    }
}

module.exports = new Main();
