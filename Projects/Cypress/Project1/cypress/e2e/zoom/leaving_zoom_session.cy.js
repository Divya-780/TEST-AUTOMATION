//leaving the zoom session
describe("leaving the zoom session", function () {
  it("leaving the zoom session ", function () {
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
    cy.wait(4000);
    //join zoom session
    cy.get(".nav-link").eq(0).click();
    cy.wait(4000);
    cy.get(".zm-btn").click();
    cy.wait(4000);
    cy.get(".zmu-btn").click();
    cy.wait(2000);
    cy.get(".leave-meeting-options__inner ").click();
    //-- VALIDATION-- //
    cy.url().should("contain", "history");
  });
});
