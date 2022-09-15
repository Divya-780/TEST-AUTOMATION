describe("Student view- goal setting", function () {
  it("Coach shall be able to enable the practice goal for the current week and/or next week (toggle on/off)", function () {
    //sigin as coach.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //visit goal setting  url.
    cy.get('a[href*="/user/goalsetting"]').click({ force: true });
    cy.get(".p-inputswitch-slider").first().click();
    cy.get(".btn-circle").eq(4).click();
    //Validation for selecting current week goal
    cy.contains("Select current week practice goal");
    cy.wait(3000);
    cy.get(".p-inputswitch-slider ").last().click();
    cy.get(".btn-circle").eq(4).click();
    cy.contains("Select next week practice goal");
    cy.wait(3000);
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
  it("Student shall be able to see the Practice goal on left side bar under My Goals", function () {
    //sigin as student.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //the goal setting is shown on the left side menu bar, along with the target achieved for that week.
    //VALIDATION
    cy.contains("Target Met");
    cy.contains("Best Streak till now");
    cy.contains("Activity");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
  it("Coach shall be able to disable the practice goal for current or/and next week.", function () {
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //visit goal setting  url
    cy.get('a[href*="/user/goalsetting"]').click({ force: true });
    //Validation for de-selecting current week goal
    cy.get(".p-inputswitch-slider").first().click();
    // Validation
    //Validation for de-selecting next week goal
    cy.get(".p-inputswitch-slider").last().click();
    //Validation
    cy.contains("Goal setting is disabled.").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
