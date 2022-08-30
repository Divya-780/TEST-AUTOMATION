describe('"No data available" for the new user', function () {
    it('For a new user all the charts on the analytics page will show "No data available" ', function () {
    //login as a valid user.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+303@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.get('[routerlink="/activity/analytics"]').click()
    //Different charts and metrics
    cy.contains('Weekly Performance')
    //-- VALIDATION-- //
    cy.contains('No data to display')
})
})