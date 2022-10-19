//zero percentage should be displayed, if no data is there in analytics page.
describe("zero percentage should be displayed, if no data is there in analytics page.", function () {
    it(" zero percentage should be displayed, if no data is there in analytics page.", function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("sowbhagya3696+no_data_coach@gmail.com ");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        cy.wait(4000);
        cy.get('a[href*="/activity/history"]').click({ force: true });
        cy.get('[routerlink="/activity/analytics"]').click();
        //Different charts and metrics
        cy.get(".form-select-sm")
            .eq(0)
            .select("Last 5 Speeches")
            .should("have.value", "last5");
        //Visual Score
        cy.get('.p-knob-text').first().contains(0)
        //Voice Score
        cy.get('.p-knob-text').eq(1).contains(0)
        //Verbal Score
        cy.get('.p-knob-text').last().contains(0)
        //Overall Performance
        cy.get('.over-perf').contains(0)
        //Total Speeches
        cy.get('.total-spch').contains(0)
        //-- VALIDATION-- //
        cy.url().should("contain", "analytics");
        //--TEAR DOWN --//
        cy.get(".fa-sign-out-alt").click({ force: true });
    });
});