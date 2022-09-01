//User shall get an error message if any field is missing the required information.
describe('User shall get an error message if any field is missing the required information.', function () {
    it('User shall get an error message if any field is missing the required information.', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000)
        cy.get('.nav-item').invoke('show');
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/profile"]').click({force: true});
        // User shall be able to view and edit the profile information here.
        cy.get('#fname').clear().type('challa')
        cy.get('#lname').clear()
        cy.get('#email');
        cy.get('#phone').clear().type(9874563217);
        //Click Save Profile after making changes.
        cy.contains('Save Profile').should('be.disabled');
        //VALIDATION
        cy.contains('Last name required');
    })
})
