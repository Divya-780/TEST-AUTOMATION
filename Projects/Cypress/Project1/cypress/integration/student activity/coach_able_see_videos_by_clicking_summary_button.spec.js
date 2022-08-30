//Coach shall be able to see the summary of the videos by clicking the summary button.
describe('Coach shall be able to see the summary of the videos by clicking the summary button.',function(){
it('Coach shall be able to see the summary of the videos by clicking the summary button.',function(){
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(4000)
    cy.get('.pt-3 > .btn').first().click()
    cy.get('#p-tabpanel-0-label').click()
    cy.url().should("contain", 'summary')
})
})