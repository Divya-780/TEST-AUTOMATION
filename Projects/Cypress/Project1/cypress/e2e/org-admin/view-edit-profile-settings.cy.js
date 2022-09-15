//Profile settings
describe('Profile settings', function () {
  it('An org admin shall be able to update the profile info.', function () {
    //login with org admin credentials
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4org@gmail.com');
    cy.get('#password').type('boulder');
    cy.get('form').submit()
    cy.get('.bx').first().click()
    //got to Profile 
    cy.get('.user-img').click()
    cy.contains('Profile').click()
    cy.get('.bx').first().click()
    cy.wait(2000)
    cy.get('.col-sm-9').eq(0).click().clear().type('tester')
    cy.get('.col-sm-9').eq(1).click().clear().type('cypress')
    cy.get('.col-sm-9').eq(3).click().clear().type('9848032919')
    cy.get('.col-sm-9').eq(4).click().clear().type('Applines')
    cy.get('.col-sm-9').eq(5).click().clear().type('A company’s mission, values, ethics, and friendly environment.')
    cy.get('.btn').first().click()
   //VALIDATION
  cy.contains('Profile Saved Successfully.') 
})
})