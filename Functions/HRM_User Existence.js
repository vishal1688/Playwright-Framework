const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.UserExist = class UserExist {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async userExist(NewUserName) {

        // wait until addUserNameInput field to be displayed
        await this.page.waitForSelector(this.locators.addUserNameInput, { state: 'visible' });

        // Enter username
        await this.page.fill(this.locators.addUserNameInput, NewUserName);

        // click on search button
        await this.page.click(this.locators.searchBtn);

        // wait for search result
        await this.page.waitForSelector(this.locators.searchResult, { state: 'visible' });

        // click on search button until search result is displayed
        while (!(await this.page.$(this.locators.searchResult))) {
            await this.page.click(this.locators.searchBtn);
        }

        // get the search result text
        const resultText = await this.page.innerText(this.locators.searchResult);
        console.log(`Search Result: ${resultText}`); // print the result

        // check if the search result contains the username
        const firstRowText = await this.page.innerText(this.locators.searchResult).then(text => text.split('\n')[0]);
        expect(firstRowText).toContain(NewUserName);

    }
}