describe('UnMark speech as favorite', function () {
    it(' Verify that user shall be able to unmark a speech as favorite from activity page', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl; //accesing baseUrl
     cy.visit(url);
     cy.contains('Sign in').click();     
     cy.get('#email').type('sowbhagya3696+18@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //click on favorites link in activity page
     cy.get('[routerlink="/activity/favorites"]').click();
     cy.contains('Favorites').click();
     //verify that speech is removed from list of favorites
     cy.get('.fas').first().click({force: true});
     //verify that above speech is displayed
     cy.contains('Activity').click();
    })
   })