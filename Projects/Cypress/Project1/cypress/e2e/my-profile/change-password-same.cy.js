//Warning message if the current, new and confirmed password are not matching in my profile
describe("My Profile, Change Password", function () {
  it(' User shall be directed to the profile page by clicking "My Profile".Warning message if the current, new and confirmed password are same ', function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;
    // cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sravani+coach@applines.com");
    cy.get("#password").type("Sravani@364");
    cy.get("form").submit();
    cy.wait(3000);
    cy.get(".nav-item").invoke("show");
    cy.get('[routerlink="/user/groups"]').click({ force: true });
    cy.get(".nav-item").invoke("show");
    cy.get('[routerlink="/user/profile"]').click({ force: true });
    // Warning Message if current and new password was same
    cy.contains("Change Password").click();
    cy.get("#oldPassword").type("Sravani@364");
    cy.get("#newPassword").type("Sravani@364");
    cy.get("#confirmPassword").type("Sravani@364");
    cy.get(".btn").click();
    //Validation
    cy.contains("New password should not be same as old password").should(
      "exist"
    );
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
