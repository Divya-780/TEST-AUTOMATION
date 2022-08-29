describe("Record a video", function () {
  it("User shall be able to record a video.", function () {
    //Login with valid credentials.
    let url = Cypress.config().baseUrl; //accessing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get('#email').type('sowbhagya3696+105@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get("form").submit();
    //Validation - After sign in, It shuld redirect to the activity page
    cy.url().should("contain", "/activity/history");
    // Go to the record page.
    cy.contains("Record").click();
    // Validation - By clicking on the Record section, it will go the record page
    cy.url().should("contain", "/record");
    cy.get(".rec-btn").click();
    // Validation - By clicking on the Record button, it will go the recording page with user positioning
    cy.url().should("contain", "/recording");
  });
});
