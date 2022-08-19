//Test Case-MYS-T50.
//User is taken to subscription page
describe('User is taken to subscription page', function () {
    it('After providing correct login credentials, user shall be directed to the subscription page and shall be able to choose the monthly/quarterly subscription plan.', function () {
        //-- Prcing content verifification --//
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+4000@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Basic Plan');
        cy.contains('Get Started').click();
        cy.contains('Purchase').click();
        //-- VALIDATION --//
        
 
    })
})