import { test as setup, expect } from "@playwright/test";
import users from "../../test-data/users.json";

setup("authenticate (standard user)", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-test='username']").fill(users.standard.username);
  await page.locator("[data-test='password']").fill(users.standard.password);
  await page.locator("[data-test='login-button']").click();
  await expect(page).toHaveURL(/inventory\.html/);

  await page.context().storageState({ path: "playwright/.auth/standard.json" });
});
