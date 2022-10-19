//Donut chart-Areas of Improvement.
describe("Donut chart-Areas of Improvement", function () {
    it(" User shall be able to view No data to display, if there is no data", function () {
      //login as a valid user.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data@gmail.com");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //Analytics page
      cy.get('a[href*="/activity/history"]').click({ force: true });
      cy.get('[routerlink="/activity/analytics"]').click();
      //Action
      cy.get(".form-select-sm")
        .eq(0)
        .select("Last 5 Speeches")
        .should("have.value", "last5");
      cy.get(".chartjs-render-monitor").last().click({force: true});
      cy.contains('No data to display ')
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
  