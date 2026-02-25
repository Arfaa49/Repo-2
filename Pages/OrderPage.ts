import { Page, Locator, expect } from "@playwright/test";
import {testData} from '../testdata/testdata';

export class OrderPage{
    page: Page;
    order: Locator;
    delete: Locator;


    constructor(page: Page){
        this.page = page;
        this.order = page.getByText('Orders')
        this.delete = page.getByRole('button', { name: 'Delete' })
    }

    async orderButton(){
        await this.order.click();
    }
}

