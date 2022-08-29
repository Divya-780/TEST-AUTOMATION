describe(' Test "Sign Up" link is working on speechcoach website', function () {
  it('Verify that "Sign Up" link is present on speechcoach website and navigates correctly', function () {
    //"Sign Up" form is present
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign Up").click();
    //Sign Up form is displayed correctly
    cy.url().should("contain", "signup");
    //-VALIDATION--//
    cy.get(".btn-secondary").should("contain", "Register");
  });
});
