describe('ABOUT US ', function () {
    it(' Verify that "About Us" header link is present on speechcoach website and navigates correctly', function () {
    //"About Us" form is present.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);    
    cy.contains('About Us').click();
    cy.contains('info@speechpundit.com')
    //About Us page navigates correctly.
    cy.url().should("contain", 'about_us');
    })
 })