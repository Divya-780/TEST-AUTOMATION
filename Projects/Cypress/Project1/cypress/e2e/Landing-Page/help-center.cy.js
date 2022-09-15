describe("Help Center Page", function () {
  it("Verify that user shall be able to click all the links in help center page", function () {
    //Contact us form
    let url = Cypress.config().baseUrl;    
    cy.visit(url);
    cy.contains("Help Center").click();
    //Verifying user shall be able to visit help center page
    cy.contains("Hi, Need some help with SpeechPundit");
    //Verifying all the links are properly redirecting to respect pages
    cy.get('[routerlink="/signup"]').eq(0).click();
    cy.url().should("contain", "signup");
    cy.go("back");
    cy.get('[routerlink="/pricing_plan"]').eq(1).click();
    cy.url().should("contain", "pricing_plan");
    cy.go("back");
    cy.contains("Features");
    cy.contains("Programs").click();
    cy.contains("Basic Plan");
  });
});
