//User shall be able to cancel the subscription
describe("User shall be able to cancel the subscription", function() {
    it("User shall be able to cancel the subscription ", function() {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains("Sign in").click(); //Login with valid credentials
        cy.get("#email").type("sowbhagya3696+25@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        //Redirecting to subscription page
        cy.get('[routerlink="/user/groups"]').click({ force: true });
        cy.get(".nav-item").invoke("show");
        cy.get('[routerlink="/user/subscriptions"]').click({ force: true });
        //User shall be able to cancel the subscription
        cy.contains("Cancel Subscription").click();
        cy.wait(5000);
        // cy.get(".p-confirm-dialog-reject").click({ force: true });
        cy.get(".p-confirm-dialog-accept").click({ force: true });
        //-- VALIDATION --//
        cy.contains(
            "Subscription cancelled, but will be valid till the end of the period."
        ).should("exist");
    });
});