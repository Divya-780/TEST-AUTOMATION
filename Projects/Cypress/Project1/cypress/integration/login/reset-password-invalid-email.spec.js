//Reset password with invalid email
describe('user shall not be able to proceed with invalid email', function () {
    it('Verify that invalid user able to reset password or not  ', function () {
        //For the invalid email, Error will be occured and couldn't send an email
        cy.visit("https://dev02.speechpundit.com/forgot_password")
        cy.get('#email').type('sowbhagya3696+@gmail.com');
        cy.get('form').submit();

        // VALIDAITON - Error message should be displayed
        cy.contains('Error occurred. Please contact support.')

    })
})


