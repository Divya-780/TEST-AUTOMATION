//User(student) shall be able to use the teleprompter feature
describe('User(student) shall be able to use the teleprompter feature', function () {
    it('User(student) shall be able to use the teleprompter feature.', function () {
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();         
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Assignments').trigger('mouseover');
        cy.contains('Speeches').trigger('mouseenter', { force: true })
        cy.get('.dropdown-item ').eq(1).click({force: true})
        //pick the assigned speech
        cy.get('.p-inputswitch-slider').click()
        cy.wait(1000)
        //turn on the teleprompter inputs
        //select the font color, font size, prompt speed, video placement etc. 
        cy.get('.p-dropdown-label').eq(1).click()
        cy.get('.p-dropdown-item').eq(2).click()
        cy.wait(1000)
        cy.get('.p-dropdown').eq(2).click()
        //preview and save the settings.
        // cy.get('[ptooltip="Preview"]').click()
        // cy.wait(1000)
        //update setting
        cy.get('[ptooltip="Update Settings"]').eq(1).click()
        cy.wait(1000)
        cy.get('[ptooltip="Update Settings"]').click()
        //click record
        cy.get('[ptooltip="Start Record"]').dblclick()
        cy.contains('Record').click()
        //VALIDATION
        cy.url().should("contain", 'record');

    })
})