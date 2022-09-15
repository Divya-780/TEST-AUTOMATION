//Display of speech waveform
describe("Display of speech waveform", function () {
  it("Verify that speech waveform is displayed", function () {
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+25@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Navigate to Activity page
    cy.contains("Activity").click();
    cy.wait(1000);
    //Click on summary icon for a speech displayed in Activity page
    cy.get(".pt-3 > .btn").eq(2).click();
    cy.get(".my-3").click();
    //waveform is displayed
    cy.get(".p-button-rounded").click();
    cy.wait(1000);
    cy.get(".p-button-rounded").click();
    //-- VALIDATION-- //
    ///Audio wave is palying

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
