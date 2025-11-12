const {test,expect} = require('@playwright/test');

test('first test', async function firsTest({browser}){
const context = await browser.newContext();
const page = await browser.newPage();

const userName = page.locator('#username');
const passWord = page.locator("[type='password']");
const signIn = page.locator("#signInBtn");
const cardTitles = page.locator(".card-body a");
const errorMsg = page.locator("[style*='block']");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshett");
await passWord.fill("learning")
await signIn.click();
console.log(await errorMsg.textContent());
await expect(errorMsg).toContainText("Incorrect username/password.");

await userName.fill("rahulshettyacademy");
await passWord.fill("learning");
await signIn.click();
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);
});

test("UI controls", async({page})=>{
const userName = page.locator('#username');
const passWord = page.locator("[type='password']");
const signIn = page.locator("#signInBtn");
const selector = page.locator("select.form-control");
const terms = page.locator("#terms");
const docLink = page.locator("[href*='documents-request']");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshettyacademy");
await passWord.fill("learning");
await selector.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked(); //tobechecked - whic returns true or false if the checkbox is checked or not
await terms.click();
await expect(terms).toBeChecked(); //tobechecked - assertion that mandates the checkbox should be checked
await terms.uncheck();
expect(await terms.isChecked()).toBeFalsy();
await expect(docLink).toHaveAttribute('class','blinkingText');

});

