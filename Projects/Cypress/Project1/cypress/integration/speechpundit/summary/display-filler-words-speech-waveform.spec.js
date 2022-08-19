//Display of filler words in speech waveform
describe('Display of filler words in speech waveform', function () {
    it('Verify that filler words detected in speech are marked in waveform timeline', function () {
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
        cy.get('.pt-3 > .btn').eq(2).click()
        cy.get('.my-3').click();
        //waveform
        cy.get('.p-button-rounded').click();
        cy.get('.p-button-rounded').click();
        cy.wait(1000);
        cy.get('svg > #polygon').eq(0).click()
        cy.wait(2000)
        cy.get('#polygon').click()
        cy.get('svg').first().click()
        cy.wait(1000)
        //filler words detected in speech 
        cy.contains('Filler Word').click();
        //-- VALIDATION-- //
        cy.contains('like');
    })
})