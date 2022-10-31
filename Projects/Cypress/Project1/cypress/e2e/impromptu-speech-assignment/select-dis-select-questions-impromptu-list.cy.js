//selecting and dis-selecting the questions from the list
describe("selecting and dis-selecting the questions from the list", function () {
  it("selecting and dis-selecting the questions from the list", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    // visit lesson plan.
    cy.get('a[href*="user/lessonplan"]').click({ force: true });
    cy.get("#p-tabpanel-1-label").click();
    cy.wait(4000);
    //select or dis-select the questions by the toggle on/off option
    cy.get(".col-sm-3").eq(1).click();
    cy.get(".col-sm-3").eq(2).click();
    //VALIDATION
    cy.url().should("contain", "lessonplan");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
