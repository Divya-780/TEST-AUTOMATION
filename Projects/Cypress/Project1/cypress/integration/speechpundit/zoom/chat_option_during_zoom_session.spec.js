//chat option during zoom session
describe('chat option during zoom session', function () {
    it('chat option during zoom session', function () {
      //Login with coach credentials.
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
      cy.contains('Sign in').click();
      cy.get('#email').type('sowbhagya3696+4@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.wait(1000)
     //when you hover on zoom icon you can see the group schedule.
     cy.get('.nav-link').should("be.visible");
     cy.wait(4000)
     //join zoom session
     cy.get('.nav-link').eq(0).click()
     cy.get('.zm-btn').click()
     cy.get('.footer-button__chat-icon').click()
     cy.get('.chat-box__chat-textarea').type('welcome')
     //cy.get('.footer-button__button-label').eq(2).click()
   //  cy.get('.participants-section-container__participants-footer-bottom').eq(0).click()
     cy.wait(2000)
     //cy.get('.footer-button__participants-icon').eq(2).click()
    // cy.contains('Invite').click()
     cy.wait(2000)
   //  cy.get('.participants-section-container__participants-footer-bottom').eq(1).click()
    })
  })