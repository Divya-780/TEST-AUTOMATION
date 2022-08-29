//Test Case-MYS-T10.
//login with invalid credentials.
describe('Testing login with invalid credentials', function () {
it('login fails with invalid password',function (){
    //Sign in with invalid credentials
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@119');
    cy.get('form').submit();
    //-- VALIDATION --//
    // For the invalid password, it should show error code
    cy.contains('Invalid Credentials');
})
})
