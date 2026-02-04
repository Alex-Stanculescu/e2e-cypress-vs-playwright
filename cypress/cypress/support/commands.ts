declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.visit("/", { failOnStatusCode: false });

  // Instead of relying on the window 'load' event, wait for a stable UI element
  cy.get("[data-test='username']", { timeout: 20000 }).should("be.visible");

  cy.get("[data-test='username']").clear().type(username);
  cy.get("[data-test='password']").clear().type(password, { log: false });
  cy.get("[data-test='login-button']").click();
});

export {};
