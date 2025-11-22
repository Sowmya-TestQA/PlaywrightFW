const { test, expect } = require('@playwright/test')

test("more validations", async function validatemethod({ page }) {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();


});

test("Screenshot comparison", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({ path: 'partialScreenshot.png' }); //Only webelement level screenshot
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'pagescreenshot.png' }); // Page level screenshot
    await expect(page.locator("#displayed-text")).toBeHidden();
});

test.only("Visual comparison test", async ({ page }) => {
    await page.goto("https://www.flightaware.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
});