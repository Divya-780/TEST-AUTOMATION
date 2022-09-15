//Default landing page should be the Child's Activity page
describe("Default landing page should be the Childs Activity page", function () {
  it("Default landing page should be the Childs Activity page ", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //-- VALIDATION-- //
    cy.url().should("contain", "studentactivity");
    cy.get(".p-shadow-4").its("length").should("be.gte", 4);
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
