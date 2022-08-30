//Camera is working during the zoom session (user permission)
describe("Camera is working during the zoom session (user permission)", function () {
  it("Camera is working during the zoom session (user permission)", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //when you hover on zoom icon you can see the group schedule.
    cy.get(".nav-link").should("be.visible");
    //join zoom session
    cy.get(".nav-link").eq(0).click();
    cy.wait(4000);
    cy.get('.dropdown-item').eq(1).click({force: true})
    cy.contains("Join");
    cy.get(".zm-btn").click();
    // cy.get(".send-video-container").click();
  });
});
