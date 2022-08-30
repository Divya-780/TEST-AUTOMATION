//Coach shall be able to use the search option to look up anything (group, student, score)
describe('Coach shall be able to use the search option to look up anything (group, student, score)', function () {
    it('Coach shall be able to use the search option to look up anything (group, student, score)', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.get('[psortablecolumn="groupName"]').click()
        cy.get('.p-inputtext').type('sathwik')
        //-- VALIDATION --//
        cy.url().should("contain", 'studentactivity');
    })
})