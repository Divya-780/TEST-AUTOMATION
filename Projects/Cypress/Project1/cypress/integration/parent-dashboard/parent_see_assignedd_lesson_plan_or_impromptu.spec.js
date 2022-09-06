//Parent shall be able to see the assigned lesson plan/Impromptu 
describe('Parent shall be able to see the assigned lesson plan/Impromptu ', function () {
    it(' Parent shall be able to see the assigned lesson plan/Impromptu', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //click on assignments
     cy.get('.nav-link').eq(3).click()
     cy.contains('Lessons')
     cy.contains('Impromptu Speeches')
     //-- VALIDATION-- // 
     cy.url().should('contain', 'student-assignment');
    })
   })