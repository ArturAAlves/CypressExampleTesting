import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { when } from 'cypress/types/jquery';

Given(
    'I am logged in successfully with username {string} and password {string}'
),
    () => {};

When('I click add to cart on item {string}'), (item) => {};

When('I click on the cart button i will land on {string}', (url) => {});

Then('I Will have the checkout button visible', () => {});

When('I click the checkout button', () => {});

Then('I Will land on {string}', (url) => {});
when(
    'I fill the form with valid data using, firstname {string} lastname {string} and Postal code {string}',
    (name, password, postalCode) => {}
);

when('I click continue button i will be redirected to {string}', (url) => {});

when('I click Finish button and land on the {string}', (url) => {});

when('I will have have a message :{string}', (message) => {});
