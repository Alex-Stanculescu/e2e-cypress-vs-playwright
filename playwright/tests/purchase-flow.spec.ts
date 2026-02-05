import { test, expect } from "@playwright/test";

test("Purchase flow (Playwright): can buy one item end-to-end", async ({ page }) => {
  // Auth is preloaded via storageState in the Playwright config
  await page.goto("/inventory.html");
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
