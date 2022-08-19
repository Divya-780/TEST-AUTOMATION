//User(student) access to assigned speech.
describe('User(student) access to assigned speeches.', function () {
    it('students access to assigned speeches.', function () {
      // visit signin url.
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
      cy.contains('Sign in').click();      
      cy.get('#email').type('sowbhagya3696+18@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.contains('Assignments').trigger('mouseover');
      cy.contains('Speeches').trigger('mouseenter',{force: true})
      cy.contains('Traveling').click({force: true})
      cy.contains('Record').click()
      //VALIDATION
      cy.url('https://dev02.speechpundit.com/record')
    })
})