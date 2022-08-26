//Adding a coach
describe('Adding a coach', function () {
    it(' An org admin shall be able to add a new coach and view all existing coaches in the org.', function () {
        //login with org admin credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();           
        cy.get('#email').type('sowbhagya3696+4org@gmail.com');
        cy.get('#password').type('boulder');
        cy.get('form').submit()
        cy.wait(4000)
        cy.get('.menu-title').eq(1).click()
        cy.get('.btn-group').click()
        cy.wait(2000)
        var date = new Date();
        var fname = "autouser";
        var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
        var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
        var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
        cy.get('#firstName').type(fname)
        cy.get('#lastName').type(yyyymmdd.concat(hhmmss));
        cy.get('#email').type(email);
        cy.get('#age').type(21)
        cy.get('#female').click()
        cy.get('.modal-footer > .btn').click()
        //VALIDATION
        cy.contains('New coach added successfully')
        //view all existing coaches in the org
        cy.url('https://dev02.speechpundit.com/org-admin/coaches')

    })
})