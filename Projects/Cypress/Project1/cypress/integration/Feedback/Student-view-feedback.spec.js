//Coach shall be able to provide a feedback.
describe('Student shall be able to see  a feedback gicen by coach', function () {
    it('Student shall be able to see feedback in summary page', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();        
        cy.get('#email').type('divya+230@applines.com');
        cy.get('#password').type('Sonu@1234');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.url().should('contain','history');
        cy.get('.history--favourites').eq(0).click();
        cy.url().should('contain','summary');
        cy.get('#p-tabpanel-1-label').click();
        cy.get('.btn-secondary').click();
        cy.wait(5000);
        cy.get('.btn-secondary').click();
        //--VALIDATION--//
        //Obeserve that the coach given feedback is displaying on video  while video is playing
        
    })
})