//upload profile pic
describe('upload profile pic', function () {
    it('An org admin shall be able to update the profile pic.', function () {
      //login with org admin credentials
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains('Sign in').click();
      cy.get('#email').type('sowbhagya3696+4org@gmail.com');
      cy.get('#password').type('boulder');
      cy.get('form').submit()
      cy.get('.bx').first().click()
      //got to Profile 
      cy.get('.user-img').click()
      cy.contains('Profile').click()
      cy.get('.bx').first().click()
      cy.get('.btn').last().click()
    })
})