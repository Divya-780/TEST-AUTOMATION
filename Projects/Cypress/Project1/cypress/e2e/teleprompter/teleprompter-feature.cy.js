//User(student) shall be able to use the teleprompter feature
describe("User(student) shall be able to use the teleprompter feature", function () {
  it("User(student) shall be able to use the teleprompter feature.", function () {
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+181@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Assignments").trigger("mouseover");
    cy.contains("Speeches").trigger("mouseenter", { force: true });
    cy.wait(2000);
    cy.get(".dropdown-item ").eq(2).click({ force: true });
    //pick the assigned speech
    // cy.get(".p-inputswitch-slider").click();
    // cy.wait(1000);
    //turn on the teleprompter inputs
    //font color
    cy.get(".col-2").eq(1).click();
    cy.get(".saturation-lightness").invoke("val", "#1bbf40").click();
    cy.get(".hue").trigger("change").click();
    cy.get(".col-2").eq(2).click();

    // //select the font size.
    cy.get(".p-dropdown-trigger").eq(0).click();
    cy.get(".p-dropdown-item").eq(0).click();
    // //select the prompt speed.
    cy.get(".p-dropdown-trigger").eq(1).click();
    cy.get(".p-dropdown-item").eq(2).click();
    //select the video placement.
    cy.get(".p-dropdown-trigger").eq(2).click();
    cy.get(".p-dropdown-item").eq(2).click();
    //To preview the settings.
    //cy.get('[ptooltip="Preview"]').click();
    // //To update the settings.
    cy.contains("Update").click();
    cy.get('[ptooltip="Update Settings"]').click();
    cy.get(".p-dropdown-trigger").eq(2).click();
    cy.get(".p-dropdown-item").eq(1).click();
    //To start the Record
    cy.get('[ptooltip="Start Record"]').click();
    cy.contains("Record").click();
    //VALIDATION
    cy.url().should("contain", "record");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
