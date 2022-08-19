//selecting and dis-selecting the questions from the list
describe('selecting and dis-selecting the questions from the list', function () {
    it('selecting and dis-selecting the questions from the list', function () {
        // visit signin url.
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        cy.contains('Sign in').click();        
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        // visit lesson plan.
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="user/lessonplan"]').click({force: true});
        cy.contains('Impromptu Topic')
        cy.wait(4000)
        //select or dis-select the questions by the toggle on/off option
        cy.get('.col-sm-3').eq(1).click()
        cy.get('.col-sm-3').eq(2).click()
        //VALIDATION
        cy.url('https://dev02.speechpundit.com/user/lessonplan')
    })
})
