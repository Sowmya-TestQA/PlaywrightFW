import { test, expect } from '@playwright/test';

//Switching between windows/tabs
test('child windows', async function childwindow({browser}){

const context = await browser.newContext();
const page = await context.newPage();
const docLink = page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const [newpage]=await Promise.all([
    context.waitForEvent('page'),
     docLink.click(),
]) //listen for any new page generation and wait till all the promises are fulfilled

// 3 promise statuses: pending, rejected and fulfilled.
//promise.all() -> used when n number of steps have to be executed parallely async and those lines have to be strictly completed
//  before proceeding with next lines of code.

    console.log(await newpage.locator(".red").textContent());
});

//Switching between context-Just call methods directly on each page — no need to “switch context”


//Frames

test.only('Frames', async function framesTest({page}){
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framepage= page.frameLocator("#courses-iframe");
    await framepage.locator("div a[href*='all-access-subscription']:visible").first().click();
    console.log(await framepage.locator("span.text-4xl").textContent());
    });

