//Parent shall be able to see the Analysis on  top of the analytics page 
describe('Parent shall be able to see the Analysis on  top of the analytics page ', function () {
    it('Parent shall be able to see the Analysis on  top of the analytics page ', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     cy.wait(4000)
     //click on Analytics
     cy.get('.nav-link').eq(2).click()
     //-- VALIDATION-- // 
     cy.url().should('contain', 'analytics');
    })
   })