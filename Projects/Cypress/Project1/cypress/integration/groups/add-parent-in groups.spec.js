//Coach shall be able to add a parent to the group
describe("Coach shall be able to add a parent to the group", function() {
    it("Coach shall be able to add a parent to the group.", function() {
        //Login with coach credentials.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get("#email").type("sowbhagya3696+4@gmail.com");
        cy.get("#password").type("Sathwik@1719");
        cy.get("form").submit();
        //visit group url
        cy.get(".nav-item").invoke("show");
        cy.get('[routerlink="/user/groups"]').click({ force: true });
        cy.wait(4000);
        cy.get(".text-capitalize").eq(2).click();
        //Add Parent
        cy.get(".btn-size").eq(0).click();
        // cy.get("#firstName").type("sowji");
        // cy.get("#lastName").type("vajji");
        // var date = new Date();
        // var fname = "parent";
        // var yyyymmdd = date
        //     .getUTCFullYear()
        //     .toString()
        //     .concat(date.getMonth())
        //     .concat(date.getUTCDay());
        // var hhmmss = date
        //     .getHours()
        //     .toString()
        //     .concat(date.getMinutes())
        //     .concat(date.getSeconds());
        // var email = fname
        //     .concat(".")
        //     .concat(yyyymmdd)
        //     .concat(hhmmss)
        //     .concat("@applines.com");
        // cy.get("#email").type(email);
        // cy.get('[Value="Male"]').check({ force: true });
        // cy.get(".p-dialog-footer > .btn").click();
        //Validation
        cy.contains("New Parent added successfully.").should("exist");
        //If already parent assigned
        // cy.contains("This Student is already associated to Parent").should("exist");
    });
});