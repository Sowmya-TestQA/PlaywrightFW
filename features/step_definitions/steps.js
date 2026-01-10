const { When, Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const countrytoselect = "India";


Given('a login to ecommerce application with username {string} and password {string}', { timeout: 100 * 1000 }, async function (username, password) {
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.userLogin(username, password);
  this.username = username;

});

When('User searches for the product {string} and adds to cart', async function (productName) {

  const homePage = this.poManager.getHomePage();
  await homePage.searchProductandAddtoCart(productName);
  await homePage.navigateToCart();
});

Then('User verifies for the product {string} is displayed in the cart', async function (productName) {

  const cartPage = this.poManager.getCartPage();
  const value = await cartPage.verifyItemsintheCart(productName);
  expect(value).toBeTruthy(); //V1
  await cartPage.doCheckout();
});

When('Enters valid details and place the order', { timeout: 100 * 1000 }, async function () {
  const paymentPage = this.poManager.getPaymentPage();
  const emailonscreen = await paymentPage.addCountryandValidateusername(this.username, countrytoselect);
  await expect(emailonscreen).toHaveText(this.username); //V2
  await paymentPage.doPlaceOrder();
});

Then('Verifies order is displayed in the order history', { timeout: 100 * 1000 }, async function () {
  const thankyouPage = this.poManager.getThankyouPage();
  const values = await thankyouPage.verifymessageandreturnorderid();
  const cleanOrderId = await values.orderID.replace(/[|]/g, '').trim();
  await expect(values.messagevalue).toHaveText(" Thankyou for the order. "); //V3
  thankyouPage.goToMyOrders();

  const myOrdersPage = this.poManager.getMyOrdersPage();
  const orderid3 = await myOrdersPage.validateMyOrder(cleanOrderId);
  expect((values.orderID).includes(orderid3)).toBeTruthy();
});

Given('a login to ecommerce1 application with username {string} and password {string}', async function (username, password) {
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await this.page.locator('#username').fill(username);
  await this.page.locator("[type='password']").fill(password)
  await this.page.locator("#signInBtn").click();

});

Then('User should see error message.', { timeout: 100 * 1000 },async function () {
const errorMessage = this.page.locator(".alert-danger");
  await expect(errorMessage).toHaveText("Incorrect username/password.");
});


