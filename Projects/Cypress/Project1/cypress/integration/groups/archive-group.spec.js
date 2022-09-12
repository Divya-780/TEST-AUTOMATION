//Copy the group
describe("Archive the group", function () {
  it("Coach shall be able to Archive the group.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+202@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //Open the group.
    cy.get('a[href*="/user/groups"]').click({ force: true });
    cy.wait(3000);
    //Click 3 dots on top right corner.
    cy.get("#dropdownOne").click();
    cy.contains("Archive").click();
    cy.get(".p-dialog-footer .btn-secondary").click();
    //VALIDATION
    //We should observe the archived group
    cy.url().should("contain", "groups");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
