describe('Display of newly recorded speech in activity page', function () {
    it(' Verify new speech recorded by user shows up in activity page', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+105@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        //VALIDATION-verifying Newly recorded speeches in Activity page.
        cy.contains('Visual');
        cy.contains('Voice');
        cy.contains('Verbal');
    })
})