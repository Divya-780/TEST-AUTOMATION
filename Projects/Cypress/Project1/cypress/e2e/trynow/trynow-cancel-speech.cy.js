describe("Try Now -Cancel speech", function () {
  it('Any user shall be able to record an impromptu speech after clicking "Try Now" button. It will direct the user to the impromptu speech categories to pick the speech topic and cancel the speech by using button from.', function () {
    //Access the website
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains("Try Now").click();
    //user shall be presented with the 7 categories to pick a topic and question related to that.
    cy.get("body").click();
    cy.get(".dcard").eq(0).click();
    //user is aligned the recording will start.
   // cy.get(".p-button-label").click();
    cy.url().should("contain", "trynow");
    //It will Cancel the selected speech
    cy.wait(1000);
    cy.get('[label="Cancel "]').click();
    //-- VALIDATION-- //
    cy.url().should("contain", "home");
  });
});
