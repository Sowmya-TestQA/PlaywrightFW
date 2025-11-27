const { test, expect, request } = require('@playwright/test');
const { APIUtils } = require('../Utils/APIUtils');


const loginPayload = { userEmail: "sowmya64@gmail.com", userPassword: "Sowmya@123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "68a961719320a140fe1ca57c" }] };
let response;
let FakePayload = { data: [], message: "No Orders" }

test.beforeAll(async () => {
  const apicontext = await request.newContext();
  const apiUtils = new APIUtils(apicontext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
}
);//before all tests

// This test explains how to simulate API response of any API and how to send mock data and validate the test.
// To modify requests - use route.continue({})
// To modify responses - use route.fulfill()

test('Placing order', async ({ page }) => {

  const products = page.locator(".card-body");

  page.addInitScript(value => { window.localStorage.setItem('token', value) }, response.token); // login into an account with session cookie via loginAPI call.
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.waitForLoadState('networkidle'); // this step waits till all the network calls are done (inspect-> network tab) dynamic wait
  await products.first().waitFor({ state: 'visible' });

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      //interespting the response. API response -> playwright fake response -> Send to browser -> Front render the data 
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(FakePayload);
      await route.fulfill({ response, body });
    });


  await page.locator("[routerlink*='myorders']").first().waitFor();
  await page.locator("[routerlink*='myorders']").first().click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  console.log(await page.locator('.mt-4').textContent());
}

)