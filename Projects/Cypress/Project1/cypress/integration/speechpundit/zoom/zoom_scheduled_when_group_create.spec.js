//zoom is scheduled when a group is created.
describe('zoom is scheduled when a group is created.', function () {
  it('zoom is scheduled when a group is created.', function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign in').click();
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000)
    //visit group 
    cy.get('.nav-item').invoke('show')
    cy.get('[routerlink="/user/groups"]').click({force: true});
    cy.wait(4000)
    //Create new group by clicking "Create" button
    cy.get('.btn').first().click()
    //Provide all the mandatory fields information. 
    cy.get('#name').type('tester')
    cy.get('#level').select('Beginner').should('have.value', 'Beginner');
    cy.wait(2000)
    // cy.get('.form-label').eq(1).click()
    cy.contains('Start Time')
    cy.get('.p-calendar').eq(0).clear().type('12:00 AM')
    //  cy.get("ng-tns-c66-11").type('11:59 PM',{force: true})
    cy.get('.p-inputtext').eq(2).clear({ force: true }).type('11:59 PM')
   // cy.contains('Class Recurrence').trigger('mouseover')
    cy.wait(2000);
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(192).should('not.be.disabled')
    cy.wait(4000)
    //cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').last().rigthclick({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1433).click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1434).click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').last().click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1438).click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1437).click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1436).click({force: true})
    cy.get('button.btn.btn-circle.btn-default.ng-star-inserted').eq(1435).click({force: true})
    cy.get('#startDate').click()  
    cy.get('.p-datepicker-today').first().click()
    cy.get('#endDate').type('08/09/2059', { force: true });
    //click on Add button
    cy.get('.btn').last().click()  
    //select proceed
    cy.contains('Proceed').click()
   //when you hover on zoom icon you can see the group schedule.
   cy.get('.nav-link').should("be.visible");
   cy.wait(4000)
   cy.get('.nav-link').invoke('show')
   cy.get("#menu").click()
    //cy.get('.nav-link img').eq(1).last().trigger('mouseover').click()
   
  
  })
})