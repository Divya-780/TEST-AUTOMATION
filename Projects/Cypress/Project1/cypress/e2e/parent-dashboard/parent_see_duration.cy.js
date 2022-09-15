//Parent shall be able to see the duration of the practice
describe("Parent shall be able to see the number of speeches practiced", function () {
  it("Parent shall be able to see the number of speeches practiced", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+aug_15p@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //click on Analytics
    cy.get(".nav-link").eq(2).click();
    //duration
    cy.get('[psortablecolumn="duration"]').click();
    //-- VALIDATION-- //
    cy.get(".ng-star-inserted").eq(3).should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
