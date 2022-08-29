//Coach shall be able to select or dis-select the impromptu topic by toggle option on/off
describe('Coach shall be able to select or dis-select the impromptu topic by toggle option on/off', function () {
  it('//Coach shall be able to select or dis-select the impromptu topic by toggle option on/off', function () {
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
    cy.get('[routerlink="user/lessonplan"]').click({ force: true });
    cy.get('#p-tabpanel-1-label').click()
    //toggle option on/off
    cy.get('.col-sm-3').eq(9).click()
    //VALIDATION
  })
})