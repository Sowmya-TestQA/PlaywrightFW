import { LoginPage } from '../pageobjects/LoginPage';
import { HomePage } from '../pageobjects/HomePage';
import { CartPage } from '../pageobjects/CartPage';
import { PaymentPage } from '../pageobjects/PaymentPage';
import { ThankyouPage } from '../pageobjects/ThankyouPage';
import { MyOrdersPage } from '../pageobjects/MyOrdersPage';
import{Page} from 'playwright';

// const { LoginPage } = require('../pageobjects/LoginPage');


export class POManager {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage  ;
    paymentPage: PaymentPage ;
    thankyouPage: ThankyouPage ;
    myOrdersPage: MyOrdersPage ;   
    page:Page;     

    constructor(page:Page) {
        this.page = page;
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
