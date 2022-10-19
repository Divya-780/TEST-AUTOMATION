//new coach access to Impromptu questions
describe("new coach access to Impromptu questions", function () {
    it("coach access to Impromptu questions.", function () {
      // visit signin url.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+new_coach@gmail.com");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      cy.contains("Assignments").trigger("mouseover");
      cy.contains("Impromptu").click({ force: true });
      cy.get('.col-md-4').eq(5).click()
      //VALIDATION
      cy.url().should("contain", "impromptuspeech");
      cy.url("https://dev02.speechpundit.com/record").should("exist");
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });