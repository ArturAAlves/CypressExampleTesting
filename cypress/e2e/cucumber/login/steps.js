import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../../page-objects/pages/LoginPage');

Given('I access {string} page Sucessfully', (url) => {
    loginPage.visit(url);
});

When(
    'I fill username field with {string} and and password field {string} and click login btn',
    (username, password) => {
        loginPage.fillLogin(username, password);
    }
);

Then('I should land Sucessfully on {string}', (url) => {
    loginPage.verifyUrl(url);
});

Then('I should get error stating user and password do not match', () => {
    loginPage.checkWrongUsername();
});

Then('I should get error stating username field is empty', () => {
    loginPage.checkEmptyUsername();
});

Then('I should get error stating password field is empty', () => {
    loginPage.checkEmptyPassword();
});

Then(
    'I should get error stating username field and password field are empty',
    () => {
        loginPage.checkEmptyUsernameAndPassword();
    }
);

Then('I should get error stating username is locked out', () => {
    loginPage.checUserLockedOut();
});

/* Then('I should take longer than usual to log in', () => {
    (username, password) => {
        loginPage.fillLogin(username, password);
    };
});
 */
