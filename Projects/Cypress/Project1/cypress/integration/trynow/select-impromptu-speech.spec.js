//Try Now -Impromptu speech
describe('Try Now -Impromptu speech', function () {
    it('Any user shall be able to record an impromptu speech after clicking "Try Now" button. It will direct the user to the impromptu speech categories to pick the speech topic  from.',function(){4
        //Access the website
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Try Now').click();
        //user shall be presented with the 7 categories to pick a topic and question related to that.
        cy.get('body').click()
        cy.get('#overlay').eq(0).click()
        //user is aligned the recording will start.
        cy.get('.p-button-label').click()
        //-- VALIDATION-- //
        cy.url().should("contain", 'trynow'); 
            
    })
})