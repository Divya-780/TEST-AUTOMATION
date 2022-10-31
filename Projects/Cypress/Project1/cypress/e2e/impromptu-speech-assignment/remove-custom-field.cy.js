//Remove custom field while assigning custom question to the student
describe("Remove custom field while assigning custom question to the student", function () {
  it("user(coach) shall be able to remove custom question", function () {
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
    cy.get(".btn").eq(1).click();
    //add the custom question.
    cy.get("#p-accordiontab-0").click();
    cy.get(".btn").eq(2).click();
    cy.wait(1000);
    //click remove
    cy.get(".p-3 > .btn").click();
    //VALIDATION
    cy.url().should("contain", "lessonplan");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
