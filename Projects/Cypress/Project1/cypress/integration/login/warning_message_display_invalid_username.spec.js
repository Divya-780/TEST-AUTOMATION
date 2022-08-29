//Warning message shall be displayed when invalid characters are provided for username
describe('Warning message shall be displayed when invalid characters are provided for username', function () {
    it('login fails with invalid username',function (){
        //Sign in with invalid credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();    
        cy.get('#email').type('****sowbhagya3696+@gmail.com');
        cy.get('#password').type('Sathwik@119');
        cy.get('form').submit();

        //-- VALIDATION - The error code should be displayed
        cy.contains('Invalid Credentials');


    })
    })