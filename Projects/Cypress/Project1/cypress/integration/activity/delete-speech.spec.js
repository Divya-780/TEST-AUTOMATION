describe('Download a speech from activity page', function () {
    it('Verify that user shall be able to download a speech from activity page', function () {
        // sign and navigating to activity page
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('applinetester+1@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        cy.get('#dropdownOne').click();
        cy.contains('Delete').click();
        cy.get('.p-dialog-footer > .btn').click();
        cy.wait(4000)
        //-- VALIDATION --//
        //Note that the deleted video is not on the Students Activity page
    })
})