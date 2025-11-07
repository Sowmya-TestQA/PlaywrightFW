const { test, expect } = require('@playwright/test');
 
test('@Web Client App login', async ({ page }) => {

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
    
   const count = await products.count();
   for(let i=0; i<count;i++){
     if(await products.nth(i).locator("b").textContent() === productName){
      await products.nth(i).locator("text= Add To Cart").click();
      break;
     }
   }

   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").nth(0).waitFor(); //waits until a list is loaded to check the next line expect().
   const value = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
   expect(value).toBeTruthy();
   await page.locator("text=Checkout").click();

   await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const list=page.locator(".ta-results");
   await list.waitFor();

   for(let i=0; i<await list.locator("button").count();i++){
   let country = await list.locator("button").nth(i).textContent();
   if(country.trim() === "India"){
    await list.locator("button").nth(i).click();
    break;
   }}

   await expect(page.locator(".user__name label[type='text']")).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();  
   const cleanOrderId = orderid.replace(/[|]/g, '').trim(); 
   
   await page.locator("[routerlink*='myorders']").first().waitFor();
   await page.locator("[routerlink*='myorders']").first().click();

   const orderlist = page.locator("tbody tr");
   await orderlist.first().waitFor({ state: 'visible' });
   const ordercount = await orderlist.count();  

   for(let j=0; j<ordercount;j++){
    let orderid2 = await orderlist.locator("th").nth(j).textContent();

    if(cleanOrderId === orderid2){
     expect(orderid2).toBe(cleanOrderId); 
       await page.locator("tbody tr td button[class*='primary']").nth(j).click();}
    break;
   
   }
  await page.locator(".col-text").first().waitFor({state: 'visible'});
   const orderid3 = await page.locator(".col-text").first().textContent();
   expect(orderid.includes(orderid3)).toBeTruthy();
  }

)