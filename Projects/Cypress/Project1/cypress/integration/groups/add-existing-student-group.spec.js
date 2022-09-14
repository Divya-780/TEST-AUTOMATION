                        //Add an existing student to the group
describe("Add an existing student to the group", function () {
  it("Coach shall be able to add an existing student to the group.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //visit group url
    cy.get(".nav-item").invoke("show");
    cy.get("#menu-2 ").trigger("mouseover");
    cy.get(".dropdown").should("be.visible");
    cy.contains("Groups").click({ force: true });
    //Click "Add existing student
    cy.get(".text-capitalize").eq(2).click();
    cy.get(".mr-1").click();
    cy.get("#firstName").type("sowji");
    cy.get("#lastName").type("vajji");
    cy.contains("Search").click();
    cy.contains("User not found with a role Student");
    cy.get(".p-toast-icon-close-icon").click();
    cy.get("#firstName").clear().type("autouser");
    cy.get("#lastName").clear();
    cy.wait(4000);
    // cy.get("#email").clear();
    cy.contains("Search").click();
    cy.get(".table-responsive").contains("Add").first().click();
    cy.wait(2000);
    //--VALIDATION--//
    cy.contains("added successfully").should("exist");

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
