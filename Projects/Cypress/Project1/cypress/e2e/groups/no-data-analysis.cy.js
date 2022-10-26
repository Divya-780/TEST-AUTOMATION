// Test case for having text in groups page when there is no data for analysis
describe("Having text in groups page when there is no data for analysis", function () {
    it("Having text in groups page when there is no data for analysis", function () {
      //Login with coach credentials.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data_coach@gmail.com ");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //visit group
      cy.get('a[href*="/user/groups"]').click({ force: true });
      cy.wait(3000);
      cy.get(".text-capitalize").first().click();
      //click analysis
      cy.contains("Analysis").click()
      //If no data analysis
      cy.contains("Please assign students to this group to see their performance analysis.")
      //VALIDATION
      cy.contains("Overall Analysis").should("exist");
      ////--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    })
})