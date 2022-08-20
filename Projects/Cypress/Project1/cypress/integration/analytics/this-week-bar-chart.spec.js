//Bar Chart time frame - This week
describe('Bar Chart time frame - This week', function () {
    it(' User shall be able to view the bar chart of all the speeches and metrics done for the selected time frame -This week..', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl; //accesing baseUrl
     cy.visit(url);
     cy.contains('Sign in').click();
     cy.get('#email').type('sowbhagya3696+18@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     //Analytics page
     cy.get('[routerlink="/activity/analytics"]').click()
     //Action
     cy.get('.form-select-sm').eq(0).select('This Week').should('have.value', 'thisWeek');
     //-- VALIDATION-- //
     cy.contains('Weekly Performance')
    })
   })
 