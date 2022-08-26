//Profile settings
describe('Profile settings', function () {
    it('An org admin shall be able to update the profile info.', function () {
    //login with org admin credentials
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();        
    cy.get('#email').type('sowbhagya3696+4org@gmail.com');
     cy.get('#password').type('boulder');
     cy.get('form').submit()
     cy.wait(2000)
     *cy.get('.toggle-icon.bx').click()
     //got to Profile 
     cy.get('.user-img').click()
     cy.contains('Profile').click()
     cy.wait(4000)
     cy.get('.toggle-icon > .bx').click()
     cy.get('.col-sm-9 > .form-control').eq(3).clear().type('7386151719')
     cy.contains('Save Changes').click()
     //VALIDATION
     cy.contains('Profile Saved Successfully.')

    })
})