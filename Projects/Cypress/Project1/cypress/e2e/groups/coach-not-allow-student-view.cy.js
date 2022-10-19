//Coach should not allow  student view if the student is  not active or not subscribe.
describe("Coach should not allow  student view if the student is  not active or not subscribe.", function () {
    it("Coach should not allow  student view if the student is  not active or not subscribe. ", function () {
      //Login with coach credentials.
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("sowbhagya3696+4@gmail.com");
      cy.get("#password").type("Sathwik@1719");
      cy.get("form").submit();
      //visit group url
      cy.get('a[href*="/user/groups"]').click({ force: true });
      cy.wait(2000);
      cy.get(".text-capitalize").eq(2).click();
      cy.get('.studentView--name').eq(1).click()
       //VALIDATION
      cy.contains("Unable to change to student view because either Student not active or not subscribe.");
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });

  