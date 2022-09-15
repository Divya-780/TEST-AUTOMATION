//Test Case MYS-T86
//Editing the lesson plan
describe("Editing the lesson plan ", function () {
  it("Coach can edit the lesson plan.", function () {
    //visit signin url
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(3000);
    //Access lesson plan page
    cy.get('a[href*="user/lessonplan"]').click({ force: true });

    //Click on the edit icon to make any changes.
    cy.get("#p-tabpanel-0-label").click();
    cy.get(".fa-edit").first().click({ force: true });
    cy.get("#speechTitle").clear().type("Traveling");
    cy.get(".form-select").select("Beginner").should("have.value", "Beginner");
    cy.get("#speechTime").clear().type("7");
    cy.get(".ql-editor").eq(0).clear().type(" select your favorites");
    cy.get(".ql-editor").eq(1).clear().type("choose a  few attractions");
    cy.get(".ql-editor").eq(2).clear().type("give listener a good ending");

    //click on Update.
    cy.contains("Update").click();

    //VALIDATION
    cy.contains("Traveling").should("exist");
  });
});
