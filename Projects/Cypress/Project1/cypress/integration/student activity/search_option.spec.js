//Coach shall be able to search the students.
describe('Coach shall be able to search the students.',function(){
    it('Coach shall be able to search the students.',function(){
        let url = Cypress.config().baseUrl;
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.wait(4000)
        cy.get('.p-inputtext').first().type('palu')
        cy.wait(3000)
        //-- VALIDATION --
        cy.get('.p-datatable-tbody').should('have.length',2);
        cy.get('.p-inputtext').clear()
        cy.get('.p-inputtext').first().type('Sonu Divya')
        //-- VALIDATION --
        cy.get('.p-datatable-tbody').should('have.length',1);
        cy.get('.p-inputtext').clear()
        cy.get('.p-inputtext').first().type('Video 1')
        //-- VALIDATION --
        cy.get('.p-datatable-tbody').should('have.length',1);
})
})