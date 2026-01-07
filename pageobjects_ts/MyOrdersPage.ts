import { Page,Locator } from "@playwright/test";
export class MyOrdersPage {
    page:Page;
    orderlist:Locator;
    orderview:Locator;

    constructor(page:Page) {
        this.page = page;
        this.orderlist = page.locator("tbody tr");
        this.orderview = page.locator("tbody tr td button[class*='primary']");
    }

    async validateMyOrder(cleanOrderId:string) {

        await this.orderlist.first().waitFor({ state: 'visible' });
        const ordercount = await this.orderlist.count();

        for (let j = 0; j < ordercount; j++) {
            let orderid2 = await this.orderlist.locator("th").nth(j).textContent();

            if (cleanOrderId === orderid2) {
               // expect(orderid2).toBe(cleanOrderId);
                await this.orderview.nth(j).click();
            }
            break;

        }
        await this.page.locator(".col-text").first().waitFor({ state: 'visible' });
        const orderid3 = await this.page.locator(".col-text").first().textContent();
        return orderid3;
    }
}