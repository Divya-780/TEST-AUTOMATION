//Display of Custom Template
describe('Display of Custom Template',function(){
    it('Coach shall be able to view the created custom template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.wait(2000)
    cy.contains('palu').click();
    //-- VALIDATION --// 
    cy.contains('View Template');
    })
})