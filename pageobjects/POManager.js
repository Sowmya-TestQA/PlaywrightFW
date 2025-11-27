const { LoginPage } = require('../pageobjects/LoginPage');
const { HomePage } = require('../pageobjects/HomePage');
const { CartPage } = require('../pageobjects/CartPage');
const { PaymentPage } = require('../pageobjects/PaymentPage');
const { ThankyouPage } = require('../pageobjects/ThankyouPage');
const { MyOrdersPage } = require('../pageobjects/MyOrdersPage');

class POManager {

    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.cartPage = new CartPage(page);
        this.paymentPage = new PaymentPage(page);
        this.thankyouPage = new ThankyouPage(page);
        this.myOrdersPage = new MyOrdersPage(page);

    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getPaymentPage() {
        return this.paymentPage;
    }

    getThankyouPage() {
        return this.thankyouPage;
    }

    getMyOrdersPage() {
        return this.myOrdersPage;
    }
}

module.exports = { POManager };