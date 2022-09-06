//Parent shall be able to see the summary of each assigned speech
describe('Parent shall be able to see the summary of each assigned speech', function () {
    it('Parent shall be able to see the summary of each assigned speech  ', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     cy.wait(4000)
     //click on summary button
     cy.get('.p-shadow-4').first().click()
     //-- VALIDATION-- // 
     cy.url().should('contain', 'summary');
    })
   })