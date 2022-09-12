//Donut chart-Areas of Improvement.
describe("Donut chart-Areas of Improvement", function () {
  it(" User shall be able to view the metrics in donut chart of all the speeches.", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+feb14@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    //Analytics page
    cy.get('[routerlink="/activity/analytics"]').click();
    //Action
    cy.get(".form-select-sm")
      .eq(0)
      .select("Last 5 Speeches")
      .should("have.value", "last5");
    cy.get(".chartjs-render-monitor").last().click();
    cy.wait(2000);
    cy.get(".chartjs-render-monitor").last().trigger("mousedown").click();
    cy.get(".chartjs-render-monitor").last().trigger("mouseup").click();
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
