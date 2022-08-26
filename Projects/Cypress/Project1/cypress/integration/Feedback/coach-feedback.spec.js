//Coach shall be able to provide a feedback.
describe("Coach shall be able to provide a feedback.", function () {
  it("Coach shall be able to provide the text and annotation feedback on a students submitted video.", function () {
    //Record a speech and navigate to Activity page.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+feb14@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    cy.contains("Student Activity").click();
    cy.get(".fa-comment-dots").eq(4).click();
    // coach shall be able to navigate feedback page
    cy.url().should("contain", "feedback");

    //PLAY-PAUSE
    cy.contains("Play/Pause").click();
    cy.wait(3000);
    cy.contains("Play/Pause").click();

    //SWITCH TO FEEFBACK BY DEFAULT
    cy.get("#p-tabpanel-0-label").click();

    //DROPDOWN COMMENTS
    cy.get(".form-select").select("Make eye contact.");
    cy.get(".form-control").should("have.value", "Make eye contact.");
    cy.get(".radio-opal :checked").should("be.checked");
    cy.get(".text-center > .btn-secondary").click();
    cy.wait(2000);
    cy.contains("Play/Pause").click();
    cy.get(".form-select").select("Great use of hand gestures.");
    cy.get(".form-control").should("have.value", "Great use of hand gestures.");
    cy.get(".radio-purple :checked").should("be.checked");
    cy.get(".text-center > .btn-secondary").click();
    cy.wait(2000);
    cy.contains("Play/Pause").click();

    //FEEDBACK TIMELINE
    cy.get(".p-inputswitch-slider").click();
    cy.contains("Make eye contact.");
    cy.contains("Great use of hand gestures.");

    //EDIT COMMENT
    cy.get(".fa-edit").eq(0).click();
    cy.get(".form-control").type(",Use Hand gestures to get score");
    cy.get(".fa-check").click();

    //DELETE COMMENT/ANNOTATION
    cy.get(".fa-trash").eq(1).click();
    cy.get(".p-confirm-popup-accept").eq(1).click();
    cy.get(".p-inputswitch-slider").click();
    cy.contains("Done").click();

    //FEEDBACK BUBBLE IS ACTVATING OR NOT
    cy.get(".text-primary")
      .eq(0)
      .should("have.css", "color", "rgb(161, 202, 201)");
  });
});
