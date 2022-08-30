//Goal setting - enable
describe('Goal setting - enable', function () {
    it('Coach shall be able to enable the goal setting.', function () {
        //sigin as coach.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+202@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        //visit goal setting  url.
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/goalsetting"]').click({force: true});
        cy.get('.ng-untouched ').last().click()
        //VALIDATION
        cy.contains('Goal Setting');
    })
})