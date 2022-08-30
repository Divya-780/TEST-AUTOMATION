//Clone custom Template
describe('Clone custom template',function(){
    it('Coach should be able to clone template from the default template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000)
    //Coach shall be able to clone the custom template
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.wait(1000)
    cy.get('.fa-clone').last().click();
    cy.get('.btn').click();
    //-- VALIDATION --//
    cy.contains(' Copy of guru ');
    })
})