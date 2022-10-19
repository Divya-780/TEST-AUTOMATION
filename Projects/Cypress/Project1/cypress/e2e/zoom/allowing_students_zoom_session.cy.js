describe("Allowing the students into the zoom session", function () {
  it("Allowing the students into the zoom session", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //when you hover on zoom icon you can see the group schedule.
    cy.get(".nav-link").should("be.visible");
    //join zoom session
    cy.get(".nav-link").eq(5).click();
    cy.get("#video-icon").click();
    cy.wait(4000);
    cy.get(".zm-btn").click();
    cy.wait(10000);
    cy.get(".footer-button__participants-icon").click();
    cy.wait(2000);
    //-- VALIDATION-- //
  });
});
