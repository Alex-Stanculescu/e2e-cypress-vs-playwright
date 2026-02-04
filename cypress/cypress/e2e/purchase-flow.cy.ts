import users from "../../../test-data/users.json";

describe("Purchase flow (Cypress)", () => {
  it("can buy one item end-to-end", () => {
    cy.login(users.standard.username, users.standard.password);

    cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click();
    cy.get(".shopping_cart_link").click();

    cy.get("[data-test='checkout']").click();
    cy.get("[data-test='firstName']").type("QA");
    cy.get("[data-test='lastName']").type("Manager");
    cy.get("[data-test='postalCode']").type("10115");
    cy.get("[data-test='continue']").click();

    cy.get("[data-test='finish']").click();
    cy.get(".complete-header").should("contain.text", "Thank you");
  });
});
