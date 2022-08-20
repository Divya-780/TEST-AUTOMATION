//Favorite speeches are displayed in favorites page.
describe('Favorite speeches are displayed in favorites page', function () {
    it(' Verify that all favorite speeches are displayed in favorites page', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl; //accesing baseUrl
     cy.visit(url);
     cy.contains('Sign in').click();     
     cy.get('#email').type('sowbhagya3696+4@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //navigate to Activity page
     cy.contains('Activity');
     cy.get('.fa-lg').first().click();
     //click on Favorites link
     cy.get('[routerlink="/activity/favorites"]').click();
     //verify that above speech is displayed
     cy.contains('Favorites');
    })
   })
 

