import {expect, type Locator, type Page} from '@playwright/test';



export class RegisterPage   {
readonly page:Page;

readonly firstname:Locator;
readonly lastname:Locator;
readonly Adress:Locator;
readonly City:Locator;
readonly statefield:Locator;
readonly zipcode:Locator;
readonly phone:Locator;
readonly ssn:Locator;
readonly username:Locator;
readonly password:Locator;
readonly passwordconfirm:Locator;
readonly registerbutton:Locator;
readonly welcomemessage:Locator

constructor(page:Page){

this.page=page;

this.firstname=page.locator('#customer\\.firstName');
this.lastname=page.locator('#customer\\.lastName');
this.Adress=page.locator('#customer\\.address\\.street');
this.City=page.locator('#customer\\.address\\.city');
this.statefield=page.locator('#customer\\.address\\.state');
this.zipcode=page.locator('#customer\\.address\\.zipCode');
this.phone=page.locator('#customer\\.phoneNumber');
this.ssn=page.locator('#customer\\.ssn');
this.username=page.locator('#customer\\.username');
this.password=page.locator('#customer\\.password');
this.passwordconfirm=page.locator('#repeatedPassword');
this.registerbutton=page.getByRole('button', { name: 'Register' });
this.welcomemessage=page.locator('text ="Your account was created successfully. You are now logged in."');




}

     async registerUser(userDetails: {
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        zipcode: string,
        phone: string,
        ssn: string,
        username: string,
        password: string,
        passwordConfirm: string
           }) {
           await this.firstname.fill(userDetails.firstname);
        await this.lastname.fill(userDetails.lastname);
        await this.Adress.fill(userDetails.address);
        await this.City.fill(userDetails.city);
        await this.statefield.fill(userDetails.state);
        await this.zipcode.fill(userDetails.zipcode);
        await this.phone.fill(userDetails.phone);
        await this.ssn.fill(userDetails.ssn);
        await this.username.fill(userDetails.username);
        await this.password.fill(userDetails.password);
        await this.passwordconfirm.fill(userDetails.passwordConfirm);
        
    }
          async ClickonRegisterbutton(){

             await this.registerbutton.click()

                                         }
              async verifyifconfirmationmessageisdisplayed(){

              await  expect(this.welcomemessage).toBeVisible()


              }


}












































