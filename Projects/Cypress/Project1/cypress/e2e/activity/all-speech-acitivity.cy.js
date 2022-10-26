describe("All speeches of user shall be displayed in activity page", function () {
  it(" Verify all speeches of user are displayed in activity page", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+2022coach@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    //Validation - After sign in, It should redirect to the activity page
    cy.get('a[href*="/activity/history"]').click({ force: true });
    cy.url().should("contain", "/activity/history");
    //VALIDATION
    cy.url().should("contain", "history");
    cy.get(".dropdown").its("length").should("eq", 6);
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
