//Coach should not allow to give scores which are not matched to the assigned weight
describe("Coach giving invalid scores irrespective of the weight", function() {
    it("Coach giving invalid scores.", function() {
        // visit signin url.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("divya+automation@applines.com");
        cy.get("#password").type("Sonu@1234");
        cy.get("form").submit();
        cy.contains("Student Activity").click();
        cy.wait(4000);
        cy.get(".p-shadow-4").eq(0).click({ force: true });
        cy.wait(5000);
        cy.get(".fa-pencil").eq(1).click();
        cy.get(".p-inputtext").clear().type("100");
        cy.get(".btn").click();
        // Validation
        cy.contains("Score should not be greater than Weight").should("exist");
        //--TEAR DOWN --//
        cy.get(".fa-sign-out-alt").click({ force: true });
    });
});