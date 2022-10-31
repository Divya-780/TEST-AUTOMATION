//Display of Custom Template
describe("Display of Custom Template", function () {
  it("Coach shall be able to view the created custom template", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Access the Assessment criteria
    cy.get('a[href*="/user/assessment-template"]').click({ force: true });
    cy.wait(4000);
    cy.get(".fa-clone").last().click();
    cy.wait(4000);

    //-- VALIDATION --//
    cy.contains("Custom Template").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
