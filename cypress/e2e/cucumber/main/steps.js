import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const main = require('../../../pages/main/main');

Given('I access {string} page registration Sucessfully', (url) => {
    cy.visit(url);
    cy.url().should('eq', url);
    main.essentialCookiesBtn().click();
    main.newAccoutBtn().click();
    cy.get('div').should('contain', 'Regista-te');
});

When('I fill the form with valid data and click registration button', () => {
    main.firstName().type('Josespo');
    main.lastName().type('Memepo');
    main.email().type('asdasda@teste.com');
    main.emailConfirmation().type('asdasda@teste.com');
    main.password().type('assssas112');
    main.birthDay().select('20');
    main.birthMonth().select('3');
    main.birthYear().select('1986');
    main.gender().check('2');
    main.submitBtn().click();
});
When('I recieve and confirm the registration confirmation email', () => {
    cy.log(`when`);
});

Then(
    'I the Registration should be complete and i will be redirected to user page',
    () => {
        cy.contains('Permitir apenas cookies essenciais').click();
        cy.contains('[aria-label=O teu perfil]').click();
        cy.contains('Josespo Memepo').click();
        cy.get('div').should('contain', 'Josespo Memepo');
    }
);
/* error message = A data selecionada não é válida */
/* Josespo
Memepo
Teste123 */
/* cojavak482@hostovz.com */
