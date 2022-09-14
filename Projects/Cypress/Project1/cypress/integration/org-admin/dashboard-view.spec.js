//Dashboard view
describe("Dashboard view.", function () {
  it(" A quick dashboard view for an org admin", function () {
    cy.wait(1000);
    //login with org admin credentials
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4org@gmail.com");
    cy.get("#password").type("boulder");
    cy.get("form").submit();
    //dashboard view is presented
    cy.wait(2000);
    //--VALIDATION --//
    cy.url().should("contain", "org-admin/dashboard");
    // cy.get('.bx-arrow-to-left').click();
    // cy.wait(2000);
    //--TEAR DOWN--//
    // cy.get(".user-img").click();
    // cy.contains("Logout").click();
  });
});
