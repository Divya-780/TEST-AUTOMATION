describe("While copying the default template, the weights should be equal to 100", () => {
  it("Total weights testing", () => {
    let url = Cypress.config().baseUrl;
    cy.visit(url);

    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    // Go to the Assessment Criteria templates page
    cy.get('a[href*="/user/assessment-template"]').click({ force: true });
    cy.url().should("contain", "/user/assessment-template");
    // Clone Default tamplate
    cy.get(".fa-clone").click();
    // Validation
    cy.contains("Default Template");
    // Adding required fields
    cy.get(".form-control").type("Template1");
    cy.get(".form-select").select("Intermediate");
    cy.get(".fa-pencil").eq(1).click();
    cy.get(".ng-pristine").type("100");
    cy.get(".p-checkbox-box").eq(1).click();
    cy.get(".btn").click();
    cy.contains("Total custom weight should be equal to 100").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
