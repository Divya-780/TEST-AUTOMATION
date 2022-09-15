//Deleting Custom Template
describe("Deleting Custom Template", function () {
  it("A coach shall be able to delete the custom template only if its not assigned to any student", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Validation - After sign in, It should redirect to the activity page
    cy.url().should("contain", "/activity/history");

    //Access the Assessment criteria
    cy.get(".nav-item").invoke("show")
    cy.get('#menu-2\ ').trigger('mouseover')
    cy.get('.dropdown').should('be.visible');
    cy.contains('Assessment Criteria').click({ force: true })
    cy.get(".fa-trash").last().click();
    //-- VALIDATION --//
    // we can observe that last video was deleted

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
