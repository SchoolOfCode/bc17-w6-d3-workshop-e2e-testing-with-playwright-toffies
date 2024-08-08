import { test, expect } from "@playwright/test"

test('first practice test', async ({ page }) => {
    await page.goto('http://localhost:5432');
})