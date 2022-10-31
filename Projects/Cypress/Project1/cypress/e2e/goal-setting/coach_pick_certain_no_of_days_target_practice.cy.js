//Coach shall be able to pick certain number of days for target practice
describe("Coach shall be able to pick certain number of days for target practice", function () {
  it("Coach shall be able to pick certain number of days for target practice", function () {
    //sigin as coach.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //visit goal setting  url.
    cy.get('a[href*="/user/goalsetting"]').click({ force: true });
    cy.get(".p-inputswitch-slider").first().click();
    //Validation
    cy.get(".btn-circle").eq(6).click();
    cy.get(".p-inputswitch-slider").first().click();
    //Validation
    cy.contains("Goal setting is disabled.");
    cy.get(".p-inputswitch-slider").last().click();
    //Validation
    cy.get(".btn-circle").eq(6).click();
    cy.get(".p-inputswitch-slider").last().click();
    //Validation
    cy.contains("Goal Setting").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
