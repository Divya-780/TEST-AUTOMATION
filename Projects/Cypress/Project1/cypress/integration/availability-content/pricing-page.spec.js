describe('Test "Pricing" links on speechcoach website', function () {
    it('Verify that "Pricing" link is present on speechcoach website and navigates correctly',function(){4
        //"Pricing" form is present.
        cy.wait(2000)
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Pricing').click();
        cy.contains('Get Started').click();
        //Pricing information is displayed correctly.
        cy.url().should("contain", 'signup');  
            
    })
})