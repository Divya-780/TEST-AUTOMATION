//Clone custom Template
describe("Clone custom template", function () {
  it("Coach should be able to clone template from the default template", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //Coach shall be able to clone the custom template
    cy.get('a[href*="/user/assessment-template"]').click({ force: true });
    cy.wait(4000);
    cy.get(".fa-clone").last().click();
    cy.wait(4000);
    cy.get(".btn").click();
    //-- VALIDATION --//
    cy.contains(" Copy of").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
