//User shall be able to redirect to favorites page.
describe("User shall be able to redirect to favorites page", function() {
    it(" Verify that user should redirect to favorites page", function() {
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("sowbhagya3696+4@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        cy.get('a[href*="/activity/history"]').click({ force: true });
        //navigate to Favorites page
        cy.get('[routerlink="/activity/favorites"]').click();
        cy.wait(4000);
        //verify that favorites page is opened or not
        cy.contains("Favorites").should("exist");
        // cy.get(".list-group-item").its("length").should("eq", 2);
        //--TEAR DOWN --//
        cy.get(".fa-sign-out-alt").click({ force: true });
    });
});