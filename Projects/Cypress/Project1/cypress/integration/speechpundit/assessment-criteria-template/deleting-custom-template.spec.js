//Deleting Custom Template
describe('Deleting Custom Template',function(){
    it('A coach shall be able to delete the custom template only if its not assigned to any student',function(){
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
    cy.wait(2000);
    cy.get('.fa-trash').last().click();
    //-- VALIDATION --// 
    cy.url().should("contain", 'assessment-template');
})
})