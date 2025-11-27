class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameLoc = page.locator("#userEmail");
        this.passwordLoc = page.locator("#userPassword");
        this.signInBtn = page.locator("[value='Login']");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async userLogin(username, password) {
        await this.usernameLoc.fill(username);
        await this.passwordLoc.fill(password);
        await this.signInBtn.click();
        await this.page.waitForLoadState('networkidle');
        // this step waits till all the network calls are done (inspect-> network tab) dynamic wait
    }


}

module.exports = { LoginPage };