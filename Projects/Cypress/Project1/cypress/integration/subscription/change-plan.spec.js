//change a plan
describe('change a plan', function () {
    it('User shall be able to downgrade the current plan.', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();   //Login with valid credentials
        cy.get('#email').type('challa.sowji+21@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(2000)
        //Pick a plan (upgrade)
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        cy.contains('Change Plan').click();
        cy.contains('Change Premium Plan Period').click();
        cy.wait(4000)
        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-item').click()
        cy.get('.btn-secondary').click()
        cy.get('.ng-star-inserted').should("contain", 'Confirm');
        cy.contains('Confirm')
        //User shall be able to see the invoices on My Subscription page.
    })
})