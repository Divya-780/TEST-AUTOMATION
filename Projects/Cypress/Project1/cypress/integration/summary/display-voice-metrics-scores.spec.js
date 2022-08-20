//Display of multiple aspects, respective scores of voice metrics
describe('Display of multiple aspects, respective scores of voice metrics', function () {
    it('Verify that multiple aspects, respective scores of voice metrics are displayed', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+25@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(1).click();
        cy.wait(2000)
        //Verify that multiple aspects of voice are displayed in Voice Metrics
        cy.contains('Voice Metrics');
        cy.contains('Duration');
        cy.contains('Volume');
        cy.contains('Speed');
        cy.contains('Paralingual');
        cy.contains('Inflection');
        cy.contains('Quality');
        cy.contains('Overall assessment').dblclick();
        cy.contains('Voice').click();
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary');
    })
})