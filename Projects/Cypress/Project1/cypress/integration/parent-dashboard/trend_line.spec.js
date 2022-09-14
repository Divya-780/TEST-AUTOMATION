describe("Parent shall be able to see the trend line", function () {
  it("Parent shall be able to see the trend line", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //click on Analytics
    cy.get(".nav-link").eq(2).click();
    cy.url().should("contain", "analytics");
    cy.get(".form-select").eq(0).select("Last Week");
    cy.get('[style="display: block;"] .chartjs-render-monitor');
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
