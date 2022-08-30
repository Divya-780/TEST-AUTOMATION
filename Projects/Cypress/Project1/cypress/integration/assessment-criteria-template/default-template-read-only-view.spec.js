//Default template Read-only view
describe('Default template Read-only view',function(){
    it('Coach should be able to clone template from the default template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit assessment criteria template
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    //Default template Read-only view
    cy.contains('Default Template ').click();
    //-- VALIDATION --// 
    cy.contains('Correctness').click();

    })
})