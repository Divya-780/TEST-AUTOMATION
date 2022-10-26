//Mark speech as favorite
describe("Mark speech as favorite", function () {
  it(" Verify that user shall be able to mark a speech as favorite from activity page", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Activity");
    cy.get('a[href*="/activity/history"]').click({ force: true });
    //click on favorite icon
    cy.get(".fa-heart").first().click();
    //Redirecting to favorites page
    cy.get('[routerlink="/activity/favorites"]').click();
    cy.wait(4000);
    //observe that marked video will be displayes in favorites page.
    cy.contains("Favorites").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
  it(" Verify that user shall be able to unmark a speech as favorite from activity page", function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.get('a[href*="/activity/history"]').click({ force: true });
    //Redirecting to favorites page
    cy.get('[routerlink="/activity/favorites"]').click();
    cy.wait(6000)
    //verify that speech is removed from list of favorites
    cy.get(".fa-heart").first().click({ force: true });
    //observe that unmarked video will be removed
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
