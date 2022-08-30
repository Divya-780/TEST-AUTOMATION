//Coach shall be able to provide a feedback.
describe("Coach shall be able to provide a feedback.", function () {
  it("Coach shall be able to provide the text and annotation feedback on a students submitted video.", function () {
    //Record a speech and navigate to Activity page.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+feb14@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    cy.contains("Student Activity").click();
    //Redirecting to student activity page
    cy.url().should("contain", "studentactivity");
    //feedback icon
    cy.get(".fa-comment-dots").eq(4).click();
    cy.wait(2000);
    //FEEDBACK PAGE
    cy.url().should("contain", "feedback");
    cy.contains("Play/Pause").click();
    cy.wait(1000);
    cy.contains("Play/Pause").click();
    //Switch to Annotation tab
    cy.get("#p-tabpanel-1-label").click();

    //PENCIL
    cy.get(".fa-pencil-alt").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 20, 37)
      .trigger("mouseup", 22, 17);
    cy.get(".text-center > .btn-secondary").click();
    cy.wait(1000);
    cy.contains("Play/Pause").click();
    cy.wait(3000);
    cy.contains("Play/Pause").click();

    //LINE
    cy.get(".fa-slash").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 300, 280) // from center to just inside top left
      .trigger("mouseup");
    cy.get(".text-center > .btn-secondary").click();
    cy.wait(1000);
    cy.contains("Play/Pause").click();
    cy.wait(3000);
    cy.contains("Play/Pause").click();

    //ARROW
    cy.get(".fa-arrow-right").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 20, 37)
      .trigger("mouseup", 22, 17);
    cy.get(".text-center > .btn-secondary").click();
    cy.contains("Play/Pause").click();
    cy.wait(3000);
    cy.contains("Play/Pause").click();

    //COMMENT
    cy.get(".fa-comment-alt").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 20, 37)
      .trigger("mouseup", 22, 17)
      .type("please make eye contact");
    cy.get(".text-center > .btn-secondary").click();
    cy.contains("Play/Pause").click();
    cy.wait(2000);
    cy.contains("Play/Pause").click();

    //CIRCLE
    cy.get(".fa-circle").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 20, 37)
      .trigger("mouseup", 22, 17);
    cy.contains("Play/Pause").click();
    cy.wait(2000);
    cy.contains("Play/Pause").click();

    //RECTANGLE
    cy.get(".fa-square").click();
    cy.get(".upper-canvas")
      .click()
      .trigger("mousedown", "center")
      .trigger("mousemove", 20, 37)
      .trigger("mouseup", 22, 17)
      .click();
  });
});
