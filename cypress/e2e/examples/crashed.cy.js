import { non_existing_variable } from 'some-other-module';

describe('Crashed spec', () => {
    it('should create a blank test with error when cypress got uncaught exception', () => {
        cy.allure().step('Should Crash');
        expect(non_existing_variable).to.not.exist;
    });
});
