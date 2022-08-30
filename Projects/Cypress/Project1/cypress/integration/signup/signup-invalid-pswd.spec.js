describe('sign up form cannot be submitted with invalid characters', function () {
    it('Verify that user shall NOT be able to sign up using invalid characters', function () {
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign Up').click();    //Signing up without validaTing pswd//   
    cy.get('#email').type('sowbhagya3696+604@gmail.com');
    cy.get('#firstName').type('sowbhagya');
    cy.get('#lastName').type('lakshmi');
    //Entering password without special character
    cy.get('#password').type('Sathwik1719');
    cy.get('[Value="Coach"]').check({force: true});
    cy.get('#acceptTerms');
    cy.get('form').submit();
    //PSWD VALIDATION
    cy.contains('Must contain at least one special character').should('exist');
 })
})