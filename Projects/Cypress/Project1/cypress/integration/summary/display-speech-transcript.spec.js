//Display of speech transcript
describe('Display of speech transcript', function () {
    it('Verify that speech Transcript is displayed', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+25@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page.
        cy.contains('Activity').click();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();
        //Transcript is displayed
        cy.contains('Transcript').click();
        cy.wait(1000)
        cy.contains('Transcript').click();
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary'); 
    })
})