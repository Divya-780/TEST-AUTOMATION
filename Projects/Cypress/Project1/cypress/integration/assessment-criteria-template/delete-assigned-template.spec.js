//Deleting Custom template - Already assigned template should not be delete
describe('Deleting Custom Template',function(){
    it('A coach shall not be able to delete the assigned custom template',function(){
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

    //Access the Assessment criteria
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.wait(4000);
    cy.get(".fa-trash").first().click();

    //-- VALIDATION --// 
    cy.contains('Unable to delete the template. Please remove all the assigned students and assignments.').should("exist")
})
})