describe('All speeches of user shall be displayed in activity page', function () {
    it(' Verify all speeches of user are displayed in activity page', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('divya+2022coach@applines.com');
        cy.get('#password').type('Sonu@1234');
        cy.get('form').submit();
        //Record a speech and navigate to Activity page.
        cy.contains('Activity')
        //VALIDATION
        cy.url().should("contain", 'history');
        cy.get('.dropdown').its('length').should('eq',5);
    })
})