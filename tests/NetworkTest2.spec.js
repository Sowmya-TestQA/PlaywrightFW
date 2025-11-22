const { test, expect, request } = require('@playwright/test');


// This test explains how to simulate API response of any API and how to send mock data and validate the test.
// To modify requests - use route.continue({})
// To modify responses - use route.fulfill()

test('@Security test request intercept', async ({ page }) => {
  const email = "sowmya64@gmail.com";
  const productName = 'ADIDAS ORIGINAL';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Sowmya@123");
  await page.locator("[value='Login']").click();

  await page.waitForLoadState('networkidle'); // this step waits till all the network calls are done (inspect-> network tab) dynamic wait
  await products.first().waitFor({ state: 'visible' });
  await products.first().waitFor();

  await page.locator("[routerlink*='myorders']").first().waitFor();
  await page.locator("[routerlink*='myorders']").first().click();

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=692165af5008f6a90931d035' }));
  await page.locator("button:has-text('View')").first().click();
  await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");

});