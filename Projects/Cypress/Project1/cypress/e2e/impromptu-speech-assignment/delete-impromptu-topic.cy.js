//Delete the impromptu topic
describe("Delete the impromptu topic", function () {
  it("Delete the impromptu topic​​​​", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    // visit lesson plan.
    cy.get('a[href*="user/lessonplan"]').click({ force: true });
    //Impromptu section
    cy.get("#p-tabpanel-1-label").click();
    cy.wait(4000);
    //click the delete icon for the speech need to be deleted.
    cy.get(".fa-trash").last().click();
    //click yes/no
    cy.contains("Yes").click({ force: true });
    //VALIDATION
    cy.url().should('contain', 'lessonplan');
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
