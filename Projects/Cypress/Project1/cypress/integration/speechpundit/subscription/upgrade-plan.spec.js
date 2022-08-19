//Upgrade a plan
describe('Upgrade a plan', function () {
    it('User shall be able to upgrade the current plan.', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        //Login with valid credentials
        cy.get('#email').type('divya@applines.com');
        cy.get('#password').type('Sonu@1234');
        cy.get('form').submit();
        cy.wait(2000)
        //Pick a plan (upgrade)
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        cy.contains('Upgrade Plan').click();
        cy.contains('Upgrade to Premium').click();
        cy.get('.p-dropdown').click()
        cy.get('.ng-trigger').click()
        cy.get('.btn-secondary')
        //cy.get('.p-dialog').click()
        //cy.get('.ng-star-inserted').should("contain", 'Confirm');
        //cy.contains('Confirm')
        //User shall be able to see the invoices on My Subscription page.
    })
})