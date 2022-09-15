//sign up fails with invalid email ID
describe("sign up fails with invalid email ID", function () {
  it("Verify that sign up fails with invalid email ID when submitted along with valid values for all mandatory fields", function () {
    let url = Cypress.config().baseUrl;    
    cy.visit(url);
    //User shall be able to redirecting to signup page
    cy.contains("Sign Up").click();
    //Entering invalid email
    cy.get("#email").type("abc.sowji@gmail");
    cy.get("#firstName").type("sowbhagya");
    cy.get("#lastName").type("lakshmi");
    cy.get("#password").type("Sathwik@1719");
    cy.get('[Value="Coach"]').check({ force: true });
    cy.get("#acceptTerms");
    cy.get("form").submit();
    //-- VALIDATION-- //
    cy.contains("Enter a valid email address").should("exist");
  });
});
