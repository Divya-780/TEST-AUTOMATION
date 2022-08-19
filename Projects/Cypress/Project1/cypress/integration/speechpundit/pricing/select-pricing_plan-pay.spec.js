//Test Case-MYS-T51.
//User shall be able to select a plan and make a payment.
describe('User shall be able to select a plan and make a payment.', function () {
    it('After using the plan user shall be able to make a payment through stripe.', function () {
    //-- Prcing content verifification --//
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();       
    cy.get('#email').type('sowbhagya3696+735@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //User shall be able to select a plan and make a payment.
    cy.contains('Basic Plan');
    cy.contains('Get Started').click();
    cy.contains('Purchase').click();
    //-- VALIDATION --//
    cy.url('https://checkout.stripe.com/pay/#/');
    
    })
})