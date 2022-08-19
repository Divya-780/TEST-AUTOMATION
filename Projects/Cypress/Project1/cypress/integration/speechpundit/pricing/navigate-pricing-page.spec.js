//New user shall be able to navigate to the pricing page.
describe(' New user shall be able to navigate to the pricing page.', function () {
    it('New user shall be able to navigate to the pricing page to see the available plan options and prices.', 
    function () {
        //New user shall be directed to the pricing page.
        cy.wait(2000)
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);        
        cy.contains('Pricing').click();
        //verify that all the plans are displayed 
        cy.contains('Basic Plan');
        cy.contains('Premium Plan');
        cy.contains('Get Started').click();  
        //Navigating to the sign up page
        cy.url().should("contain", 'signup');
    })
})