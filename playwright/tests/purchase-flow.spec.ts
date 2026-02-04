import { test, expect } from "@playwright/test";
import users from "../../test-data/users.json";

test("Purchase flow (Playwright): can buy one item end-to-end", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-test='username']").fill(users.standard.username);
  await page.locator("[data-test='password']").fill(users.standard.password);
  await page.locator("[data-test='login-button']").click();
  await expect(page).toHaveURL(/inventory\.html/);

  await page.locator("[data-test='add-to-cart-sauce-labs-backpack']").click();
  await page.locator(".shopping_cart_link").click();

  await page.locator("[data-test='checkout']").click();
  await page.locator("[data-test='firstName']").fill("QA");
  await page.locator("[data-test='lastName']").fill("Manager");
  await page.locator("[data-test='postalCode']").fill("10115");
  await page.locator("[data-test='continue']").click();

  await page.locator("[data-test='finish']").click();
  await expect(page.locator(".complete-header")).toContainText("Thank you");
});
