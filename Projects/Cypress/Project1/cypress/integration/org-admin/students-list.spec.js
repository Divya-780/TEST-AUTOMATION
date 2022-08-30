//Students list
describe('Students list', function () {
    it(' An org admin shall be able to view list of all students and associated coaches in the org.', function () {
        cy.wait(2000)
        //login with org admin credentials
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();           
        cy.get('#email').type('sowbhagya3696+4org@gmail.com');
        cy.get('#password').type('boulder');
        cy.get('form').submit()
        cy.wait(4000)
        //click on Students tab on left side menu bar
        cy.get('.menu-title').eq(2).click()
        //VALIDATION
        cy.url('https://dev02.speechpundit.com/org-admin/users')
    })
})