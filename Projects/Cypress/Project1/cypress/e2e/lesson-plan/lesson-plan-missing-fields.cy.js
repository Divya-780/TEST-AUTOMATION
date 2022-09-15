//Test Case-MYS-T84.
//Error if missing any required fields.
describe("Error if missing any required fields. ", function () {
  it("Coach shall get an error message while saving if all required fields are not filled.", function () {
    //visit signin url
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+202@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);

    //visit Lesson Plan
    cy.get('a[href*="user/lessonplan"]').click({ force: true });
    cy.get("#p-tabpanel-0-label").click();
    cy.get(".btn").first().click();

    // Enter Speech Title, Speech Level and Speech time (duration).
    cy.get("#speechTitle").should("be.empty").click();
    cy.get("#speechTime").should("be.empty").click();
    cy.contains("Save").click();

    //VALIDATION
    cy.contains("Introduction Required").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
