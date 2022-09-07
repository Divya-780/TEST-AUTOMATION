//Coach shall be able to delete a group if the group is empty.
describe("Coach shall be able to delete a group if the group is empty.", function() {
    it("Coach shall be able to delete a group if the group is empty.", function() {
        //Login with coach credentials.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("tejasri+coach@applines.com");
        cy.get("#password").type("Speechpundit@123");
        cy.get("form").submit();
        cy.get('[routerlink="/user/groups"]').click({ force: true });
        cy.wait(4000);
        // Create new group by clicking "Create" button
        cy.get(".btn").first().click();
        //Provide all the mandatory fields information.
        cy.get("#name").type("Delete Group");
        cy.get("#level").select("Beginner").should("have.value", "Beginner");
        cy.contains("Start Time").click();
        cy.get(".p-calendar").eq(0).click();
        cy.get(".p-hour-picker").eq(0).click();
        cy.get(".p-minute-picker").click();
        cy.get(".p-ampm-picker").last().click();
        cy.contains("End Time").click();
        cy.get("button.btn.btn-circle.btn-default").last().click({ force: true });
        cy.wait(4000);
        cy.get("#startDate").click();
        cy.get(".p-datepicker-today").first().click();
        cy.get("#endDate").click();
        cy.get(".p-datepicker-today").last().click();
        cy.get(".btn").last().click();
        //Delete group
        cy.get("#dropdownOne").click();
        cy.wait(1000);
        cy.get(".fa-trash-alt").click();
        cy.get(".p-dialog-footer > .btn-secondary").click();
        cy.contains("Delete Group").should("not.exist");
    });
});