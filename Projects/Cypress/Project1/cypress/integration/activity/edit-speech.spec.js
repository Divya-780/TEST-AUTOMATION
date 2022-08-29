describe('Edit name of a speech from activity page', function () {
    it('Verify that user shall be able to edit name of a speech from activity page', function () {
        //navigate to Activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+24@gmail.com');
        cy.get('#password').type('Sathwik@151719');
        cy.get('form').submit();
        //Validation - After sign in, It should redirect to the activity page
        cy.url().should("contain", '/activity/history');

        cy.wait(3000)
        cy.get('[ptooltip="Edit Video Title"]').click()
        cy.get('.form-control').eq(0).clear().type('sowji').trigger('mousedown').click()
        cy.get('body').click()
        //-- VALIDATION-- //
        cy.contains('sowji').click()

    })
})