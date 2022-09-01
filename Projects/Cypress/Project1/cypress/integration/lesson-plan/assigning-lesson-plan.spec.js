//Test Case-MYS-T85.
//Assigning the lesson plan
describe("Assigning the lesson plan. ", function() {
    it("Coach shall be able to assign a lesson plan to students.", function() {
        // visit signin url.
        cy.wait(2000);
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("sowbhagya3696+4@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        cy.wait(4000);
        cy.get(".nav-item").invoke("show");
        cy.get('[routerlink="/user/groups"]').click({ force: true });
        //Select the Speech, Date assigned, Due date for assignment.
        // cy.contains("teju").focus().click();
        cy.get(".text-capitalize").eq(1).click();
        cy.get("#p-tabpanel-1-label").click();
        cy.contains("New Assignment ").click();
        cy.get(".form-select").first().select("Traveling");
        cy.get("#assignedDate").click();
        cy.get(".p-datepicker-today ").click();
        cy.wait(2000);
        cy.get("#dueDate").click();
        cy.get(".p-datepicker-today ").click();
        // select the level and assessment criteria template.
        cy.get(".form-select").eq(1).select("Beginner");
        cy.wait(4000);
        cy.get(".form-select").eq(2).select("palu");
        cy.get(".p-multiselect-trigger-icon").click();
        cy.get(".p-multiselect-filter").type("auto");
        cy.get(".p-checkbox-icon").eq(1).click({ force: true });
        cy.get(".p-multiselect-close").click();
        cy.get(".p-dialog").contains("Add").click();
    });
});