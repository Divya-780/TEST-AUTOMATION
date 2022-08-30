//user (student) shall be able to see the feedback provided by a coach.
describe('user (student) shall be able to see the feedback provided by a coach.', function () {
    it('user (student) shall be able to see the feedback provided by a coach.', function () {
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();
        //feedback
        cy.get('#p-tabpanel-1-label').click()
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary');

    })
})