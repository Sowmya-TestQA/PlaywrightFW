import { Locator,Page } from "@playwright/test";
export class PaymentPage{
  page:Page;
  countryDropdown:Locator;
  countyrList:Locator;
  emailOnScreen:Locator;
  placeOrder:Locator; 

    constructor(page:Page){
        this.page = page;
        this.countryDropdown = page.getByPlaceholder('Select Country');
        this.countyrList = page.locator(".ta-results");
        this.emailOnScreen = page.locator(".user__name label[type='text']");
        this.placeOrder = page.locator(".action__submit");
    }

    async addCountryandValidateusername(username:string, countrytoselect:string){
          await this.countryDropdown.pressSequentially(countrytoselect, { delay: 150 })
          await this.countyrList.waitFor();
        
          for (let i = 0; i < await this.countyrList.locator("button").count(); i++) {
            let country:String|null = await this.countyrList.locator("button").nth(i).textContent();
            if (country && country.trim() === countrytoselect) {
              await this.countyrList.locator("button").nth(i).click();
              break;
            }
          }

          return this.emailOnScreen;
    }

    async doPlaceOrder(){
         await this.placeOrder.click();
    }

}
