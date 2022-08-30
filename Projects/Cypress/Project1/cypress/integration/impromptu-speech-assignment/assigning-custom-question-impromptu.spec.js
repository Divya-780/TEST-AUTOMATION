//custom question for impromptu
describe('custom question for impromptu', function () {
    it('user (coach) shall be able to create custom question and assign it to students.', function () {
      // visit signin url.
      let url = Cypress.config().baseUrl;   
      cy.visit(url);
      cy.contains('Sign in').click();      
      cy.get('#email').type('sowbhagya3696+4@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.wait(1000)
      // visit lesson plan.
      cy.get('.nav-item').invoke('show')
      cy.get('[routerlink="user/lessonplan"]').click({force: true});
      cy.get('#p-tabpanel-1-label').click()
     // cy.contains('Impromptu Topic')
      cy.get('.btn').eq(1).click()
      //add the custom question.
      cy.get('#p-accordiontab-0').click()
      cy.get('.btn').eq(2).click()
      cy.get('#custom').type('What is the most difficult thing about English for you.' )
      cy.get('.p-button-label').click()
      //VALIDATION
      cy.contains('What is the most difficult thing about English for you?')
    })
})
