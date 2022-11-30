//Assigning vocal warm up audio file
describe("Assigning vocal warmup to the student", function () {
    it("Verify that coach able to assign vocal warm up audio to the student", function () {
      let url = Cypress.config().baseUrl;
      cy.visit(url);
      cy.contains("Sign in").click();
      cy.get("#email").type("divya+coach1@applines.com");
      cy.get("#password").type("Sonu@1234");
      cy.get("form").submit();
      //navigate to groups 
      cy.contains("My Groups").click();
      cy.get('.text-capitalize').eq(0).click();
      cy.get('#p-tabpanel-3-label').click();
      cy.contains('New Assignment').click();
      //Navigating to Vocal assignment tab
      cy.get('#p-tabpanel-8-label').click();

      //Selecting default audio file
      cy.get('[name="vocalId"]').eq(0).click({force: true});
      cy.get('.btn-secondary').eq(4).click({force:true});
      cy.wait(10000);
      cy.get('.btn').eq(4).click({force:true});
        
      cy.get('.p-calendar > #assignedDate').eq(1).click()
      cy.wait(1000)
      cy.get('.p-datepicker-today').click()
      cy.wait(1000);
      cy.get(".p-calendar > #dueDate").eq(1).click({force:true});
      cy.get(".p-datepicker-today ").click();
      cy.wait(1000);
      //Selecting students 
      cy.get('.p-multiselect-label').eq(1).click()
      cy.get('.p-multiselect-header > .p-checkbox > .p-checkbox-box').click()
      cy.get(".p-multiselect-close").click();
      
      cy.get('#p-tabpanel-8 > .float-right').click()
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
  