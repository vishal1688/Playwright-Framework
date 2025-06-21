const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.DeleteUser = class DeleteUser {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async deleteUser(NewUserName) {

        // click on Admin link
        await this.page.click(this.locators.adminLink);

        // wait for +Add link to be displayed
        await this.page.waitForSelector(this.locators.addUserLink, { state: 'visible' });

        // Enter username
        await this.page.fill(this.locators.addUserNameInput, NewUserName);

        // click on search button
        await this.page.click(this.locators.searchBtn);

        // wait for search result
        await this.page.waitForSelector(this.locators.searchResult, { state: 'visible' });

        // get the first search result text
        const firstRowText = await this.page.innerText(this.locators.searchResult).then(text => text.split('\n')[0]);
        expect(firstRowText) === NewUserName;

        // select the first search result checkbox
        await this.page.click(this.locators.firstResultCheckbox);

        // wait for Delete button to be displayed
        await this.page.waitForSelector(this.locators.deleteSelectedBtn, { state: 'visible' });

        // click on Delete button
        await this.page.click(this.locators.deleteSelectedBtn);

        // click on Yes button
        await this.page.click(this.locators.confirmDeleteBtn);

        // wait for no record popup to be displayed
        await this.page.waitForSelector(this.locators.norecordPopup, { state: 'visible' });
    }
}