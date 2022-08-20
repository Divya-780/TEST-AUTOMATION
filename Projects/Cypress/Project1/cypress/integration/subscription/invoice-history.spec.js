//User shall receive the receipt for a successful payment.
describe('User will receive the receipt for a successful payment. ', function () {
    it('User can check the receipt after the successful transaction ', function () {
        // Login with valid credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('applinetester+1@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //Go to My subscription from Profile Tab.
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        //View the invoice history.
        cy.contains('Invoice History')
        //-- VALIDATION --//
        
    })
})