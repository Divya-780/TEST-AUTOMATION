describe('Download a speech from activity page', function () {
    it('Verify that user shall be able to download a speech from activity page', function () {
        //Download a speech from activity page.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+24@gmail.com');
        cy.get('#password').type('Sathwik@151719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.wait(2000)
        cy.get('#dropdownOne').click();
        cy.contains('Download').click();
        cy.wait(2000);
        //speech has been downloaded in local floder.
     })
})