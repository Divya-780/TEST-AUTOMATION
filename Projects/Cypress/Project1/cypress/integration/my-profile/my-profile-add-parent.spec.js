//User shall be able to upload the profile pic.
describe('User shall be able to upload the profile pic.', function () {
    it(' User shall be able to upload/change the profile pic on my profile page.', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sravani@applines.com');
        cy.get('#password').type('Sravani@364');
        cy.get('form').submit();
        cy.wait(3000);
        cy.get('.nav-item').invoke('show');
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/profile"]').click({force: true});
        cy.get('.card-header > .col-6 > .btn').click()
        // cy.get('#firstName').type('parent');
        // cy.get('#lastName').type('first parent');
        // var date = new Date();
        // var fname = "autouser";
        // var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        // var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        // var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        // cy.get(':nth-child(3) > #email').type(email);
        // cy.get('.p-dialog-footer > .btn-secondary').click();
        
        //Validation
        cy.contains('You are Already associated to Parent')

    })
})