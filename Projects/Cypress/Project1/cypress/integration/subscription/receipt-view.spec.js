//User shall receive the receipt for a successful payment.
describe("User will receive the receipt for a successful payment. ", function() {
    it("User can check the receipt after the successful transaction ", function() {
        // Login with valid credentials
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains("Sign in").click(); //Login with valid credentials
        cy.get("#email").type("applinetester+1@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        cy.wait(1000);
        //redirecting to subscription page
        cy.get('[routerlink="/user/groups"]').click({ force: true });
        cy.get(".nav-item").invoke("show");
        cy.get('[routerlink="/user/subscriptions"]').click({ force: true });
        cy.contains("Invoice #").click();
        //-- VALIDATION --//
        //Observe that user is taken to payment receipt page
    });
});