import { test, expect } from "@playwright/test";

test("first practice test", async ({ page }) => {
  await page.goto("http://localhost:5432");

// await 
  await expect(page.getByRole('heading', { name: 'Todo List App' })).toBeVisible();//see the "Todo List App" heading
  await page.getByLabel('New Todo:').fill('Drinking');//enter a todo into the input with the "New Todo:" label
  await expect(page.getByLabel('New Todo:')).toHaveValue('Drinking')
  await page.getByRole("button", { name: 'Add' }).click();// click on the "Add" button to clear the input and add the todo to the list
  await expect(page.getByLabel('New Todo:')).not.toHaveValue('Drinking')//created todo in the list with an unchecked box and delete button
  await expect(page.getByText('DrinkingDelete').first()).toBeVisible();
  await page.reload();
});

