//Coach shall be able to pick certain number of days for target practice
describe('Coach shall be able to pick certain number of days for target practice', function () {
    it('Coach shall be able to pick certain number of days for target practice', function () {
        //sigin as coach.
        let url = Cypress.config().baseUrl; //accesing baseUrl
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
        cy.get('.btn-circle').eq(6).click()
        cy.get('.btn-circle').eq(10).click()
        //VALIDATION
        cy.contains('Goal Setting');
    })
})