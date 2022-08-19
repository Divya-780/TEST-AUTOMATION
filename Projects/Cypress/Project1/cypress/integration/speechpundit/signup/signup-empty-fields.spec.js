describe('sign up form cannot be submitted without entering values for required fields', function () {
    it('Verify that user shall NOT be able to submit sign up form without entering values for required fields', function () {
    //Sign up with empty fields
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign Up').click();    
    cy.get('#email').type('sowbhagya3696+1104@gmail.com');
    cy.get('#firstName').click();
    cy.get('#lastName').type('lakshmi');
    cy.get('#password').type('Sathwik@1719');
    cy.get('[Value="Coach"]').check({force: true});
    cy.get('#acceptTerms');
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.contains('Enter First Name');
   })  
})