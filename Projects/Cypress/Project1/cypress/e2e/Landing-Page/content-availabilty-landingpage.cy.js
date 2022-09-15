describe("Testing Landing Page", () => {
  it("Verifies that the page loads with the expected content", () => {
    //Verifying content on speechpundit website//
    cy.wait(2000);
    let url = Cypress.config().baseUrl;    
    cy.visit(url);
    // Verify that header elements are present
    cy.contains("About Us");
    cy.contains("Pricing");
    cy.contains("Sign in");
    cy.contains("Sign Up");
    //verify that central elements are present
    cy.contains("Try Now").click();
    cy.url().should("contain", "trynow"); //-- VALIDATION --//
    cy.go("back");
    // Verify that nav links are working
    cy.contains("Why choose us").click();
    cy.contains("Program Video").click();
    cy.contains("Program Overview").click();
    cy.contains("Testimonial").click();
    cy.contains("Start Your Program").click();
    //verify that footer elements are present and nav links are working correctly
    cy.get('[routerlink="/help_center"]').click();
    cy.go("back");
    cy.get('[routerlink="/contact_us"]').click();
    cy.contains("Plans");
    cy.contains("Privacy Policy").click();
    cy.contains("Instagram");
  });
});
