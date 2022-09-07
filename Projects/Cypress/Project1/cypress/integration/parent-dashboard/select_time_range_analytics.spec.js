describe('Parent shall be able to select the time range to see the analytics ', function () {
    it('select time range at analytics page ', function () {
     //login as a valid user.
     let url = Cypress.config().baseUrl;   
     cy.visit(url);
     cy.contains('Sign in').click();    
     cy.get('#email').type('sowbhagya3696+aug_15p@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
     cy.wait(4000)
     //click on Analytics
     cy.get('.nav-link').eq(2).click()
     //-- VALIDATION-- // 
     cy.url().should('contain', 'analytics');
    //  Select time range
     cy.get('.form-select').eq(0).select('This Week')
    //  validation
     cy.contains('Weekly Performance').should("exist")

     cy.get('.form-select').eq(0).select('Last Week')
    //  validation
     cy.contains('Weekly Performance').should("exist")

     cy.get('.form-select').eq(0).select('Last Month')
    //  validation
     cy.contains('Monthly Performance').should("exist")

     cy.get('.form-select').eq(0).select('Last 5 Speeches')
     //  validation
     cy.contains('Last 5 Speeches Performance').should("exist")
     
     cy.get('.form-select').eq(0).select('Custom Range')
    //  validation
    cy.get('#range')




    })
   })