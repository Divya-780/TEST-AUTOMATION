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
    cy.wait(4000)
    //Coach shall be able to clone the default template
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.get('.active > .nav-link').click()
    cy.wait(2000)
    cy.get('.fa-clone').last().click();
    cy.wait(1000)
    cy.get('.form-control').type('sowji')
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.get('input[type="checkbox"').eq(3).check({force: true});
    cy.get('input[type="checkbox"').eq(5).check({force: true});
    cy.get('.fa').eq(2).type('0');
    cy.get('.fa').eq(4).type('0');
    cy.get('.btn').click();
    //-- VALIDATION --// 
    cy.contains('sowji');
    })
})
