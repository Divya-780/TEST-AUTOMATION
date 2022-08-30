//Student view- goal setting.
describe('Student view- goal setting', function () {
    it('Student shall be able to see the goal setting information on the Activity page.', function () {
        //sigin as coach.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();        
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //visit goal setting  url.
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/goalsetting"]').click({force: true});
        cy.get('.p-inputswitch').first().click()
        cy.get('.ng-untouched ').last().click()
        cy.get('.p-inputswitch').first().click()



    })
   /* it('student can visible the goal setting.', function () {
        //sigin as student.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();        
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //the goal setting is shown on the left side menu bar, along with the target achieved for that week.
        cy.contains('Target Met')
        //VALIDATION
        cy.contains('Activity');
    })*/
    
})