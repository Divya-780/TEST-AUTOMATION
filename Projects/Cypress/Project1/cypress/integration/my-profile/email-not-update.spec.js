//User shall NOT be able to update the email information.
describe("User shall NOT be able to update the email information.", function () {
  it("User shall NOT be able to update the email information.", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(3000);
    cy.get(".nav-item").invoke("show");
    cy.get('[routerlink="/user/groups"]').click({ force: true });
    cy.get(".nav-item").invoke("show");
    cy.get('[routerlink="/user/profile"]').click({ force: true });
    // Email button has to be disabled
    cy.get("#email").should("be.disabled");
    // Validation
    cy.url().should("contain", "profile");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
