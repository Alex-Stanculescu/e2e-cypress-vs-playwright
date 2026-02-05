import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/ },
    {
      name: "e2e",
      dependencies: ["setup"],
      use: { storageState: "playwright/.auth/standard.json" }
    }
  ],
  use: {
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },
  reporter: [["html", { open: "never" }]]
});
