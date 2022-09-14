//Display of emojis, laughter, sad etc according to speech content in video metrics
describe("Display of emojis, laughter, sad etc according to speech content in video metrics", function () {
  it("Verify that emojis of laughter, sad etc are displayed according to speech content in video metrics", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Navigate to Activity page
    cy.get(".nav-link").eq(5).click();
    //Click on summary icon for a speech displayed in Activity page
    cy.get(".mr-3").first().click();
    cy.wait(4000);
    cy.get(".single-sentiment-emoji");
    // cy.get('.single-sentiment-emoji').should('have.value','img');
    // cy.get('.ng-star-inserted').eq(2).should('have.value', 'img');
    cy.wait(1000);
    //Verify that multiple aspects of voice are displayed in Voice Metrics
    cy.get(".far").click();
    cy.wait(1000);
    cy.get(".far").click();
    //-- VALIDATION-- //
    cy.get(".p-card-content").click();
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
