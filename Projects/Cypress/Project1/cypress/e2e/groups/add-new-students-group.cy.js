describe("Adding new students to the group.", function () {
  it("Coach shall be able to add new students to the group.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+goal_coach@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //visit group
    cy.get('a[href*="/user/groups"]').click({ force: true });
    cy.wait(3000);
    //Click "Add new student
    cy.get(".text-capitalize").eq(2).click();
    // cy.get(".px-5").click();
    cy.contains("Add Student").click();
    cy.get('#p-tabpanel-6-label').click()
    cy.wait(4000)
    cy.get("#firstName",{timeout:6000}).type("sowbhagya",{force: true});
    cy.get("#lastName",{timeout:60000}).type("UI",{force: true});
    cy.wait(1000);
    //Provide first name, last name and email id of the newly added student.
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
    cy.get("#email").type(email,{force: true});
   // cy.get(".p-inputnumber-input").type("22");
    cy.get('[Value="Male"]').check({ force: true });
    cy.get('#p-tabpanel-5 > .btn').click()
    //click Add
    cy.get(".p-dialog-footer .btn-secondary").click();
    // //VALIDATION
    cy.contains("Add New Student").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
