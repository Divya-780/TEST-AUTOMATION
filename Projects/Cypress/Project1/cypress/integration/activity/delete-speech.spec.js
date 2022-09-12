describe("Download a speech from activity page", function () {
  it("Verify that user shall be able to download a speech from activity page", function () {
    // sign and navigating to activity page
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+181@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Validation - After sign in, It shuld redirect to the activity page
    cy.url().should("contain", "/activity/history");
    cy.wait(4000);
    // By clicking on more option, we should select delete button
    cy.get(".fe-more-vertical").eq(0).click();
    cy.get(".fa-trash-alt").eq(0).click();
    // Validation - Deletion prompt should be displayed
    cy.contains("Delete Video");
    cy.contains(
      "Deleted video will not be shown anywhere. Are you sure you want to delete?"
    ).should("exist");
    // Click on the delete button in the prompt
    // cy.get('.p-dialog-footer > .btn').click()

    //-- VALIDATION --//
    //Note that the deleted video is not on the Students Activity page

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
