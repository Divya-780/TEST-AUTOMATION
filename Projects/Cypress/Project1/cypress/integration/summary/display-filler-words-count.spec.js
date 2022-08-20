//Display of filler words and their count in Verbal Chart
describe('Display of filler words and their count in Verbal Chart ', function () {
    it('Verify that filler words and their count are displayed in Verbal Chart', function () {
        //navigate to Activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+25@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.wait(3000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click()
        //Filler words and count
        cy.contains('Filler Word').click();
        cy.get('.pb-3').click();
        //Verbal Chart
        cy.contains('Verbal Chart');

    })
})