import users from "../../../test-data/users.json";

describe("Login (Cypress)", () => {
  it("standard user can log in", () => {
    cy.login(users.standard.username, users.standard.password);
    cy.url().should("include", "/inventory.html");
  });

  it("locked out user sees the correct error message", () => {
    cy.login(users.locked.username, users.locked.password);
    cy.get("[data-test='error']")
      .should("be.visible")
      .and("contain.text", "locked out");
  });
});
