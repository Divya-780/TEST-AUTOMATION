//Sankey chart
describe("Sankey chart", function () {
  it("Sankey chart", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Navigate to Activity page
    cy.contains("Activity").click();
    cy.wait(1000);
    //Click on summary icon for a speech displayed in Activity page
    cy.get(".pt-3 > .btn").eq(2).click();
    //Sankey chart
    cy.get("#p-tabpanel-2-label").click();
    //-- VALIDATION-- //
    cy.url().should("contain", "summary");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
