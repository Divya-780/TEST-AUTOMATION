//Coach shall be able to provide a feedback.
describe('Coach shall be able to provide a feedback.', function () {
    it('Coach shall be able to provide a feedback on a students speech/video', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();        cy.get('#email').type('sowbhagya3696+202@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.wait(3000)
        cy.contains('Students Activity').click()
        cy.get('.fas').last().dblclick(); 
        cy.wait(2000)
        cy.contains('Play/Pause').click()
        cy.wait(1000)
        cy.contains('Play/Pause').click()
        cy.get('.form-select').first().select('Make eye contact.')
        cy.get('#p-tabpanel-1-label').click()
        cy.get('[for="btnradio1"]').click()
        cy.get('[for="btnradio3"]').click()
        cy.get('[for="btnradio4"]').click()
        cy.get('[for="btnradio5"]').type('type')
        cy.get('[for="btnradio6"]').click()
        cy.get('[for="btnradio7"]').click()
        cy.get('.p-inputswitch-slider').click()
        //VALIDATION   
        cy.contains('Feedback Point')
    })
})