//New user shall be able to navigate to the pricing page.
describe('New user shall be able to navigate to the pricing page', function () {
    it('New user shall be able to navigate to the pricing page to see the available plan options and prices', 
    function () {
        //New user shall be directed to the pricing page.
        cy.wait(2000)
        let url = Cypress.config().baseUrl;
        cy.visit(url);       
        cy.contains('Pricing').click();

        //CONTENT VERIFYING
        cy.contains('Basic Plan');
        cy.contains('Premium Plan');
        cy.contains('Get Started').click();  

        //-- VALIDATION --//
        cy.url().should("contain", 'signup');
    })
})