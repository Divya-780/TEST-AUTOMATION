//Parent shall be able to login
describe('Parent shall be able to login', function () {
    it(' Parent shall be able to login  ', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //-- VALIDATION-- // 
     cy.url().should('contain', 'studentactivity');
    })
   })