//Warning error if any required field is missing or entered incorrectly
describe("Warning error if any required field is missing or entered incorrectly ", function () {
  it(" Warning error if any required field is missing or entered incorrectly", function () {
    //login as a parent.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(2000);
    cy.get(".nav-link").eq(4).click();
    //click on change password
    cy.get('[routerlink="/PasswordValidation"]').click();
    cy.get("#oldPassword").click();
    cy.get("#newPassword").click();
    //Validation
    cy.contains("Current Password is required").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
