describe("Download a speech from activity page", function () {
  it("Verify that user shall be able to download a speech from activity page", function () {
    //Download a speech from activity page.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+24@gmail.com");
    cy.get("#password").type("Sathwik@151719");
    cy.get("form").submit();
    //Validation - After sign in, It should redirect to the activity page
    cy.url().should("contain", "/activity/history");
    cy.wait(2000);
    // By clicking on more option, we should select download button
    cy.get(".fe-more-vertical").eq(0).click();
    // By clicking on the download button the video will be downloaded
    cy.get(".fa-download").click();
    cy.wait(2000);
    //speech has been downloaded in local floder.
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
