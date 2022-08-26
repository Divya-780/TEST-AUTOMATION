//Dashboard view
describe('Dashboard view.', function () {
    it(' A quick dashboard view for an org admin', function () {
    cy.wait(1000) 
    //login with org admin credentials
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();        
    cy.get('#email').type('sowbhagya3696+4org@gmail.com');
     cy.get('#password').type('boulder');
     cy.get('form').submit()
     //dashboard view is presented 
    cy.url('https://dev02.speechpundit.com/org-admin/dashboard')
    })
})