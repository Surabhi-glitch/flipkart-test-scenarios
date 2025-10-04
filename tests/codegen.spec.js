import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://saucelabs.com/');
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.getByRole('banner').getByText('Products').click();
  await page.getByRole('link', { name: 'location Platform for Test' }).click();
  await page.getByRole('button', { name: 'Get started free' }).click();
});
