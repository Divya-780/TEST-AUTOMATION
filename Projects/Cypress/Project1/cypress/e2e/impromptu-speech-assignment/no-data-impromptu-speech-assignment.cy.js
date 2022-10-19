//Impromptu speech topics-No Data Found
describe("Impromptu speech topics", function () {
    it("If no impromptu topics is there 'No data to display' shold be displayed" , function () {
      // visit signin url.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+no_data_coach@gmail.com");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      cy.wait(4000);
      // visit lesson plan.
      cy.get('a[href*="user/lessonplan"]').click({ force: true });
      cy.wait(2000);
      //visit Impromptu speech
      cy.get("#p-tabpanel-1-label").click();
      cy.wait(2000)
      cy.contains('No data found')
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
  