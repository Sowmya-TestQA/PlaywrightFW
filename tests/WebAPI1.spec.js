const { test, expect, request } = require('@playwright/test');
const {APIUtils} = require('../Utils/APIUtils');


const loginPayload = {userEmail: "sowmya64@gmail.com", userPassword: "Sowmya@123"};
const orderPayload = {orders:[{country:"India",productOrderedId:"68a961719320a140fe1ca57c"}]};
let response;

test.beforeAll( async ()=>
{
    const apicontext = await request.newContext();  
     const apiUtils = new APIUtils(apicontext,loginPayload);
    response = await apiUtils.createOrder(orderPayload);
}
);//before all tests

 
test('Placing order', async ({ page }) => {

   const products = page.locator(".card-body");

   page.addInitScript( value => { window.localStorage.setItem('token',value)}, response.token); // login into an account with session cookie via loginAPI call.
    await page.goto("https://rahulshettyacademy.com/client/");
   await page.waitForLoadState('networkidle'); // this step waits till all the network calls are done (inspect-> network tab) dynamic wait
    await products.first().waitFor({ state: 'visible' });
  

   
   await page.locator("[routerlink*='myorders']").first().waitFor();
   await page.locator("[routerlink*='myorders']").first().click();

   const orderlist = page.locator("tbody tr");
   await orderlist.first().waitFor({ state: 'visible' });
   const ordercount = await orderlist.count();  

   for(let j=0; j<ordercount;j++){
    let orderid2 = await orderlist.locator("th").nth(j).textContent();

    if(response.orderid === orderid2){
     expect(orderid2).toBe(response.orderid); 
       await page.locator("tbody tr td button[class*='primary']").nth(j).click();}
    break;
   
   }
  await page.locator(".col-text").first().waitFor({state: 'visible'});
   const orderid3 = await page.locator(".col-text").first().textContent();
   expect(response.orderid.includes(orderid3)).toBeTruthy();
  }

)