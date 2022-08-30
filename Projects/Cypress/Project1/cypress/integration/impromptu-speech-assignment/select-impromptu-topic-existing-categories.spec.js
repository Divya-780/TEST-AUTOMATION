//selecting the impromptu topic from existing categories
describe('selecting the impromptu topic from existing categories', function () {
    it('User(coach) shall be able to assign the impromptu speech topics from the existing categories.', function () {
        // visit signin url.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();        
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000)
        // visit lesson plan.
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="user/lessonplan"]').click({force: true});
        cy.get('#p-tabpanel-1-label').click()
        cy.get('.btn').eq(1).click()
        //Assigning the Impromptu speech topics
        cy.get('#p-accordiontab-1').click()
        cy.get('.form-check-input').eq(2).click()
        cy.get('.form-check-input').eq(3).click()
        cy.get('.p-button-label').click()
        //VALIDATION
      cy.contains('Why is it important to consume unbiased media?')
    })
    

    
})