//Parent shall be able to select and view profiles between the kids if 1 or more are subscribed
describe("Parent shall be able to select and view profiles between the kids if 1 or more are subscribed", function () {
  it("Parent shall be able to select and view profiles between the kids if 1 or more are subscribed", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //select the kids
    cy.get(".p-dropdown-trigger-icon").click();
    cy.get(".p-dropdown-item").first().click();
    //-- VALIDATION-- //
    // we can observe the student list in dropdown

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
