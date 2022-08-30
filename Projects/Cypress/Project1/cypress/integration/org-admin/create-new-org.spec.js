//Server Admin creating a new org
describe('As a super admin, I shall be able to create a new org.', function () {
    it(' sign in with valid credentials', function () {
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
     var date = new Date();
     var fname = "sowbhagya3696+"
     var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay())
     var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds())
     var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com")
     cy.get('#email').type(email)
     //Click Add.
     cy.contains('Add').click()
     cy.wait(1000)
     //-- VALIDATION --//
     cy.contains('New Organization added successfully. Login details sent to')
    
    })
   })