describe("Contact us", function () {
  it("Verify that user shall be able send his/her detials to the adminstration", function () {
    //contact us form
    let url = Cypress.config().baseUrl;    
    cy.visit(url);
    cy.contains("Contact Us").click();
    cy.get("#fname").type("SoNu");
    cy.get("#lname").type("Sanaka");
    cy.get("#email").type("divya@applines.com");
    cy.get("#purpose").select("Plans and Pricing");
    cy.get("#textarea").type("Is there any free plans for the first user?");
    cy.get(".btn-secondary").click();
    // -- VALIDATION --//
    cy.contains("We received your question. You will hear from us soon");
  });
});
