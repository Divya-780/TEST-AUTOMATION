//After a successful payment, user shall be directed to Speechpundit
describe('After a successful payment, user shall be directed to Speechpundit', function () {
    it('After the successful payment, user shall be directed to Speechpundit website and start recording. ', 
    function () {
        // Login with valid credentials
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();           
        cy.get('#email').type('applinetester+2@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        //After successful payment 
       cy.visit('https://dev02.speechpundit.com/payment/#/')
       //user shall be directed to Speechpundit website and start recording.
       cy.wait(2000)
       cy.contains('Record').click()
       cy.get('.rec-btn').click()   
    })
})