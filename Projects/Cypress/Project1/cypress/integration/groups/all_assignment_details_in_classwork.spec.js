//Coach shall be able to see all assignment details under All assignments page in Classwork
describe('Coach shall be able to see all assignment details under All assignments page in Classwork',function(){
    it('Coach shall be able to see all assignment details under All assignments page in Classwork',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit group url
    cy.get('.nav-item').invoke('show')
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(2000)
    cy.get('.text-capitalize').eq(2).click()
    cy.get('#p-tabpanel-1-label').click()
    cy.contains('student')
})
})