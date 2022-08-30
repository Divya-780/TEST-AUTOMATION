//Coach shall be able to filter through the student column
describe('Coach shall be able to filter through the student column',function(){
    it('Coach shall be able to filter through the student column',function(){
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        cy.contains('Activity').click();
        cy.get('.p-column-filter ').first().click()
        cy.get('.p-column-filter-matchmode-dropdown ').click()
        cy.get('.p-dropdown-item').eq(4).click()
        cy.get('p-columnfilterformelement.ng-tns-c80-5').type('sowbhagya lakshmi')
        cy.contains('Apply').click()        
    })
})