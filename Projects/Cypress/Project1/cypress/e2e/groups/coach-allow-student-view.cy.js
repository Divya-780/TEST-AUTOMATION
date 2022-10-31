//Coach should  allow  student view if the student is  active or subscribe.
describe("Coach should allow  student view if the student is  active or subscribe.", function () {
    it("Coach should allow  student view if the student is active or subscribe. ", function () {
      //Login with coach credentials.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //visit group url
      cy.get('a[href*="/user/groups"]').click({ force: true });
      cy.wait(2000);
      cy.get(".text-capitalize").eq(1).click();
      cy.wait(2000)
      cy.get('.studentView--name').eq(0).click()
       //VALIDATION
       cy.url().should('contain','activity/history');
      //--TEAR DOWN --//activity/history
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
