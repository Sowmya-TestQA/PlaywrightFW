const {test,expect} = require('@playwright/test');

test.only('Browser fixture test', async function first({browser}){

const context = await browser.newContext();
const page = await browser.newPage();
// to abort or stop loading files while the network calls are made to reduce load time of the web
page.route("**/*.css", route => route.abort());
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator('#username').fill("learning01");
await page.locator("[type='password']").fill("learning01")
await page.locator("#signInBtn").click();
//below 2 lines are explaining on() listener which listens all network calls made and prints into the console. which used for debugging purposes.
 page.on('request', request => console.log(request.url()));
page.on('response', response => console.log(response.url(), response.status()));
await page.locator("[style*='block']")
});



test('page fixture test', async({page})=>{

await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle("Google");
}); //only keyword helps to run a particular test case