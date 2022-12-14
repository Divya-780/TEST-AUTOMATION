describe("Parent shall be able to see the feedback for student", function () {
  it("Parent shall be able to see the feedback", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //  Validation - after parent login, should go to activity page
    cy.url().should("contain", "studentactivity");
    //click on first video
    cy.get(".p-shadow-4").first().click();
    cy.get("#p-tabpanel-1-label").click();
    //  Validation
    cy.contains("Feedback").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
