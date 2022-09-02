//Coach should not allow to give scores which are not matched to the assigned weight 
describe("Coach giving invalid scores irrespective of the weight", function() {
    it("Coach giving invalid scores.", function() {
        // visit signin url.
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains("Sign in").click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get("form").submit();
        cy.contains("Student Activity").click()
        cy.wait(4000)
        cy.get('.p-shadow-4').first().click()
        cy.get('.fa-pencil').eq(0).click()
        cy.get('.p-inputtext').clear().type('100')
        cy.get('.btn').click()
        // Validation
        cy.contains('Score should not be greater than Weight').should("exist")
      
    });
});