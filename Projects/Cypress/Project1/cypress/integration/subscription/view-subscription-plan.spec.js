//User shall be able to see their subscription plan
describe('User shall be able to see the detail of their subscription plan along with any upgrade or downgrade if applied.', function () {
    it('User shall be able to upgrade or downgrade the subscription plan by clicking "Change plan" on My Subscription page. User shall be presented with the options and pro-rated amount.', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();   //Login with valid credentials
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(2000)
        //Pick a plan (upgrade or downgrade)
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/subscriptions"]').click({force: true});
        cy.contains('Subscription Plan');
        //-- VALIDATION --//
        cy.contains('Premium Recurring Quarterly');

    })
})