//Settings
describe('Students list', function () {
  it(' An org admin shall be able to update the settings for the org.', function () {
    cy.wait(2000)
    //login with org admin credentials
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4org@gmail.com');
    cy.get('#password').type('boulder');
    cy.get('form').submit()
    cy.wait(4000)
    cy.contains('Settings').click()
    cy.get('.sub-menu-title').click()
    //VALIDATION
    cy.url().should("contain", 'settings');
  })
})