//Trend line chart
describe("Trend line chart", function () {
  it(" User shall be able to view the trend line  chart of all the speeches and metrics ", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+feb14@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    //Analytics page
    cy.get('a[href*="/activity/history"]').click({ force: true });
    cy.get('[routerlink="/activity/analytics"]').click();
    cy.get(".form-select-sm")
      .eq(0)
      .select("Last 5 Speeches")
      .should("have.value", "last5");
    //The trend line  chart of all the speeches and metrics
    cy.get(".chartjs-render-monitor").eq(0).click({ force: true });
    cy.get(".form-select")
      .eq(1)
      .select("Duration")
      .should("have.value", "duration");
    cy.wait(2000);
    cy.get(".form-select").eq(1).select("Speed").should("have.value", "speed");
    cy.wait(2000);
    cy.get(".form-select")
      .eq(1)
      .select("Volume")
      .should("have.value", "volume");
    cy.wait(2000);
    cy.get(".form-select")
      .eq(1)
      .select("Paralingual")
      .should("have.value", "paralingual");
    cy.wait(2000);
    cy.get(".form-select")
      .eq(1)
      .select("Inflection")
      .should("have.value", "inflection");
    cy.wait(1000);
    //-- VALIDATION-- //
    //observe Trend line
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
