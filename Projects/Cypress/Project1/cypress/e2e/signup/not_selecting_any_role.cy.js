//User shall NOT be able to sign up if not selecting any role.
describe("User shall NOT be able to sign up if not selecting any role.", function () {
  it("User shall NOT be able to sign up if not selecting any role.", function () {
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
    cy.get("#email").should("be.empty");
    cy.get("#firstName").type(fname);
    cy.get("#lastName").type(yyyymmdd.concat(hhmmss));
    cy.get("#password").type("Sathwik@1719");
    cy.get("#acceptTerms").click();
    cy.get("form").submit();
    //-- VALIDATION --//
    cy.contains("Fill in all required fields").should("exist");
  });
});
