//Display of words and their frequency in Filler Words
describe(" Display of words and their frequency in Filler Words", function () {
  it("Verify that filler words detected in speech are displayed along with their frequency in Verbal Metrics", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+25@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Navigate to Activity page
    cy.contains("Activity").click();
    cy.wait(4000);
    //Click on summary icon for a speech displayed in Activity page
    cy.get(".pt-3 > .btn").eq(2).click();
    cy.contains("Verbal Chart");
    //Filler Word
    cy.contains("Filler Word").click();
    //-- VALIDATION-- //
    cy.contains("like");
    cy.contains("actually");
    cy.contains("uh");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
