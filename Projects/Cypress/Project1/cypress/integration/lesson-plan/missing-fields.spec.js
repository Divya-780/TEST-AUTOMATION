//Test Case-MYS-T84.
//Error if missing any required fields.
describe('Error if missing any required fields. ', function () {
  it('Coach shall get an error message while saving if all required fields are not filled.', function () {
    //visit signin url
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+202@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000);
    //visit Lesson Plan 
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="user/lessonplan"]').click({force: true});
    cy.wait(4000)
    //Click " Add New" to add a new lesson plan.
    cy.get('.btn').first().click();
    // Enter Speech Title, Speech Level and Speech time (duration).
    cy.get('#speechTitle');
    cy.get('#speechTime');
    //Click "save"
    cy.contains('Save').click();
    //VALIDATION
    cy.contains('Introduction Required');
  })
})
