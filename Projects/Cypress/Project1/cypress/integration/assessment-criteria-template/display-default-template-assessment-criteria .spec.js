//Display of Default template in Assessment Criteria page
describe('Display of Default template in Assessment Criteria page',function(){
    it('Coach shall be able to view the default template',function(){
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
    cy.contains('Default Template ').click();
    //-- VALIDATION --// 
    cy.contains(' Suggested Weight ');
    })
})