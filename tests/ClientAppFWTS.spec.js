"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var POManager_1 = require("../pageobjects_ts/POManager");
var test_data_1 = require("../Utils_ts/test-data");
// import ProductOrderTestData from '../Utils_ts/ProductOrderTestData.json';
// const dataset = JSON.parse(JSON.stringify(ProductOrderTestData));
// for(const data of dataset)
//   {
// test(`Client App login for ${data.productName}`, async ({ page }) =>
//    {
//   const countrytoselect = "India";
//   const poManager = new POManager(page);
//   const loginPage = poManager.getLoginPage();
//   await loginPage.goTo();
//   await loginPage.userLogin(data.username, data.password);
//   const homePage = poManager.getHomePage();
//   await homePage.searchProductandAddtoCart(data.productName);
//   await homePage.navigateToCart();
//   const cartPage = poManager.getCartPage();
//   const value = await cartPage.verifyItemsintheCart(data.productName);
//   expect(value).toBeTruthy(); //V1
//   await cartPage.doCheckout();
//   const paymentPage = poManager.getPaymentPage();
//   const emailonscreen = await paymentPage.addCountryandValidateusername(data.username, countrytoselect);
//   await expect(emailonscreen).toHaveText(data.username); //V2
//   await paymentPage.doPlaceOrder();
//   const thankyouPage = poManager.getThankyouPage();
//   const values = await thankyouPage.verifymessageandreturnorderid();
//   const cleanOrderId = await values.orderID.replace(/[|]/g, '').trim();
//   await expect(values.messagevalue).toHaveText(" Thankyou for the order. "); //V3
//   thankyouPage.goToMyOrders();
//   const myOrdersPage = poManager.getMyOrdersPage();
//   const orderid3 = await myOrdersPage.validateMyOrder(cleanOrderId);
//   expect((values.orderID).includes(orderid3)).toBeTruthy();
// }
// )}
test_data_1.customTest.only('Client App login', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var countrytoselect, poManager, loginPage, homePage, cartPage, value, paymentPage, emailonscreen;
    var page = _b.page, testData = _b.testData;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                countrytoselect = "India";
                poManager = new POManager_1.POManager(page);
                loginPage = poManager.getLoginPage();
                return [4 /*yield*/, loginPage.goTo()];
            case 1:
                _c.sent();
                return [4 /*yield*/, loginPage.userLogin(testData.username, testData.password)];
            case 2:
                _c.sent();
                homePage = poManager.getHomePage();
                return [4 /*yield*/, homePage.searchProductandAddtoCart(testData.productName)];
            case 3:
                _c.sent();
                return [4 /*yield*/, homePage.navigateToCart()];
            case 4:
                _c.sent();
                cartPage = poManager.getCartPage();
                return [4 /*yield*/, cartPage.verifyItemsintheCart(testData.productName)];
            case 5:
                value = _c.sent();
                (0, test_1.expect)(value).toBeTruthy(); //V1
                return [4 /*yield*/, cartPage.doCheckout()];
            case 6:
                _c.sent();
                paymentPage = poManager.getPaymentPage();
                return [4 /*yield*/, paymentPage.addCountryandValidateusername(testData.username, countrytoselect)];
            case 7:
                emailonscreen = _c.sent();
                return [4 /*yield*/, (0, test_1.expect)(emailonscreen).toHaveText(testData.username)];
            case 8:
                _c.sent(); //V2
                return [4 /*yield*/, paymentPage.doPlaceOrder()];
            case 9:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
