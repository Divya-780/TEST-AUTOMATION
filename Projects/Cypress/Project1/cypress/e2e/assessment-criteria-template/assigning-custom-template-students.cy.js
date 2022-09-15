describe("Assigning Custom template to the students", function () {
  it("Coach shall be able to assign a custom template based on the template level", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    //Access the Assessment criteria
    cy.get('a[href*="/user/assessment-template"]').click({ force: true });
    cy.wait(2000);
    cy.get(".fa-clone").first().click();
    cy.get(".form-control").type("template1");
    cy.get(".form-select").select("Beginner").should("have.value", "Beginner");
    cy.wait(3000);
    cy.get('input[type="checkbox"').eq(3).check({ force: true });
    cy.get('input[type="checkbox"').eq(5).check({ force: true });
    cy.get(".fa-pencil").eq(2).type("0");
    cy.get(".fa-pencil").eq(4).type("0");
    cy.get(".btn").click();
    cy.wait(2000);
    //Students in the group
    cy.contains("Groups").click({ force: true });
    cy.wait(4000);
    cy.get(".text-capitalize").eq(1).click();
    //Select classwork
    cy.get("#p-tabpanel-1-label").click();
    //Select New Assignment
    cy.contains("New Assignment").click({ force: true });
    cy.get(".form-select").first().select("cypress");
    cy.get("#assignedDate").click();
    cy.get(".p-datepicker-today ").click();
    cy.wait(2000);
    cy.get("#dueDate").click();
    cy.get(".p-datepicker-today").click();
    cy.get(".p-datepicker-today ").click();
    cy.get(".form-select").eq(1).select("Beginner");
    cy.get(".form-select").eq(2).select("palu");
    cy.get(".p-multiselect").click();
    cy.wait(4000);
    cy.get(".p-multiselect-filter").first().click();
    cy.get(".p-multiselect-item").last().click();
    cy.wait(2000);
    cy.get(".p-dialog").contains("Add").click();
    cy.wait(2000);
    //-- VALIDATION --//
    cy.contains("cypress").should("exist");
    cy.wait(1500);

    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
