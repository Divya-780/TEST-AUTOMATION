//Test Case-MYS-T09.
//login with valid credentials.
describe("Testing login with valid credentials", function () {
  it(" sign in with valid credentials", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //VALIDATION-logged in with valid credentials
    cy.url().should("contain", "/activity/history");
    cy.contains("Speeches").should("exist");
    cy.contains("Activity").should("exist");
    cy.contains("Record").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
