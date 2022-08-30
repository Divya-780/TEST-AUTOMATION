//Add an existing student to the group
describe('Add an existing student to the group',function(){
    it('Coach shall be able to add an existing student to the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit group url
    cy.get('.nav-item').invoke('show')
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(4000)
    //Click "Add new student
    cy.get('.text-capitalize').eq(2).click()
    cy.get('.mr-1').click()
    cy.get('#firstName').type('sowji')
    cy.get('#lastName').type('vajji')
    cy.contains('Search').click()
    cy.contains('No user found with that search criteria')
    cy.get('.p-toast-icon-close-icon').click()
    cy.get('#firstName').clear().type('autouser')
    cy.get('#lastName').clear()
    cy.wait(4000)
    cy.get('#email').clear()
    cy.contains('Search').click()
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn').click()
    //VALIDATION
    cy.contains('added successfully').click()
    cy.contains('tester')

    })
})