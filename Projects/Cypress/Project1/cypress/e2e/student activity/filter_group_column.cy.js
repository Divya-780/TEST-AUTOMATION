//Coach shall be able to filter through the group column
describe("Coach shall be able to filter through the group column", function () {
  it("Coach shall be able to filter through the group column", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    cy.contains("Student Activity").click();
    //select filter
    cy.get(".p-column-filter ").eq(1).click();
    cy.get(".p-column-filter-matchmode-dropdown ").click();
    cy.get(".p-dropdown-item").eq(4).click();
    cy.get('.ng-tns-c80-4').type("sowji");
   // cy.get(' .p-inputtext').type("sowji");
   // cy.get(".p-columnfilterformelement.ng-tns-c80-6").clear().type("sowji");
    cy.contains("Apply").click();
    //-- VALIDATION --//
    cy.contains("sowji").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
