//User shall be able to cancel the subscription
describe('User shall be able to cancel the subscription', function () {
    it('User shall be able to cancel the subscription ', function () {
        //-- Prcing content verifification --//
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+25@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Go to the subscription 
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        //Click cancel subscription
        cy.contains('Cancel Subscription ').click();
        // cy.get('.p-4').eq(2).click();
        cy.get('.p-4').eq(2).click()
        cy.wait(5000);
        // cy.get('.p-confirm-dialog-accept').click();
        cy.contains('Yes').click();
        //-- VALIDATION --//
        cy.contains('Subscription cancelled, but will be valid till the end of the period.')
    })
})