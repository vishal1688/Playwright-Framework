const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.Logout = class Logout {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async logout() {

        // click the profile dropdown button
        await this.page.click(this.locators.profileDropdown);

        // click the logout button
        await this.page.click(this.locators.logoutBtn);
    }
}