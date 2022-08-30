//Coach shall be able to see on which speech the feedback has been provided.
describe('Coach shall be able to see on which speech the feedback has been provided.',function(){
it('Coach shall be able to see on which speech the feedback has been provided.',function(){
let url = Cypress.config().baseUrl;   
cy.visit(url);
cy.contains('Sign in').click();
cy.get('#email').type('sowbhagya3696+4@gmail.com');
cy.get('#password').type('Sathwik@1719');
cy.get('form').submit();
cy.wait(4000)
cy.get('.pt-3 > .btn').first().click()
cy.get('#p-tabpanel-1-label').click()
cy.url().should("contain", 'summary');
})

})