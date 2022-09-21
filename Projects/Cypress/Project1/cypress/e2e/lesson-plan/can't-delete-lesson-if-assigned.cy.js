//Test Case MYS-T87
//Deleting the lesson plan
describe(" Deleting the lesson plan", function () {
  it("Coach shall be able to delete the lesson plan as long as it is not assigned to any student. If the lesson plan is already assigned, it cant be deleted.", function () {
    //visit signin url.
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);

    // visit lesson plan.
    cy.get('a[href*="user/lessonplan"]').click({ force: true });

    //Click on the delete icon to delete the lesson plan.
    cy.get("#p-tabpanel-0-label").click();
    cy.get(".fa-trash").eq(4).click();
    cy.get(".p-confirm-popup-accept").first().click({ force: true });
    cy.contains("Can't delete as lesson plan is already in use.").should(
      "exist"
    );
    cy.get(".p-toast-icon-close-icon").click();
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
