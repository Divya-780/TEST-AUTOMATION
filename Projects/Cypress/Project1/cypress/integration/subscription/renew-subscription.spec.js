//User shall be able to do Renew plan
describe("User is taken to subscription page", function () {
  it("After providing correct login credentials, user shall be directed to the subscription page and shall be able to choose the monthly/quarterly subscription plan.", function () {
    //-- Prcing content verifification --//
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click(); //Login with valid credentials
    cy.get("#email").type("tejasri@applines.com");
    cy.get("#password").type("Speechpundit@123");
    cy.get("form").submit();
    //redirecting to subscription
    cy.get('[routerlink="/user/groups"]').click({ force: true });
    cy.get(".nav-item").invoke("show");
    cy.get('[routerlink="/user/subscriptions"]').click({ force: true });
    cy.contains("Renew Plan").click();
    //selecting new plans
    cy.contains("Basic Plan");
    cy.contains("Get Started").click();
    cy.contains("Purchase").should("exist");
    cy.go('back');
    cy.go('back');

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
