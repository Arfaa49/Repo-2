import{test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import {OrderPage} from  '../Pages/OrderPage'

test.beforeEach('Login Test', async ({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto('https://rahulshettyacademy.com/client/auth/login')
    await loginPage.signIn();
    await expect(page.getByRole('heading', { name: 'Filters' })).toBeVisible()
});
test('Order', async ({page})=>{
    const order = new OrderPage(page)
    await order.orderButton();
    //await page.getByText('Orders').click();
    //await page.getByRole('button', { name: 'Delete' }).first().click();
});

test('Logout', async ({page})=>{
    await page.getByRole('button', { name: 'Sign Out' }).click();
   await expect(page.locator('.login-title')).toContainText('Log in')



});