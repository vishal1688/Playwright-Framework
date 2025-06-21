const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.Login = class Login {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async open(Url) {
        await this.page.goto(Url); // navigate to the login page
        await expect(this.page).toHaveTitle('OrangeHRM'); // check if the page title is correct

    }

    async login(username, password) {

        await this.page.fill(this.locators.usernameInput, username); // enter the username

        await this.page.fill(this.locators.passwordInput, password); // enter the password

        await this.page.click(this.locators.loginBtn); // click the login button

        await this.page.waitForSelector(this.locators.upgradeBtn, { state: 'visible' }); // check if the upgrade button is visible
    }
}