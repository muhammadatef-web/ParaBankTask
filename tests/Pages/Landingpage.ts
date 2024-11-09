import {expect, type Locator, type Page} from '@playwright/test';



export class Landingpage  {
readonly page:Page;
readonly Registerlink:Locator;
readonly usernamefield:Locator;
readonly passwordfield:Locator;
readonly loginbutton:Locator;
readonly confirmmessage:Locator;



    constructor (page:Page){
     this.page = page;
     this.Registerlink= page.locator('a:has-text("Register")');
     this.usernamefield=page.locator('input[name="username"]');
     this.passwordfield=page.locator('input[name="password"]');
     this.loginbutton=page.getByRole('button', { name: 'Log In' });
     this.confirmmessage=page.locator('p[class="smallText"]');




    }

    async openWebsite(urlf: string) {
        await this.page.goto(urlf);  // Navigate to the URL
    }


    async ClickonRegisterlink(){

        await this.Registerlink.click()

                                    }

    async fillUsername(usernamef: string) {
        await this.usernamefield.waitFor({ state: 'visible' });
        await this.usernamefield.fill(usernamef);  // Fill the username field
    }

    // Method to fill in the password field
    async fillPassword(passwordf: string) {
        await this.passwordfield.fill(passwordf);  // Fill the password field
    }

    // Method to click the login button
    async clickLoginButton() {
        await this.loginbutton.click();  // Click the login button
    }

    // Method to verify the confirmation message
    async verifyLoginSuccess() {
        await expect(this.confirmmessage).toBeVisible();  // Assert that the confirmation message is visible
    }

async enterlogininfo(usr:string,pas:string){
await this.fillUsername(usr);
await this.fillPassword(pas);
await this.clickLoginButton();

}
















}