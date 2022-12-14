//Coach shall be able to see all student speeches metric scores and overall scores.
describe("Coach shall be able to see all student speeches metric scores and overall scores.", function () {
  it("Coach shall be able to see all student activities under Student Activity.", function () {
    //Record a speech and navigate to Activity page.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Student Activity").click();
    cy.contains("Visual")
    cy.contains("Voice")
    cy.contains("Verbal")
    cy.contains("Overall Score");
    cy.url().should("contain", "studentactivity");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
