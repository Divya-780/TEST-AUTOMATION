describe("Coach shall be able to see the vocal audio files in the student activity page", function () {
  it("Verify that coach shall be able to see the vocal audio files recorded by student", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("divya+coach1@applines.com");
    cy.get("#password").type("Sonu@1234");
    cy.get("form").submit();
    cy.contains("Student Activity").click();
    cy.wait(2000);
    //Redirecting to summay page
    cy.get(".p-shadow-4").eq(0).click();
    cy.wait(1000);
    cy.url().should("contain", "summary");
    cy.contains("Voice Drill").should("exist");
    //Verifying that spectogram image is in the summary page
    cy.get(".img-size").should("exist");
    cy.get("audio")
      .invoke("attr", "src")
      .then((audiofile) => {
        const audio = new Audio(audiofile);
        audio.play();
      });
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
    
  });
});
