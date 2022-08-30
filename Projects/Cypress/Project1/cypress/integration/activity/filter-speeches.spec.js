//User shall be able to filter the speeches (assigned lesson, Impromptu and ad hoc recorded videos)
describe('User shall be able to filter the speeches (assigned lesson, Impromptu and ad hoc recorded videos)', function () {
    it(' User shall be able to filter the speeches (assigned lesson, Impromptu and ad hoc recorded videos)', function () {
        //Display for each speech in activity page.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Validation - After sign in, It should redirect to the activity page
        cy.url().should("contain", '/activity/history');

        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-item ').eq(0).click()
        // Validation - Should have 5 normal speeches
        // cy.get('.dropdown').its('length').should('eq',5);
        cy.wait(4000)

        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-item ').eq(1).click()
        // Validation - Should have 25 Practice speeches
        // cy.get('.dropdown').its('length').should('eq',25);
        cy.wait(4000)


        cy.get('.p-dropdown-label').click()
        cy.get('.p-dropdown-item ').eq(2).click()
        // Validation - Should have 5 Impromptu speeches
        // cy.get('.dropdown').its('length').should('eq',5);
        cy.wait(4000)


    })
})