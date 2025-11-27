const { test, expect } = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../Utils/ProductOrderTestData.json")));
const {customisedTest} = require('../Utils/test-data');

for(const data of dataset)
  {
test(`Client App login for ${data.productName}`, async ({ page }) =>
   {

  const countrytoselect = "India";
  const poManager = new POManager(page);
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.userLogin(data.username, data.password);

  const homePage = poManager.getHomePage();
  await homePage.searchProductandAddtoCart(data.productName);
  await homePage.navigateToCart();

  const cartPage = poManager.getCartPage();
  const value = await cartPage.verifyItemsintheCart(data.productName);
  expect(value).toBeTruthy(); //V1
  await cartPage.doCheckout();

  const paymentPage = poManager.getPaymentPage();
  const emailonscreen = await paymentPage.addCountryandValidateusername(data.username, countrytoselect);
  await expect(emailonscreen).toHaveText(data.username); //V2
  await paymentPage.doPlaceOrder();

  const thankyouPage = poManager.getThankyouPage();
  const values = await thankyouPage.verifymessageandreturnorderid();
  const cleanOrderId = await values.orderID.replace(/[|]/g, '').trim();
  await expect(values.messagevalue).toHaveText(" Thankyou for the order. "); //V3
  thankyouPage.goToMyOrders();

  const myOrdersPage = poManager.getMyOrdersPage();
  const orderid3 = await myOrdersPage.validateMyOrder(cleanOrderId);
  expect((values.orderID).includes(orderid3)).toBeTruthy();

}

)}


customisedTest.only('Client App login', async ({ page,testData }) =>
   {

  const countrytoselect = "India";
  const poManager = new POManager(page);
  
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.userLogin(testData.username, testData.password);

  const homePage = poManager.getHomePage();
  await homePage.searchProductandAddtoCart(testData.productName);
  await homePage.navigateToCart();

  const cartPage = poManager.getCartPage();
  const value = await cartPage.verifyItemsintheCart(testData.productName);
  expect(value).toBeTruthy(); //V1
  await cartPage.doCheckout();

  const paymentPage = poManager.getPaymentPage();
  const emailonscreen = await paymentPage.addCountryandValidateusername(testData.username, countrytoselect);
  await expect(emailonscreen).toHaveText(testData.username); //V2
  await paymentPage.doPlaceOrder();
   });