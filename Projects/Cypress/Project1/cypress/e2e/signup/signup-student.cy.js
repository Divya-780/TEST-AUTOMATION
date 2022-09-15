describe('user shall be able to sign up as Student', function () {
  it('email to be sent to user to confirm account sign up', function () {
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign Up').click();    
    var date = new Date();
    var fname = "autouser"
    var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay())
    var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds())
    var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com")
    cy.get('#email').type(email);
    cy.get('#firstName').type(fname);
    cy.get('#lastName').type('lname');
    cy.get('#password').type('Sathwik@1719');
  //-- SIGN UP AS A STUDENT --//   
    cy.get('[Value="Student"]').check({ force: true });
    cy.get('#acceptTerms').click();
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.url().should("contain", 'verify_email');
  })
})