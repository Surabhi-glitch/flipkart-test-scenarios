const { test, expect } = require('@playwright/test');

test('basic Playwright site check', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
