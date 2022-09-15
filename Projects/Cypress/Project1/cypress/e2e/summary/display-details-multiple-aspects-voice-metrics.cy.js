//Display of details for each of the multiple aspects of voice metrics
describe("Display of details for each of the multiple aspects of voice metrics", function () {
  it("Verify that user can navigate to details for each of the multiple aspects of voice metrics", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+25@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Activity").click();
    cy.wait(1000);
    //Click on summary icon for a speech displayed in Activity page
    cy.get(".pt-3 > .btn").eq(1).click();
    cy.wait(1000);
    //Voice Metrics.
    cy.contains("Voice Metrics");
    cy.contains("Duration");
    cy.contains("Volume");
    cy.contains("Speed");
    cy.contains("Paralingual");
    cy.contains("Inflection");
    cy.contains("Quality");
    //respective scores of voice
    cy.contains("Voice").click();
    cy.contains("Overall assessment").click();
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
