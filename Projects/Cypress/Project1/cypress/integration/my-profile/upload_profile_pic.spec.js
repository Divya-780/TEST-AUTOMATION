//User shall be able to upload the profile pic.
describe('User shall be able to upload the profile pic.', function () {
    it(' User shall be able to upload/change the profile pic on my profile page.', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000);
        cy.get('.nav-item').invoke('show');
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/profile"]').click({force: true});
        cy.get('.p-button-label').click();
        cy.get('form').submit();
        //VALIDATION
        cy.contains('Saved Successfully.')
    })
})