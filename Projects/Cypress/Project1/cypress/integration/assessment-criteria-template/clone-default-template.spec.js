//Clone default Template
describe('Clone default template',function(){
    it('Coach should be able to clone template from the default template',function(){
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
    //Coach shall be able to clone the default template
    cy.get('.fa-clone').first().click();
    cy.wait(4000)
    cy.get('.form-control').type('custom template')
    cy.get('.form-select').select('Advanced').should('have.value', 'Advanced');
    cy.get('.fa-pencil').eq(2).click()
    cy.get('.ng-pristine').clear().type('50')
    cy.get('.p-checkbox-box').eq(3).click()

    cy.get('.fa-pencil').eq(5).click()
    cy.get('.ng-pristine').clear().type('50')
    cy.get('.p-checkbox-box').eq(6).click()
    cy.get('.btn').click()
    //-- VALIDATION --// 
    cy.contains('custom template');
    })
})
