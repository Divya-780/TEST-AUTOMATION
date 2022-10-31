//Add group details
describe("Add group details", function () {
  it("Coach shall be able to create the group by adding all the required details such as group name, level, class time and duration and class recurrence.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("tejasri+coach@applines.com");
    cy.get("#password").type("Speechpundit@123");
    cy.get("form").submit();
    cy.wait(4000);
    //visit group
    cy.get('a[href*="/user/groups"]').click({ force: true });
    cy.wait(4000);
    //Create new group by clicking "Create" button
    cy.get(".btn").first().click();
    //Provide all the mandatory fields information.
    cy.get("#name").type("tester");
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
    //click Add
    cy.get(".btn").last().click();
    //VALIDATION
    cy.contains("tester");

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
