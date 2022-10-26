//Coach shall be able to see all assignment details under All assignments page in Classwork
describe("Coach shall be able to see all assignment details under All assignments page in Classwork", function () {
  it("Coach shall be able to see all assignment details under All assignments page in Classwork", function () {
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
    cy.wait(4000)
    cy.get('#p-tabpanel-3-label').click()
    cy.contains("student").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
