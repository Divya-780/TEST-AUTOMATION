describe('test "Sign In" links on speechcoach website', function () {
    it(' Verify that "Sign In" link is present on speechcoach website and navigates correctly',function(){
    //"Sign In" form is present.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);     //verify that corresponding form elements are present
    cy.contains('Sign in').click();
    cy.contains('Welcome');
    cy.contains('Email*');
    cy.contains('Password*');
    cy.contains('Sign up');
    cy.contains('Forgot Password');
    cy.contains('Privacy Policy');
    //Sign In form is displayed correctly
    cy.url().should("contain", 'signin');
    
    })
})