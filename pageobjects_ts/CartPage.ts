import { Locator,Page } from "@playwright/test";
export class CartPage {

    Itemslist:Locator;
    Checkout:Locator;
    page:Page;
    
    constructor(page:Page) {
        this.page = page;
        this.Itemslist = page.locator("div li");
        this.Checkout = page.locator("text=Checkout");
    }

    async verifyItemsintheCart(productName:string) {
        await this.Itemslist.nth(0).waitFor(); //waits until a list is loaded to check the next line expect().
        const value = this.page.locator("h3:has-text('"+productName+"')isVisible()");
        return value;
    }

    async doCheckout(){
        await this.Checkout.click();
    }
}
