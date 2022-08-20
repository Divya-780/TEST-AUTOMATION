//Able to join the zoom session (students)
describe('Able to join zoom session (student)', function () {
    it('Able to join zoom session (coach)', function () {
      //Login with coach credentials.
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
      cy.contains('Sign in').click();
      cy.get('#email').type('sowbhagya3696+181@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.wait(1000)
     //when you hover on zoom icon you can see the group schedule.
     cy.get('.nav-link').should("be.visible");
     cy.wait(4000)
     //join zoom session
     cy.get('.nav-link').eq(0).click()
     cy.get('.zm-btn').click()
    })
  })