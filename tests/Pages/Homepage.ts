import {expect, type Locator, type Page} from '@playwright/test';


export class Homepage{
readonly page:Page;
readonly Opennewaccountlink:Locator;
readonly Accountoverviewlink:Locator;
readonly UpdateContactinfolink:Locator;




constructor (page:Page){
    this.page=page;
    this.Opennewaccountlink= page.locator('a:has-text("Open New Account")');
    this.Accountoverviewlink=page.locator('a:has-text("Accounts Overview")');
    this.UpdateContactinfolink=page.locator('a:has-text("Update Contact Info")');

}

async Clickonnewaccountlink(){
    await expect(this.Opennewaccountlink).toBeVisible();
    await this.Opennewaccountlink.click();
}

async ClickonAccountoverviewlink(){
    await expect(this.Accountoverviewlink).toBeVisible();
    await this.Accountoverviewlink.click();

};
async ClickonupdateLink(){
    await expect(this.UpdateContactinfolink).toBeVisible();
    await this.Accountoverviewlink.click();

}




}