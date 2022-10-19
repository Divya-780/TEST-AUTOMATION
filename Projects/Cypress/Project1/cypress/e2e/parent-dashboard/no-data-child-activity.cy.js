//Test cases  for No videos for that students who associated for that parent.

describe("Test cases  for No videos for that students who associated for that parent.", function () {
    it(" Test cases  for No videos for that students who associated for that parent.", function () {
      //login as a valid user.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data_parent@gmail.com ");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //-- VALIDATION-- //
      cy.url().should("contain", "studentactivity");
      cy.contains('In total there are 0 speeches.')
     // cy.get(".p-shadow-4").its("length").should("be.gte", 0);
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });