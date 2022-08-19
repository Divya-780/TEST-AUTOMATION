//Mark speech as favorite
describe('Mark speech as favorite', function () {
    it(' Verify that user shall be able to mark a speech as favorite from activity page', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl; //accesing baseUrl
     cy.visit(url);
     cy.contains('Sign in').click();     
     cy.get('#email').type('sowbhagya3696+4@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //navigate to Activity page
     cy.contains('Activity');
     //click on favorite icon
     cy.get('.fa-lg').first().click();
     //click on favorites link in activity page
     cy.get('[routerlink="/activity/favorites"]').click();
     //verify that above speech is displayed
     cy.contains('Favorites');
    })
   })
 