//Test Case-MYS-T09.
//login with valid credentials.
describe('Testing login with valid credentials', function () {
   it(' sign in with valid credentials', function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //VALIDATION-logged in with valid credentials
    cy.url().should("contain", 'history');
    cy.contains('Speeches');
    cy.contains('Activity');
    cy.contains('Record');
   })
  })


