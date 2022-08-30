//Upgrade and downgrade a plan
describe('Upgrade and downgrade a plan', function () {
    it('User shall be able to upgrade or downgrade the subscription plan by clicking "Change plan" on My Subscription page. User shall be presented with the options and pro-rated amount.', function () {
        //Login with valid credentials
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('divya@applines.com');
        cy.get('#password').type('Sonu@1234');
        cy.get('form').submit();
        cy.wait(2000)
        //Pick a plan (upgrade or downgrade)
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        cy.wait(2000)
        cy.contains('Upgrade Plan').click();
        cy.contains('Upgrade to Premium').click();
        cy.wait(4000)
        cy.get('.p-dropdown').click()
        cy.get('.ng-trigger').click()
        cy.get('.btn-secondary')
        //cy.get('.p-dialog').click()
        //cy.get('.ng-star-inserted').should("contain", 'Confirm');
        //cy.contains('Confirm')
        //User shall be able to see the invoices on My Subscription page.
    })
})
