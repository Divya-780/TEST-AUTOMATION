//User shall be able to view/edit their account details.
describe('User shall be able to view/edit their account details.', function () {
    it(' User shall be directed to the profile page by clicking "My Profile". They can view/edit  the basic info such as First Name, Last Name, phone number etc ', function () {
        //login as a valid user.
        let url = Cypress.config().baseUrl;   
        cy.visit(url);
        cy.contains('Sign in').click();   
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000)
        cy.get('.nav-item').invoke('show');
        cy.get('[routerlink="/user/groups"]').click({force: true});
        cy.get('.nav-item').invoke('show')
        cy.get('[routerlink="/user/profile"]').click({force: true});
        // User shall be able to view and edit the profile information here.
        cy.get('#fname').click();
        cy.get('#lname').click();
        cy.get('#email');
        cy.get('#phone').clear().type(9874563217);
        //Click Save Profile after making changes.
        cy.contains('Save Profile').dblclick();
        //VALIDATION
        cy.contains('Saved Successfully.');
    })
})