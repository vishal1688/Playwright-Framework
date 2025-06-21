const { expect } = require('@playwright/test');
import HRM_Locators from '../ObjectRepo/HRM_Locators.json';


exports.CreateUser = class CreateUser {
    constructor(page) {
        this.page = page;
        this.locators = HRM_Locators;
    }

    async createUser(UserRole, Status, EmployeeName, UserName, Password, ConfirmPassword) {
        // click on Admin link
        await this.page.click(this.locators.adminLink);

        // wait for +Add link to be displayed
        await this.page.waitForSelector(this.locators.addUserLink, { state: 'visible' });

        // click on +Add link
        await this.page.click(this.locators.addUserLink);

        // Click on user role chevron icon
        await this.page.click(this.locators.userRoleChevron);

        // select user role
        await this.page.getByRole('option', { name: UserRole }).locator('span').click();

        // Click on status chevron icon
        await this.page.click(this.locators.statusChevron);

        // select status
        await this.page.getByRole('option', { name: Status }).locator('span').click();

        // enter employee name
        await this.page.fill(this.locators.employeeNameInput, EmployeeName);

        // select employee
        await this.page.getByRole('option', { name: EmployeeName }).first().click();

        // enter username
        await this.page.fill(this.locators.addUserNameInput, UserName);

        // enter password
        await this.page.fill(this.locators.addPasswordInput, Password);

        // enter confirm password
        await this.page.fill(this.locators.addConfirmPasswordInput, ConfirmPassword);

        // click on save button
        await this.page.click(this.locators.saveBtn);

        // wait until addUserLink to be displayed
        await this.page.waitForSelector(this.locators.addUserLink, { state: 'visible' });

    }
}