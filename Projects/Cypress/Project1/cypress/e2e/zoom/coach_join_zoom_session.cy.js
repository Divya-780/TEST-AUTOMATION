//Able to join zoom session (coach)
describe("Able to join zoom session (coach)", function () {
  it("Able to join zoom session (coach)", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    //login with coach
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //when you hover on zoom icon you can see the group schedule.
    cy.get(".nav-link").should("be.visible");
    cy.wait(2000);
    //join zoom session
    cy.get(".nav-link").eq(5).click();
    cy.get(".zm-btn").click();
    cy.wait(6000);
    cy.get(".footer-button__participants-icon").click();
    //-- VALIDATION-- //
    cy.contains("Host");
  });
});
