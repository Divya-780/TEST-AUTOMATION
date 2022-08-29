describe('User shall NOT be able to sign up if not accepting terms and conditions', function () {
    it('User shall NOT be able to sign up if not accepting terms and conditions ', 
    function () {
    //-- ACTION --//   
    let url = Cypress.config().baseUrl; //accessing baseUrl
    cy.visit(url);
    //Redirecting to signup page
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
    //Accept terms check box is not selected 
    cy.get('#acceptTerms')
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.contains('Please accept the Terms & Conditions to register').should('exist');
    })   
})