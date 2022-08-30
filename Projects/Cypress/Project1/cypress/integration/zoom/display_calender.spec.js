//calendar in the group displays the recurrence of the zoom session

describe('calendar in the group displays the recurrence of the zoom session ', function () {
    it('calendar in the group displays the recurrence of the zoom session', function () {
      // visit signin url.
      let url = Cypress.config().baseUrl;   
      cy.visit(url);
      cy.contains('Sign in').click();      
      cy.get('#email').type('sowbhagya3696+4@gmail.com');
      cy.get('#password').type('Sathwik@1719');
      cy.get('form').submit();
      //visit group
      cy.get('.nav-item').invoke('show')
      cy.get('.dropdown-item').get('[routerlink="/user/groups"]').click({force: true})
      //calender
      cy.get('.fc').click()
    })
})