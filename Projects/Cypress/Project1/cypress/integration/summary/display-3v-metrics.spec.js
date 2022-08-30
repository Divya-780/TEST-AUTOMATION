//Display of 3V metrics, Video display, Waveform, Transcript, Verbal chart and Overall assessment
describe('Display of 3V metrics, Video display, Waveform, Transcript, Verbal chart and Overall assessment', function () {
    it('Verify that 3V metrics, Video display, Waveform, Transcript, Verbal chart and Overall assessment are displayed in speech summary ', function () {
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+105@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
        //click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').click();
        //verify that 3V metrics, Video display, Waveform, Transcript, Verbal chart and Overall assessment are displayed in speech summary
        cy.contains('Original Video');
        cy.contains('Voice Metrics');
        cy.contains('Verbal Metrics');
        cy.contains('Transcript');
        cy.contains('Overall assessment');
    })
})