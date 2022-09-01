//Edit custom template
describe('Edit custom template',function(){
    it('coach shall be able to edit the custom template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(4000)
    //Validation - After sign in, It should redirect to the activity page
    cy.url().should("contain", '/activity/history');

    // Go to the assessment criteria page
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.wait(2000)

    cy.get('.fa-edit').first().click()
    cy.wait(4000)
    cy.get('.form-control').click().clear().type('updated template');
    cy.get('.form-select').select('Advanced').should('have.value', 'Advanced');
    cy.get('.btn').click();
    //-- VALIDATION --// 
    // we can observe that first template name and level will be changed
    })
})