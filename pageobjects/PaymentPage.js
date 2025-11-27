class PaymentPage{
    constructor(page){
        this.page = page;
        this.countryDropdown = page.getByPlaceholder('Select Country');
        this.countyrList = page.locator(".ta-results");
        this.emailOnScreen = page.locator(".user__name label[type='text']");
        this.placeOrder = page.locator(".action__submit");
    }

    async addCountryandValidateusername(username, countrytoselect){
          await this.countryDropdown.pressSequentially(countrytoselect, { delay: 150 })
          await this.countyrList.waitFor();
        
          for (let i = 0; i < await this.countyrList.locator("button").count(); i++) {
            let country = await this.countyrList.locator("button").nth(i).textContent();
            if (country.trim() === countrytoselect) {
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

module.exports = {PaymentPage};