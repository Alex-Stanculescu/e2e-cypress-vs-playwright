import { test, expect } from "@playwright/test";
import users from "../../test-data/users.json";

test("Login (Playwright): standard user can log in", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-test='username']").fill(users.standard.username);
  await page.locator("[data-test='password']").fill(users.standard.password);
  await page.locator("[data-test='login-button']").click();
  await expect(page).toHaveURL(/inventory\.html/);
});

test("Login (Playwright): locked out user sees the correct error message", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-test='username']").fill(users.locked.username);
  await page.locator("[data-test='password']").fill(users.locked.password);
  await page.locator("[data-test='login-button']").click();
  await expect(page.locator("[data-test='error']")).toBeVisible();
  await expect(page.locator("[data-test='error']")).toContainText(/locked out/i);
});
