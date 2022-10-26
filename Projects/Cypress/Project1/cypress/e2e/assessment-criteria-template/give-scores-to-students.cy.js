//Coach should give scores in the template at the studen activity page
describe("Coach can give scores to the template", function() {
    it("coach gives scores.", function() {
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
        cy.get(".p-inputtext").clear().type("5");
        
        cy.get(".fa-pencil").eq(2).click();
        cy.get(".p-inputtext").clear().type("3");
        cy.get(".btn").click();
        // Validation
        cy.contains("Successfully Submitted").should("exist");

        //--TEAR DOWN --//
        cy.get(".fa-sign-out-alt").click({ force: true });
    });
});