declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
    }
  }
}

const BASE = "https://www.saucedemo.com";

function loginViaUI(username: string, password: string) {
  cy.visit(BASE + "/", { failOnStatusCode: false });
  cy.get("[data-test='username']", { timeout: 20000 }).should("be.visible");
  cy.get("[data-test='username']").clear().type(username);
  cy.get("[data-test='password']").clear().type(password, { log: false });
  cy.get("[data-test='login-button']").click();
}

Cypress.Commands.add("login", (username: string, password: string) => {
  if (username === "standard_user") {
    cy.session(
      username,
      () => {
        loginViaUI(username, password);
        cy.url().should("include", "/inventory.html");
      },
      {
        validate: () => {
          // Check the session is still valid by visiting an auth-only page
          cy.visit(BASE + "/inventory.html", { failOnStatusCode: false });
          cy.get("[data-test='inventory-container']", { timeout: 20000 }).should("be.visible");
        }
      }
    );

    // IMPORTANT: session restore does not navigate, so we explicitly navigate for the test
    cy.visit(BASE + "/inventory.html", { failOnStatusCode: false });
    cy.get("[data-test='inventory-container']", { timeout: 20000 }).should("be.visible");
  } else {
    // Negative auth cases should not use session caching
    loginViaUI(username, password);
  }
});

export {};
