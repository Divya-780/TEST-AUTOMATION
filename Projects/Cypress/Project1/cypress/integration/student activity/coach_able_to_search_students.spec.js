//Coach shall be able to search the students.
describe('Coach shall be able to search the students.',function(){
    it('Coach shall be able to search the students.',function(){
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        cy.contains('Activity').click();
        cy.get('[psortablecolumn="userName"]').click()
        cy.get('.p-inputtext').type('sowbhagya lakshmi')
    })
    })