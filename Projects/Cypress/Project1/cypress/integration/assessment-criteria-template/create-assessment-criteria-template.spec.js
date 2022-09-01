//Create Assessment Criteria template
describe('Create Assessment Criteria template',function(){
    it('Coach shall be able to create a custom assessment criteria template',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();        
    //Validation - After sign in, It should redirect to the activity page
    cy.url().should("contain", '/activity/history');

    //Access the Assessment criteria
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.get('.fa-clone').first().click();
    cy.get('.form-control').type('custom template');
    cy.get('.form-select').select('Advanced').should('have.value', 'Advanced');
    cy.get('.fa-pencil').eq(0).click()
    cy.get('.ng-pristine').clear().type('100')
    cy.get('.p-checkbox-box').eq(1).click()
    cy.get('.btn').click()
    ///-- VALIDATION --//
    cy.contains('custom template');
    })
})
