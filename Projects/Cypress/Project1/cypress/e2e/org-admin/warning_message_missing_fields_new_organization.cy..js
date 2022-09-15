//Super admin shall get an warning if any information is missing while creating a new organization
describe('Super admin shall get an warning if any information is missing while creating a new organization', function () {
    it('Super admin shall get an warning if any information is missing while creating a new organization ', function () {
    //login as a  super admin.  
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();   
     cy.get('#email').type('sowbhagya3696+4@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //Go to the admin tab
     cy.contains('Admin').click();
     //Select the org admin option from the side bar.
     cy.contains('Org Admin').click()
     //Create a new org by providing all the information required.
     cy.get('#orgName').type('permissive education')
     cy.get('#orgDescription').type('he students choose what and how to learn and are supported in their learning by the teacher. But the ultimate decisions about learning are made by the students.')
     cy.get('#firstName').type('sowji')
     cy.get('#lastName').type('challa')
    cy.get('#email').click()
     //Click Add.
     cy.contains('Add').click()
     cy.wait(1000)
     //-- VALIDATION --//
     cy.contains('Fill in all required fields')
    })
   })