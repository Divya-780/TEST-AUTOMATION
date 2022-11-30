//Assigning vocal warm up audio file
describe("Coach shall be able to listen default audio files", function () {
    it("Verify that coach able to play the audios before assigning to the student", function () {
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

      //Playing 1st audio file
      cy.get('[name="vocalId"]').eq(0).click({force: true});
      cy.get('.btn-secondary').eq(4).click({force:true});
      cy.wait(10000);
      cy.get('.btn').eq(4).click({force:true});


      //Playing 2nd audio files
      cy.get('[name="vocalId"]').eq(1).click({force: true});
      cy.get('.btn-secondary').eq(5).click({force:true});
      cy.wait(10000);
      cy.get('.btn').eq(5).click({force:true});

      //Playing 3rd audio file
      cy.get('[name="vocalId"]').eq(2).click({force: true});
      cy.get('.btn-secondary').eq(6).click({force:true});
      cy.wait(10000);
      cy.get('.btn').eq(6).click({force:true});

      //Playing 4th audio file
      cy.get('[name="vocalId"]').eq(3).click({force: true});
      cy.get('.btn-secondary').eq(7).click();
      cy.wait(10000);
      cy.get('.btn-secondary').eq(7).click();
    
      //--TEAR DOWN --//
      cy.get(".fa-sign-out-alt").click({ force: true });
    });
  });
  