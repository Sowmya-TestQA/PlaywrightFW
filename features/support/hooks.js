const { Before, After, AfterStep } = require("@cucumber/cucumber");
const { POManager } = require('../../pageObjects/POManager');
const { chromium } = require('playwright');

Before(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

AfterStep(async function ({ pickle, result }) {
    if (result.status === 'FAILED') {
        const screenshot = await this.page.screenshot({ path: `screenshots/${pickle.name.replace(/ /g, '_')}.png` });
        this.attach(screenshot, 'image/png');
    }});   

After(async function () {
    console.log("Bye bye!");
    await this.page.close();

});