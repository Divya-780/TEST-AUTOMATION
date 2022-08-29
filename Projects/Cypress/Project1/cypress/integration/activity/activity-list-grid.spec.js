describe('Display of speeches in either grid or list view in activity page', function () {
    it(' Verify speeches can be displayed in either grid or list view in activity page ', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();        //sign in and navigate to  the Activity page.
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Validation - After sign in, It should redirect to the activity page
        cy.url().should("contain", '/activity/history');

        //LIST VIEW
        cy.get('[for="btnradio1"]').click();
        //GRID VIEW
        cy.get('[for="btnradio2"]').click();
        //-- VALIDATION --// 
        cy.url().should("contain", '/activity/history');
    })
})
