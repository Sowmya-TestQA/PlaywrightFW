import { Locator,Page } from "@playwright/test";
export class ThankyouPage {
    page:Page;
    orderid:Locator;
    message:Locator;
    myorders:Locator;   

    constructor(page:Page) {
        this.page = page;
        this.orderid = page.locator(".em-spacer-1 .ng-star-inserted");
        this.message = page.locator(".hero-primary");
        this.myorders =page.locator("[routerlink*='myorders']");

    }

    async verifymessageandreturnorderid(text:String) {
        const orderID = await this.orderid.textContent();  
        let messagevalue = this.page.locator(".hero-primary");
         let values = {orderID , messagevalue};   
        return values;
    }

    async goToMyOrders(){
        await this.myorders.first().waitFor();
        await this.myorders.first().click();
    }
}
