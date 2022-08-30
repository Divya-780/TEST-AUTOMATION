describe('Performance scores and summary shall be displayed for each speech in activity page', function () {
    it(' Verify that visual, voice, verbal scores and summary are displayed for speeches in activity page', function () {
        //Display for each speech in activity page.

        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+105@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Validation - After sign in, It should redirect to the activity page
        cy.url().should("contain", '/activity/history');

        //verify that scores in acitvity page
        cy.contains('Visual');
        cy.contains('Voice');
        cy.contains('Verbal');

        // Verify that user assessment summaries are displayed
        cy.get('.mr-3').eq(0)
        cy.wait(4000);
        cy.get('.pt-3').eq(0).should('be.visible').click();

        //-- VALIDATION - Verify that user  assessment summary
        cy.url().should("contain", '/summary');
    })
})