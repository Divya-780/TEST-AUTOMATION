describe('Try Now -I am Ready ', function () {
    it('Any user shall be able to record an impromptu speech after clicking "Try Now" button. It will direct the user to the impromptu speech categories to pick the speech topic and it will open record speech by clicking Im ready Button  from.',function(){
        //Access the website
        let url = Cypress.config().baseUrl;    
        cy.visit(url);
        cy.contains('Try Now').click();
        //user shall be presented with the 7 categories to pick a topic and question related to that.
        cy.get('body').click();
        cy.get('.dcard').eq(0).click();
        //user is aligned the recording will start.
        cy.get('.mr-2').click()
        cy.get('.fa').click()
        cy.url().should("contain", 'trynow');
        cy.wait(2000);
        //-- VALIDATION-- //
        //It will open record screen before the minimum duration by clicking ready button
        cy.contains('Recording will start in').should('not.exist');
    })
})