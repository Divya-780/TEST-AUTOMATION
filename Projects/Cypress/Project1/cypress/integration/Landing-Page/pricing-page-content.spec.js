describe('Test "Pricing" links on speechcoach website', function () {
  it('Verify that "Pricing" link is present on speechcoach website and navigates correctly', function () {
    cy.wait(2000);
    let url = Cypress.config().baseUrl;
    cy.visit(url);

    //Naviagting to Pricing page
    cy.contains("Pricing").click();
    cy.url().should("contain", "pricing_plan");
    cy.contains("Pricing").should("exist");

    //Content Verifying
    cy.get(".card").should("have.length", 3);

    //BASIC PLAN CONTENT
    cy.get(".card").eq(0).contains("Basic Plan").should("exist");
    cy.get(".card").eq(0).contains("$19.00").should("exist");
    cy.get(".card").eq(0).contains("Monthly").should("exist");
    cy.get(".card").eq(0).contains("1").should("exist");
    cy.get(".card").eq(0).contains("Individual Practice").should("exist");
    cy.get(".card").eq(0).contains("Specialized Training").should("exist");
    cy.get(".card").eq(0).get(".fa-times-circle").should("exist");
    cy.get(".card").eq(0).contains("Analytics").should("exist");

    //PREMIUM PLAN CONTENT-MONTNHLY
    cy.get(".card").eq(1).contains("Premium Plan").should("exist");
    cy.get(".card").eq(1).contains("$39.00").should("exist");
    cy.get(".card").eq(1).contains("Monthly").should("exist");
    cy.get(".card").eq(1).contains("1").should("exist");
    cy.get(".card").eq(1).contains("Individual Practice").should("exist");
    cy.get(".card").eq(1).contains("Specialized Training").should("exist");
    cy.get(".card").eq(1).contains("Analytics").should("exist");

    //PREMIUM PLAN CONTENT-QUARTERLY
    cy.get(".card").eq(2).contains("Premium Plan").should("exist");
    cy.get(".card").eq(2).contains("$99.00").should("exist");
    cy.get(".card").eq(2).contains("Quarterly").should("exist");
    cy.get(".card").eq(2).contains("1").should("exist");
    cy.get(".card").eq(2).contains("Individual Practice").should("exist");
    cy.get(".card").eq(2).contains("Specialized Training").should("exist");
    cy.get(".card").eq(2).contains("Analytics").should("exist");

    //Get Started buttons are working or not-Basic plan
    cy.get(".card").eq(0).contains("Get Started").click();
    cy.url().should("contain", "signup");
    cy.go("back");

    //Get Started buttons are working or not-Premium plan-Monthly
    cy.get(".card").eq(1).contains("Get Started").click();
    cy.url().should("contain", "signup");
    cy.go("back");

    //Get Started buttons are working or not-Premium plan -Quarterly
    cy.get(".card").eq(2).contains("Get Started").click();
    cy.url().should("contain", "signup");
    cy.go("back");
  });
});
