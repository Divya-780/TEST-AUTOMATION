//User shall NOT be able to login by providing invalid username
describe('User shall NOT be able to login by providing invalid username', function () {
    it('login fails with invalid username',function (){
        //Sign in with invalid credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();    
        cy.get('#email').type('sowbhagya3696+@gmail');
        cy.get('#password').type('Sathwik@119');
        cy.get('form').submit();
        //-- VALIDATION --//
        // For invalid email(without .com), the submit button should be disabled
        cy.get('.btn').should('be.disabled')

    })
    })