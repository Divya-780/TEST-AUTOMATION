describe('Adding new students to the group.',function(){
    it('Coach shall be able to add new students to the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit group 
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(3000);
    //Click "Add new student
    cy.get('.text-capitalize').eq(2).click();
    cy.get('.px-5').click();
    cy.get('#firstName').type('sowbhagya',{force: true});
    cy.get('#lastName').type('UI',{force: true});
    cy.wait(1000)
    //Provide first name, last name and email id of the newly added student.
    var date = new Date();
    var fname = "autouser";
    var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
    var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
    var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
    cy.get('#email').type(email);
    cy.get('.p-inputnumber-input').type('22');
    cy.get('[Value="Male"]').check({force: true});
    //click Add
    cy.get('.p-dialog-footer .btn-secondary').click()
    //VALIDATION
    cy.contains('Add New Student');
    })
})