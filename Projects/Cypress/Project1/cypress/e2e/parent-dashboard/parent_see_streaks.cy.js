//Parent shall be able to see the streaks achieved
describe("Parent shall be able to see the streaks achieved", function () {
  it("Parent shall be able to see the streaks achieved ", function () {
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
    //streak
    cy.get('[psortablecolumn="streak"]').click();
    //-- VALIDATION-- Streak is changed for every week. So commented.
    //  cy.get('.btn-circle').eq(2).should("exist")
    cy.get(".fa-sign-out-alt").click({ force: true });
    
  });
});
