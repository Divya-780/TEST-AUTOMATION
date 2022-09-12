//Assigning the Impromptu speech topics
describe("Assigning the Impromptu speech topics", function () {
  it("Assigning the impromptu speech topics from lesson plan", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(4000);
    // visit lesson plan.
    cy.get('a[href*="user/lessonplan"]').click({ force: true });
    cy.wait(2000);
    cy.get("#p-tabpanel-1-label").click();
    cy.get(".btn").eq(1).click();
    //Assigning the Impromptu speech topics
    cy.get("#p-accordiontab-1").click();
    cy.get(".form-check-input").eq(2).click();
    cy.get(".form-check-input").eq(3).click();
    //add the custom question.
    cy.get("#p-accordiontab-0").click();
    cy.get(".btn").eq(2).click();
    cy.get("#custom").type(
      "What is the most difficult thing about English for you?"
    );
    cy.get(".p-button-label").click();
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
  it("all the selected topics are assigned to all the students of the coach.", function () {
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Assignments").trigger("mouseover");
    cy.contains("Impromptu").trigger("mouseenter", { force: true });
    cy.contains("Topic 1").click({ force: true });
    cy.get(".p-button-label").click();
    //VALIDATION
    cy.url("https://dev02.speechpundit.com/record");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
