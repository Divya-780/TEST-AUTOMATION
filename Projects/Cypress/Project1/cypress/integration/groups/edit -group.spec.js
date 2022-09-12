//Edit the group
describe("Edit the group", function () {
  it("Coach shall be able to edit the existing group", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.get('a[href*="/user/groups"]').click({ force: true });
    cy.wait(4000);
    // cy.get(".fe-more-vertical").eq(0).click();
    cy.get("#dropdownOne").click();
    cy.wait(1000);
    cy.contains("Edit").click();
    cy.wait(2000);
    cy.get("#name").clear().type("sowji");
    // cy.get("#level").select("Beginner").should("have.value", "Beginner");
    cy.get(".p-dialog-footer").contains("Update").click();
    cy.contains("Proceed").click();
    cy.wait(2000);
    //VALIDATION
    cy.contains("sowji").should('exist');
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
