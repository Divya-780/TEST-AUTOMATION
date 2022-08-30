//user shall be able to sign out
describe("user shall be able to sign out", function () {
  it(" Verify that user shall be able to sign out and redirected to landing page", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;    
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.get(".nav-item").invoke("show");
    cy.wait(1000);
    //click on sign out
    cy.get(".fa-sign-out-alt").click({ force: true });
    cy.wait(1000);
    //verify that user is signed out and redirecting to landing page
    cy.url().should("contain", "home");
  });
});
