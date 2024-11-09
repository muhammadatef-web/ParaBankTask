import {expect, type Locator, type Page} from '@playwright/test';



export class  UpdateContactinfo{
readonly page:Page;
readonly Updatelink:Locator;
readonly fname:Locator;
readonly lname:Locator;
readonly Addressf:Locator;
readonly Cityf:Locator;
readonly Statef:Locator;
readonly Zipcodef:Locator;
readonly phonef:Locator;
readonly updatebtn:Locator;
readonly Confirmessage:Locator;




constructor (page:Page){
this.page = page;
this.Updatelink=page.locator('a:has-text("Update Contact Info")');
this.fname = page.locator('//input[@id="customer.firstName"]')
this.lname=page.locator('[id="customer\\.lastName"]');
this.Addressf=page.locator('#customer\\.address\\.street');
this.Cityf=page.locator('#customer\\.address\\.city');
this.Statef=page.locator('#customer\\.address\\.state');
this.Zipcodef=page.locator('#customer\\.address\\.zipCode');
this.phonef=page.locator('#customer\\.phoneNumber');
this.updatebtn=page.getByRole('button', { name: 'Update Profile' });
this.Confirmessage=page.locator('p:has-text("Your updated address and phone number have been added to the system.")');

}
   

   async clearthedatainfieldfirstname(){

          await this.fname.clear();
   }

   async updateUser(userupdateDetails: {
    fname: string,
    lname: string,
    addressf: string,
    cityf: string,
    statef: string,
    zipcodef: string,
    phonef: string,
       }) {
       await this.fname.fill(userupdateDetails.fname)
    await this.lname.fill(userupdateDetails.lname);
    await this.Addressf.fill(userupdateDetails.addressf);
    await this.Cityf.fill(userupdateDetails.cityf);
    await this.Statef.fill(userupdateDetails.statef);
    await this.Zipcodef.fill(userupdateDetails.zipcodef);
    await this.phonef.fill(userupdateDetails.phonef);
} 
async ClickUpdateBtn(){
    await this.updatebtn.click();




}

}