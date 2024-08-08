import { test, expect } from "@playwright/test";

test("first practice test", async ({ page }) => {
  await page.goto("http://localhost:5432");
//   await expect(page.getByRole("heading", { name: "Todo List App" })).toBeVisible();
  await page.getByLabel('New Todo:').fill('Drinking');
  await expect(page.getByLabel('New Todo:')).toHaveValue('Drinking')
//   await page.getByRole("button", { name: /submit/i }).click();
});
