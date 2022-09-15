describe("User shall NOT be able to sign up if not valid first and last name.", function() {
    it("User shall NOT be able to sign up if not valid first and last name.", function() {
        //-- ACTION --//
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign Up").click();
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date
            .getUTCFullYear()
            .toString()
            .concat(date.getMonth())
            .concat(date.getUTCDay());
        var hhmmss = date
            .getHours()
            .toString()
            .concat(date.getMinutes())
            .concat(date.getSeconds());
        var email = fname
            .concat(".")
            .concat(yyyymmdd)
            .concat(hhmmss)
            .concat("@applines.com");
        cy.get("#email").type(email);
        cy.get("#firstName").type(yyyymmdd.concat(hhmmss));
        cy.get("#lastName").type(yyyymmdd.concat(hhmmss));
        //Validation
        cy.contains("Please provide valid First Name").should("exist");
        cy.get("#password").type("Sathwik@1719");
        cy.contains("Please provide valid Last Name").should("exist");
    });
});