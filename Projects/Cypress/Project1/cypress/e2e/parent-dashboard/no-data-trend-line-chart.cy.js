//Trend line chart
describe("Trend line chart", function () {
    it("User shall be able to view No data to display, if there is no data  ", function () {
      //login as a valid user.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data_parent@gmail.com ");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //Analytics page
      cy.get('[routerlink="/activity/analytics"]').click();
      cy.get(".form-select-sm")
        .eq(0)
        .select("Last 5 Speeches")
        .should("have.value", "last5");
      //The trend line  chart of all the speeches and metrics
      cy.contains('Trend line chart')
      cy.get(".chartjs-render-monitor").eq(0).click({ force: true });
      cy.contains(' No data to display ');
      //-- VALIDATION-- //
      //observe Trend line
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
  