"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POManager = void 0;
var LoginPage_1 = require("../pageobjects/LoginPage");
var HomePage_1 = require("../pageobjects/HomePage");
var CartPage_1 = require("../pageobjects/CartPage");
var PaymentPage_1 = require("../pageobjects/PaymentPage");
var ThankyouPage_1 = require("../pageobjects/ThankyouPage");
var MyOrdersPage_1 = require("../pageobjects/MyOrdersPage");
// const { LoginPage } = require('../pageobjects/LoginPage');
var POManager = /** @class */ (function () {
    function POManager(page) {
        this.page = page;
        this.loginPage = new LoginPage_1.LoginPage(page);
        this.homePage = new HomePage_1.HomePage(page);
        this.cartPage = new CartPage_1.CartPage(page);
        this.paymentPage = new PaymentPage_1.PaymentPage(page);
        this.thankyouPage = new ThankyouPage_1.ThankyouPage(page);
        this.myOrdersPage = new MyOrdersPage_1.MyOrdersPage(page);
    }
    POManager.prototype.getLoginPage = function () {
        return this.loginPage;
    };
    POManager.prototype.getHomePage = function () {
        return this.homePage;
    };
    POManager.prototype.getCartPage = function () {
        return this.cartPage;
    };
    POManager.prototype.getPaymentPage = function () {
        return this.paymentPage;
    };
    POManager.prototype.getThankyouPage = function () {
        return this.thankyouPage;
    };
    POManager.prototype.getMyOrdersPage = function () {
        return this.myOrdersPage;
    };
    return POManager;
}());
exports.POManager = POManager;
