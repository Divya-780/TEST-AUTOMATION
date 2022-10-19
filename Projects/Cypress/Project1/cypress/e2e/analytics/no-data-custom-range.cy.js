//Bar Chart time frame - Custom range
describe('Bar Chart time frame - Custom range', function () {
    it(' User shall be able to view No data to display, if there is no data', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+no_data@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click();
        //Action
        cy.get(".form-select-sm")
          .eq(0)
          .select("Custom Range")
          .should("have.value", "custom");
        cy.get(".p-button").click();
        cy.get(".p-datepicker-prev-icon").click();
        cy.get(".p-datepicker-calendar").first().click();
        cy.get(".p-datepicker-today").first().click();
        cy.get(".p-button").click();
        cy.contains(' No data to display ');
        //-- VALIDATION-- //
        cy.contains('Weekly Performance');
    })
})
