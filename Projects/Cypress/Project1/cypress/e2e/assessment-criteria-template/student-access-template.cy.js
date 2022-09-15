//User(student) access to assigned template.
describe("User(student) access to assigned template.", function () {
  it("students access to assigned template.", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    // Validation
    cy.contains("Content").should("exist");
    cy.contains("Delivery").should("exist");
    cy.contains("Language").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
