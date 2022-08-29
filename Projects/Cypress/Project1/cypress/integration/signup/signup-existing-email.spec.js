describe("sign up fails with previously used email ID", function () {
  it("Verify that sign up fails with previously used email ID when submitted along with valid values for all mandatory fields", function () {
    //Sign up with existing email
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign Up").click();
    //Previously used email id.
    cy.get("#firstName").type("sowbhagya");
    cy.get("#email").type("palu.sowji@gmail.com");
    cy.get("#lastName").type("lakshmi");
    cy.get("#password").type("Sathwik@1719");
    cy.get('[Value="Coach"]').check({ force: true });
    cy.get("#acceptTerms");
    cy.get("form").submit();
    //-- VALIDATION --//
    cy.contains("Email address already in use").should("exist");
  });
});
