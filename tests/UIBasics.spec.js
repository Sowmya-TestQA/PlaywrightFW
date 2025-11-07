const {test,expect} = require('@playwright/test');

test('Browser fixture test', async function first({browser}){

const context = await browser.newContext();
const page = await browser.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator('#username').fill("learning01");
await page.locator("[type='password']").fill("learning01")
await page.locator("#signInBtn").click();
await page.locator("[style*='block']")
});



test('page fixture test', async({page})=>{

await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle("Google");
}); //only keyword helps to run a particular test case