import { Page, Locator } from "@playwright/test";
import {testData} from '../testdata/testdata';

export class LoginPage {
    page: Page;
    userEmail: Locator;
    userPassword: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userEmail = page.locator('#userEmail');
        this.userPassword = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }

    async signIn(){
        await this.userEmail.fill(testData.user.email);
        await this.userPassword.fill(testData.user.password);
        await this.loginButton.click();
    }
}
