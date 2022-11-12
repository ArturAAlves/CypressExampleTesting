import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../../page-objects/pages/LoginPage';

Given('I access {string} page Sucessfully', (url) => {
    LoginPage.visit(url);
});

When(
    'I fill username field with {string} and and password field {string} and click login btn',
    (username, password) => {
        LoginPage.fillLogin(username, password);
    }
);

Then('I should land Sucessfully on {string}', (url) => {
    LoginPage.verifyUrl(url);
});

Then('I should get error stating user and password do not match', () => {
    LoginPage.checkWrongUsername();
});

Then('I should get error stating username field is empty', () => {
    LoginPage.checkEmptyUsername();
});

Then('I should get error stating password field is empty', () => {
    LoginPage.checkEmptyPassword();
});

Then(
    'I should get error stating username field and password field are empty',
    () => {
        LoginPage.checkEmptyUsernameAndPassword();
    }
);

Then('I should get error stating username is locked out', () => {
    LoginPage.checUserLockedOut();
});

Then('I click logout and successfully return to {string}', (url) => {
    LoginPage.logout();
    LoginPage.verifyUrl(url);
});
