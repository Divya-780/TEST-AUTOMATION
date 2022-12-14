describe("Parent shall able to see scores on assigned lesson plan on activity page", function () {
  it("see scores on activity page ", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //-- VALIDATION-- //
    cy.url().should("contain", "studentactivity");
    cy.get(".nav-link").eq(2).click();
    //  Validation for analysis
    cy.get(".p-datatable-tbody").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
