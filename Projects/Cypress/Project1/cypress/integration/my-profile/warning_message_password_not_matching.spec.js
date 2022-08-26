//Warning message if the current, new and confirmed password are not matching
describe('Warning message if the current, new and confirmed password are not matching', function () {
    it('Warning message if the current, new and confirmed password are not matching ', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();   
        cy.get('#email').type('sowbhagya3696+27@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000)
        cy.get('.nav-item').invoke('show');
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/profile"]').click({force: true});
        cy.contains('Change Password').click()
        cy.get('#oldPassword').type('Sathwik@1719');
        cy.get('#newPassword').type('Sathwik@1719');
        cy.get('#confirmPassword').type('Sowji@1719')
        cy.get('.btn').click()
        //VALIDATION
        cy.contains('Passwords do not match');
    })
})