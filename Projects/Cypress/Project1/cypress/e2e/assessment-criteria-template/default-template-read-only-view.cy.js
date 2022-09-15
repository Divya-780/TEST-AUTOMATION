//Default template Read-only view
describe("Default template Read-only view", function () {
  it("Coach should be able to clone template from the default template", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //visit assessment criteria template
    cy.get('a[href*="/user/assessment-template"]').click({ force: true });
    //Default template Read-only view
    cy.get(".fa-clone").first().click();

    //-- VALIDATION --//
    cy.contains("CONTENT").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
