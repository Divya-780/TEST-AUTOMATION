// Test case for having text in groups page when there is no data for Student Info
describe("Having text in groups page when there is no data for Student Info", function () {
    it("Having text in groups page when there is no data for Student Info", function () {
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
      //student info
      cy.get(".text-capitalize").first().click();
      //If students was not there 
      cy.contains("Please add existing users or add new users to this group.")
      //VALIDATION
      cy.contains("Student Info").should("exist");
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    })
})