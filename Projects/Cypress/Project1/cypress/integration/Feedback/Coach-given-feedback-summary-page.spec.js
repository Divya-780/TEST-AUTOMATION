//Coach shall be able to provide a feedback.
describe("Coach shall be able to see  a feedback.", function () {
  it("Coach shall be able to see feedback in summary page", function () {
    //Record a speech and navigate to Activity page.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+feb14@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    cy.contains("Student Activity").click();
    cy.wait(2000);
    
    //SELECTING VIDEO FOR FEEDBACK
    cy.get(".p-shadow-4").eq(4).click();

    //After click on video check it is redirecting to  assessment summary page
    cy.url().should("contain", "summary");

    //Clicking feedback tab
    cy.get("#p-tabpanel-1-label").click();

    //PLAY-PAUSE VIDEO
    cy.contains("Play/Pause").click();
    cy.wait(5000);
    cy.contains("Play/Pause").click();
    cy.wait(3000);
    //--VALIDATION--//
    //Observe that the coach given feedback is displaying on video  while video is playing
  });
});
