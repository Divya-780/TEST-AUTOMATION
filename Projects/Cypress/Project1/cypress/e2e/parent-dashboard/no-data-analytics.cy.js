//Test cases for analytics when we have no videos in the parent dashboard.
describe("Test cases for analytics when we have no videos in the parent dashboard.", function () {
    it(" Test cases for analytics when we have no videos in the parent dashboard.", function () {
      //login as a valid user.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data_parent@gmail.com ");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //  Validation for analysis
      cy.get('.nav-link').eq(2).click()
      //cy.contains("analytics");
      //Scores for no videos.
      cy.contains('Visual Score').its("length").should("be.gte", 0);
      cy.contains("Voice Score").its("length").should("be.gte", 0);
      cy.contains("Verbal Score").its("length").should("be.gte", 0);
      cy.contains("Overall Performance").its("length").should("be.gte", 0);
      cy.contains("Total Speeches").its("length").should("be.gte", 0);
      //Different charts and metrics
      cy.contains('Weekly Performance');
      cy.contains('No data to display');
      //-- VALIDATION-- //
      cy.url().should("contain", "analytics");
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });