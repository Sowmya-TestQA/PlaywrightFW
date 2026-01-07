import { Page,Locator } from "@playwright/test";
export class HomePage {
  
    products:Locator;
    cart:Locator;
      page: Page;

    constructor(page:Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");
    }


    async searchProductandAddtoCart(productName:string) {
        await this.products.first().waitFor({ state: 'visible' });
        await this.products.first().waitFor();

        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCart(){
        await this.cart.click();
    }
}
