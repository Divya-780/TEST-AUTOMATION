//User(student) access to assigned speech.
describe("User(student) access to assigned speeches.", function () {
  it("students access to assigned speeches.", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+181@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Assignments").trigger("mouseover");
    cy.contains("Speeches").trigger("mouseenter", { force: true });
    cy.contains("Traveling").click({ force: true });
    cy.get(".p-inputswitch-slider").click();
    cy.wait(1000);
    cy.get('[ptooltip="Start Record"]').click();
    cy.contains("Record").click();
    //VALIDATION
    cy.url().should("contain", "record");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
