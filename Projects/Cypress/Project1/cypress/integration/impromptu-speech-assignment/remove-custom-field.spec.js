//Remove custom field while assigning custom question to the student
describe('Remove custom field while assigning custom question to the student', function () {
    it('user(coach) shall be able to remove custom question', function () {
      // visit signin url.
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
      cy.contains('Sign in').click();      
      cy.get('#email').type('sowbhagya3696+4@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.wait(4000)
      // visit lesson plan.
      cy.get('.nav-item').invoke('show')
      cy.get('[routerlink="user/lessonplan"]').click({force: true});
      cy.contains('Impromptu Topic')
      cy.get('.btn').eq(1).click()
      //add the custom question.
      cy.get('#p-accordiontab-0').click()
      cy.get('.btn').eq(2).click()
      cy.wait(1000)
      //click remove
      cy.get('.p-3 > .btn').click()
      //VALIDATION
      cy.url('https://dev02.speechpundit.com/user/lessonplan')

    })
})