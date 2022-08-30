//Toggle of animation icon on video
describe('Toggle of animation icon on video', function () {
    it('Verify that animation icon on video toggles between playback, pause', function () {
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
       //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').first().click();
        //Click on play icon --> verify that video playback has started
        cy.get('.p-button-rounded').click();
        cy.wait(500);
        //Click on pause icon --> verify that video playback has paused
        cy.get('.p-button-rounded').click(); 
        //Click on video --> verify that video playback has paused
        cy.get('.far').click()
        cy.get('.far').click()
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary');
    })
})