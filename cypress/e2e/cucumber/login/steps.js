import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const loginPage = require('../../../page-objects/pages/LoginPage');

Given('I access {string} page Sucessfully', (url) => {
    loginPage.visit(url);
});

When(
    'I fill username field with {string} and and password field {string} and click login btn',
    (username, password) => {
        loginPage.username().type(username);
        loginPage.password().type(password);
        loginPage.loginBtn().click();
    }
);

Then('I should land Sucessfully on {string}', (url) => {
    loginPage.verifyUrl(url);
});
