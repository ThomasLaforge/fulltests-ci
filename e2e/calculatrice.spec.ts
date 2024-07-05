import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/calculatrice');
})

test.describe('numbers', () => {
  test.describe('solo', () => {
    test("1", async ({ page }) => {
      await page.locator("#num-1").click(); 
      await expect(page.locator('#screen')).toHaveText('1');
    })

    test("2", async ({ page }) => {
      await page.locator('#num-2').click();
      await expect(page.locator('#screen')).toHaveText('2');
    });

    test("3", async ({ page }) => {
      await page.locator('#num-3').click();
      await expect(page.locator('#screen')).toHaveText('3');
    });

    test("4", async ({ page }) => {
      await page.locator('#num-4').click();
      await expect(page.locator('#screen')).toHaveText('4');
    });

    test("5", async ({ page }) => {
      await page.locator('#num-5').click();
      await expect(page.locator('#screen')).toHaveText('5');
    });

    test("6", async ({ page }) => {
      await page.locator('#num-6').click();
      await expect(page.locator('#screen')).toHaveText('6');
    });

    test("7", async ({ page }) => {
      await page.locator('#num-7').click();
      await expect(page.locator('#screen')).toHaveText('7');
    });

    test("8", async ({ page }) => {
      await page.locator('#num-8').click();
      await expect(page.locator('#screen')).toHaveText('8');
    });

    test("9", async ({ page }) => {
      await page.locator('#num-9').click();
      await expect(page.locator('#screen')).toHaveText('9');
    });

    test("0", async ({ page }) => {
      await page.locator('#num-0').click();
      await expect(page.locator('#screen')).toHaveText('0');
    });

  });

  test.describe('multiple', () => {
    test("with first number = 0", async ({ page }) => {
      await page.locator('#num-0').click();
      await page.locator('#num-1').click();
      await expect(page.locator('#screen')).toHaveText('1');
    });

    test("simple", async ({ page }) => {
      await page.locator('#num-1').click();
      await page.locator('#num-2').click();
      await expect(page.locator('#screen')).toHaveText('12');
    });

    test("all", async ({ page }) => {
      await page.locator('#num-1').click();
      await page.locator('#num-2').click();
      await page.locator('#num-3').click();
      await page.locator('#num-4').click();
      await page.locator('#num-5').click();
      await page.locator('#num-6').click();
      await page.locator('#num-7').click();
      await page.locator('#num-8').click();
      await page.locator('#num-9').click();
      await page.locator('#num-0').click();
      await expect(page.locator('#screen')).toHaveText('1234567890');
    });
  });
});

test.describe('operations', () => {
  test("sum", async ({ page }) => {
    await page.locator('#num-1').click();
    await page.locator('#sum').click();
    await page.locator('#num-2').click();
    await page.locator('#equal').click();
    await expect(page.locator('#screen')).toHaveText('3');
  });

  test("soustraction", async ({ page }) => {
    await page.locator('#num-2').click();
    await page.locator('#soustraction').click();
    await page.locator('#num-1').click();
    await page.locator('#equal').click();
    await expect(page.locator('#screen')).toHaveText('1');
  });

  test("multiplication", async ({ page }) => {
    await page.locator('#num-2').click();
    await page.locator('#multiplication').click();
    await page.locator('#num-4').click();
    await page.locator('#equal').click();
    await expect(page.locator('#screen')).toHaveText('8');
  });

  test("sum and multiplication", async ({ page }) => {
    // await page.locator('#num-2').click();
    // await page.locator('#sum').click();
    // await page.locator('#num-3').click();
    // await page.locator('#multiplication').click();
    // await page.locator('#num-4').click();
    // await page.locator('#equal').click();
    // await expect(page.locator('#screen')).toHaveText('20');

    await page.locator('#num-2').click();
    await page.locator('#sum').click();
    await page.locator('#num-3').click();
    await page.locator('#equal').click();
    await page.locator('#multiplication').click();
    await page.locator('#num-4').click();
    await page.locator('#equal').click();
    await expect(page.locator('#screen')).toHaveText('20');
  });
});

test.describe('reset', () => {
  test("reset", async ({ page }) => {
    await page.locator('#num-2').click();
    await page.locator('#sum').click();
    await page.locator('#num-3').click();
    await page.locator('#reset').click();
    await expect(page.locator('#screen')).toHaveText('0');
  });
});

test('button equal is red', async ({ page }) => {
  await expect(page.locator('#equal')).toHaveCSS('background-color', 'rgb(255, 0, 0)');
});