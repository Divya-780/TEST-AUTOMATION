//sharing the screen during session.
describe("sharing the screen during session.", function () {
  it("//sharing the screen during session.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //when you hover on zoom icon you can see the group schedule.
    cy.get(".nav-link").should("be.visible");
    cy.wait(4000);
    //join zoom session
    cy.get(".nav-link").eq(5).click();
    cy.get(".zm-btn").click();
    cy.wait(5000);
    cy.get(".footer-button__share-icon").click();
    //-- VALIDATION-- //
  });
});
