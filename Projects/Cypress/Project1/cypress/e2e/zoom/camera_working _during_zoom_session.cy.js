//Camera is working during the zoom session (user permission)
describe("Camera is working during the zoom session (user permission)", function () {
  it("Camera is working during the zoom session (user permission)", function () {
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
    cy.wait(3000);
    cy.contains("Join");
    cy.wait(2000);
    cy.get(".zm-btn").click();
    //-- VALIDATION-- //
    //  cy.get('.send-video-container').click()
  });
});
