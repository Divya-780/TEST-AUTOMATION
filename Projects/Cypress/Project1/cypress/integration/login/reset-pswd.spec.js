//Test Case-MYS-T11.
//Reset password.
describe('existing user shall be able to reset password', function () {
    it('Verify that an existing user shall be able to reset password  ', function () {
        //After click on forget password.a link will be sent to registered mail then change password.
        cy.visit("https://dev02.speechpundit.com/forgot_password")
        cy.get('#email').type('sowbhagya3696+29@gmail.com');
        cy.get('form').submit();
        cy.wait(1000)

        // VALIDATION - The mail will be send to the entered emial.
        cy.contains('Please check your email for password reset instructions.')

        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();  
        //Sign in with new password
        cy.get('#email').type('sowbhagya3696+29@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();

     

    })
})


