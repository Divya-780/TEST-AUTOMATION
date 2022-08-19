//Copy the group
describe('Copy the group',function(){
    it('Coach shall be able to copy the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+202@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000)
    //Open the group.
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(3000)
    //Click 3 dots on top right corner. 
    cy.get('#dropdownOne').click();
    cy.contains('Archive').click();
    cy.get('.p-dialog-footer .btn-secondary').click();
    //VALIDATION   
    cy.url().should("contain", 'groups');
    })
})