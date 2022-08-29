//Warning message shall be displayed when invalid characters are provided for password
describe('Warning message shall be displayed when invalid characters are provided for password', function () {
    it('login fails with invalid password',function (){
        //Sign in with invalid credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();    
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@119');
        cy.get('form').submit();
        //-- VALIDATION - For invalid credentials error code should be displayed 
        cy.contains('Invalid Credentials');

    })
    })
         