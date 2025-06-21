const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.DeleteAdminUser = class DeleteAdminUser {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async deleteAdminUser(AdminUserName) {

        // click on Admin link
        await this.page.click(this.locators.adminLink);

        // wait for +Add link to be displayed
        await this.page.waitForSelector(this.locators.addUserLink, { state: 'visible' });

        // Enter username
        await this.page.fill(this.locators.addUserNameInput, AdminUserName);

        // click on search button
        await this.page.click(this.locators.searchBtn);

        // wait for search result
        await this.page.waitForSelector(this.locators.searchResult, { state: 'visible' });

        // get the first search result text
        const firstRowText = await this.page.innerText(this.locators.searchResult).then(text => text.split('\n')[0]);
        expect(firstRowText) === AdminUserName;

        // select the first search result checkbox
        await this.page.click(this.locators.firstResultCheckbox);

        // click on Delete button
        await this.page.clic(this.locators.deleteSelectedBtn);

        // check if Delete button is visible
        const isDeleteBtnVisible = await this.page.isVisible(this.locators.deleteSelectedBtn);
        if (!isDeleteBtnVisible) {
            console.log('Delete button is not visible for the admin user');
            return;
        }


    }
}