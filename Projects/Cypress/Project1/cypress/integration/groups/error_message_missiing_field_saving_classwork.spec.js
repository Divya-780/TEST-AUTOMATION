//Coach shall get an error if any required field is missing while saving classwork
describe("Coach shall get an error if any required field is missing while saving classwork", function () {
  it("Coach shall get an error if any required field is missing while saving classwork", function () {
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
    cy.get("#p-tabpanel-1-label").click();
    cy.contains("New Assignment").click();
    cy.get(".p-dialog-footer > .btn-secondary").click();
    //--VALIDATION--//
    cy.contains("Please fill all the require fields");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
