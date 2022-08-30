describe('Assigning Custom template to the students',function(){
    it('Coach shall be able to assign a custom template based on the template level',function(){
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;   
    cy.visit(url);
    cy.contains('Sign in').click();    
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show');
    cy.get('[routerlink="/user/assessment-template"]').click({force: true});
    cy.get('.fa-clone').click()
    cy.get('.form-control').type('teju');
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.wait(3000)
    cy.get('input[type="checkbox"').eq(3).check({force: true});
    cy.get('input[type="checkbox"').eq(5).check({force: true});
    cy.get('.fa').eq(2).type('0');
    cy.get('.fa').eq(4).type('0');
    cy.get('.btn').click()
    //Students in the group
    cy.contains('Groups').click({force: true});
    cy.wait(1000)
    cy.get('.mb-4').eq(1).click();
    cy.contains('teju').click();
    //Select classwork
    cy.contains('Classwork').click();
    //Select New Assignment 
    cy.contains('New Assignment').click({force: true});
    cy.get('.form-select').first().select('cypress');
   cy.get('#assignedDate').click();
   cy.get(".p-datepicker-today ").click();
   cy.wait(4000)
    cy.get('#dueDate').click();
    cy.get('.p-datepicker-today').click()
    cy.get(".p-datepicker-today ").click();
    cy.get('.form-select').eq(1).select('Beginner');
    cy.get('.form-select').eq(2).select('palu');
    cy.get('.p-multiselect').click()
    cy.wait(4000)
    cy.get('.p-multiselect-filter').first().click();
    cy.get('.p-multiselect-item').last().click()
    cy.get('.p-dialog-footer > .btn-secondary').click();
    //-- VALIDATION --// 
   cy.contains('cypress');
   cy.wait(1500)
})
})
// /user/assessment-template