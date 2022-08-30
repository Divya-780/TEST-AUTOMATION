//Edit custom template
describe('Edit custom template',function(){
    it('coach shall be able to edit the custom template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show')
    //.should('be.visible')  .trigger('mouseover')
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    //cy.contains('Assessment Criteria').click()
    cy.contains('divya').get('.fa-edit').first().click();
    cy.get('.form-control').clear().type('guru');
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.get('.btn').click();
    //-- VALIDATION --// 
    cy.contains('guru');

    })
})