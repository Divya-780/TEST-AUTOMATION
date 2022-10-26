//Bar Chart time frame - Last 5 speeches.
describe('Bar Chart time frame - Last 5 speeches.', function () {
    it(' User shall be able to view No data to display, if there is no data', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+no_data_parent@gmail.com ');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click();
        //Action
        cy.get(".form-select-sm")
            .eq(0)
            .select("Last 5 Speeches")
        cy.contains(' No data to display ');
        //-- VALIDATION-- //
        cy.contains("Last 5 Speeches Performance").should("exist");
        //--TEAR DOWN --//
        cy.get(".fa-sign-out-alt").click({ force: true });
       
    })
})
  