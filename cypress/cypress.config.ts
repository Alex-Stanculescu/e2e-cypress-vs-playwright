import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.ts",
    video: true,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false
  }
});
