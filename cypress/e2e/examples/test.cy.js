describe('open page and allure report', () => {
    it('open cypress io page', () => {
        cy.allure()
            .epic('This is epic')
            .feature('This is feature')
            .issue('google', 'https://google.com')
            .parameter('name', 'value')
            .tag('this is nice tag', 'as well as this')
            .visit(
                'https://docs.cypress.io/guides/guides/command-line#How-to-run-commands'
            );
    });
});
