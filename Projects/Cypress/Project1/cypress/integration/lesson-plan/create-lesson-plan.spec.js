// Test Case-MYS-T82
//Coach shall be able to add a new lesson plan
describe(" Coach shall be able to add a new lesson plan", function() {
    it("Coach shall be able to add a new lesson plan.", function() {
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("sowbhagya3696+4@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        cy.wait(1000);
        // cy.get(".nav-item").invoke("show");
        cy.get('[routerlink="user/lessonplan"]').click({ force: true });
        cy.get("#p-tabpanel-0-label").click();
        cy.get(".btn").first().click();

        //Enter Speech Title, Speech Level and Speech time (duration).
        cy.get("#speechTitle").type("About childhood");
        cy.get(".form-select").select("Beginner").should("have.value", "Beginner");
        cy.get("#speechTime").clear().type("9");

        //Add the Introduction, Key Points and closing.
        cy.get(".ql-editor").eq(0).type("Self Introduction");
        cy.get(".ql-editor").eq(1).type("Importance of memories");
        cy.get(".ql-editor").eq(2).type("Experience");

        //Click "save".
        cy.contains("Save").click();

        //VALIDATION
        cy.contains("About childhood").should("exist");
    });
});