//Edit the group
describe('Edit the group',function(){
    it('Coach shall be able to edit the existing group',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
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
    cy.contains('Edit').click();
    cy.get('#name').clear().type('sowji');
    cy.get('#level').select('Beginner').should('have.value','Beginner');
    cy.get('.p-dialog-footer > .btn').click();
    //VALIDATION
    cy.contains('sowji');  
    })
})