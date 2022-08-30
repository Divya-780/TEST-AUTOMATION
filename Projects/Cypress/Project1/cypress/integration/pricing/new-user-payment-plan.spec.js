//User shall receive the receipt for a successful payment.
describe('User will receive the receipt for a successful payment', function () {
    it('User can check the receipt after the successful transaction', 
    function () {
    // Login with valid credentials
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();       
    cy.get('#email').type('sowbhagya3696+306@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();  
    cy.contains('Basic Plan');
    cy.contains('Get Started').click();
    cy.wait(2000)
    cy.contains('Purchase').click();

    //-- VALIDATION --//
    cy.url('https://checkout.stripe.com/pay/#/');
})
})