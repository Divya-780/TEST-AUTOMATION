//User shall be able to access the assigned lesson plan under Assignment tab
describe('User shall be able to access the assigned lesson plan under Assignment tab', function () {
    it(' User shall be able to access the assigned lesson plan under Assignment tab', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Assignments').trigger('mouseover');
        cy.contains('Speeches').trigger('mouseenter',{force: true})
        cy.contains('Traveling').click({force: true}) 
    })
})