//user shall be able to sign up as coach.
describe('user shall be able to sign up as Coach', function () {
    it(' Verify that user shall be able to sign up as Coach by providing acceptable values for all required fields.', 
    function () {
    //-- ACTION --//   
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign Up').click();    
    var date = new Date();
    var fname = "autouser";
    var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
    var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
    var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
    cy.get('#email').type(email);
    cy.get('#firstName').type(fname);
    cy.get('#lastName').type(yyyymmdd.concat(hhmmss));
    cy.get('#password').type('Sathwik@1719');
    cy.get('[Value="Coach"]').check({force: true});//sign up as Coach.
    cy.get('#acceptTerms').click()
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.url().should("contain", 'verify_email');
    })   
})