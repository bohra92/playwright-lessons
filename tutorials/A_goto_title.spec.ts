import { test, expect } from '@playwright/test';

test('has title , url and content', async ({ page }) => {
    //navigate to URL , getting title , getting url
  await page.goto('https://playwright.dev/');
  console.log(await page.title());
  console.log(await page.url());
  console.log(await page.content());
  
  // Expect a title "to contain" a substring.
  await page.waitForTimeout(2000)
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL('https://playwright.dev/');
});
