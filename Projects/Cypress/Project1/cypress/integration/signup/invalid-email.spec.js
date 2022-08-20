//sign up fails with invalid email ID
describe('sign up fails with invalid email ID', function () {
    it('Verify that sign up fails with invalid email ID when submitted along with valid values for all mandatory fields', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign Up').click();
        cy.get('#email').type('abc.sowji@gmail');
        cy.get('#firstName').type('sowbhagya');
        cy.get('#lastName').type('lakshmi');
        cy.get('#password').type('Sathwik@1719');
        cy.get('[Value="Coach"]').check({ force: true });
        cy.get('#acceptTerms');
        cy.get('form').submit();
        //-- VALIDATION-- //
        cy.contains("Enter a valid email address");
    })
})