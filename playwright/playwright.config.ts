import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },
  reporter: [["html", { open: "never" }]]
});
