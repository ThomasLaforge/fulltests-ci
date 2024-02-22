import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
})

// test('saisir un nombre trop grand', async ({ page }) => {
//   // Expect a title "to contain" a substring.
//   await page.locator('#terre').fill('2');
//   await expect(page.locator('#terre')).toHaveValue('2');
// });

test('control no result at start', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page.locator('.heure-value')).not.toBeVisible();
});


test('control click on show button, show result', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.locator('#btn-show').click();
  await expect(page.locator('.heure-value')).toBeVisible();
});
