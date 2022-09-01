//calendar in the group displays the recurrence of the zoom session
describe('calendar in the group displays the recurrence of the zoom session ', function () {
    it('calendar in the group displays the recurrence of the zoom session', function () {
      // visit signin url.
      let url = Cypress.config().baseUrl; //accesing baseUrl
      cy.visit(url);
      cy.contains('Sign in').click();      
      cy.get('#email').type('sowbhagya3696+4@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      cy.wait(4000)
      //visit group
      cy.get('.nav-item').invoke('show')
      cy.wait(2000)
      cy.get('[routerlink="/user/groups"]').click({force: true})
      cy.wait(2000)
      //calender
      cy.get('.fc').click()
      //-- VALIDATION-- // 
      cy.url().should("contain", 'groups');


    })
})