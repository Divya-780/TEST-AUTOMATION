//Parent shall be able to change the profile information 
describe('Parent shall be able to change the profile information ', function () {
    it(' Parent shall be able to change the profile information ', function () {
     //login as a parent.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     cy.wait(2000)
     cy.get('.nav-link').eq(4).click()
     // User shall be able to view and edit the profile information here.
     cy.get('#fname').clear().type('sowbhagya')
     cy.get('#lname').clear().type('lakshmi')
     cy.get('#phone').clear().type('9848328832')
     //Click Save Profile after making changes.
     cy.get('.btn').first().click()
     //VALIDATION
     cy.contains('Saved Successfully.')
    })
   })