//Coach shall get an error message while deleting if the group still have students associated.
describe('Coach shall get an error message while deleting if the group still have students associated.',function(){
    it('Coach shall get an error message while deleting if the group still have students associated.',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(4000);
    cy.get('#dropdownOne').click();
    cy.wait(1000)
    cy.contains('Delete').click();
    cy.get('.p-dialog-footer > .btn-secondary').click()
    
    cy.contains('Unable to delete group. Please remove all the students, assignments associate with the group and try.');  
    })
})